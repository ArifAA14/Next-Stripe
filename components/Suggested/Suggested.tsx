import Server, { ProductWithPrice } from "@/app/actions/server";
import Image from "next/image";
import React from "react";
import SuggestedProduct from "./SuggestedProduct";

async function SuggestedProducts({ product }: { product: ProductWithPrice }) {
	const server = new Server();
	const data = await server.getSuggestedProducts(product.metadata.type);
	const suggestedProducts = data.filter(
		(d: ProductWithPrice) => d.id !== product.id
	);

	if (suggestedProducts.length === 0) {
		return null;
	}

	return (
		<div className="  w-full h-full p-10 bg-white rounded-lg mt-10 mb-40 md:mb-40">
			<h1 className="text-xl font-normal uppercase">you might also like</h1>
			<div className="flex w-full h-full mt-10  md:gap-4 flex-col gap-4  md:flex-row ">
				{suggestedProducts.map((product: ProductWithPrice) => {
					return <SuggestedProduct key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}

export default SuggestedProducts;
