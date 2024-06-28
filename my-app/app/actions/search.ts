'use server';
import stripe from "@/config/stripe";


const getData = async () => {
    const res = await stripe.products.search({
      limit: 100,
      query: `active:'true'`,  // corrected single quotes
    });
    const data = await res.data;
    return data;
  };

export default getData;