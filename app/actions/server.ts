'use server'
import stripe from "@/config/stripe";
import { formatToDecimal } from "@/lib/toDecimal";
import Stripe from "stripe";


export interface ProductWithPrice extends Stripe.Product {
  price: any;
}

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
}

export default Server;