'use server'
import stripe from "@/config/stripe";
import { formatToDecimal } from "@/lib/toDecimal";
import Stripe from "stripe";
import { ItemArray } from "../providers/cartstore";


export interface ProductWithPrice extends Stripe.Product {
  price: any;
}

const url = process.env.NODE_ENV === "production" ? "https://comm-mu.vercel.app/" : "http://localhost:3000";

class Server {


  public async getAllProducts(): Promise<ProductWithPrice[]> {
    const res = await stripe.products.search({
      query: `active:'true'`,
    });

    const products = res.data;

    const productsWithPrices = await Promise.all(products.map(async (product) => {
      if (product.default_price) {
        //@ts-ignore
        const price = await stripe.prices.retrieve(product.default_price, {

        });
        return {
          ...product,
          price: formatToDecimal(price.unit_amount_decimal),

        }
      } else {
        return {
          ...product,
          price: 0
        }
      }
    }));

    return productsWithPrices;
  }

  public async getSuggestedProducts(type: string): Promise<ProductWithPrice[]> {
    const res = await stripe.products.search({
      query: `metadata["type"]:"${type}"`,
    });

    const products = res.data;

    const productsWithPrices = await Promise.all(products.map(async (product) => {
      if (product.default_price) {
        //@ts-ignore
        const price = await stripe.prices.retrieve(product.default_price, {

        });
        return {
          ...product,
          price: formatToDecimal(price.unit_amount_decimal),

        }
      } else {
        return {
          ...product,
          price: 0
        }
      }
    }));

    return productsWithPrices;
  }


  public async getProduct(id: string): Promise<ProductWithPrice> {
    const product = await stripe.products.retrieve(id);
    if (product.default_price) {
      //@ts-ignore
      const price = await stripe.prices.retrieve(product.default_price, {

      });
      return {
        ...product,
        price: formatToDecimal(price.unit_amount_decimal),

      }
    } else {
      return {
        ...product,
        price: 0
      }
    }
  }

  public async uploadImages(images: string[], product: Stripe.Product) {
    const res = await stripe.products.update(product.id, {
      images,
    });
    return res;

  }

  public async createCheckoutSession(products: ItemArray[]) {
    const res = await stripe.checkout.sessions.create({
      line_items: products.map((product: any) => {
        return {
          price: product.priceId,
          quantity: product.quantity,
        }
      }),
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/cart`,


    });

    return res;
  }

  public async completeCheckoutSession(sessionId: string) {
    const res = await stripe.checkout.sessions.retrieve(sessionId);
    const paymentIntent = await stripe.paymentIntents.retrieve(res.payment_intent as string);
    const charge = await stripe.charges.retrieve(paymentIntent.latest_charge as string);
    const receiptUrl = charge.receipt_url;
    return receiptUrl;
  }
}

export default Server;