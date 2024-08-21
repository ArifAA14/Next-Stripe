import Server, { ProductWithPrice } from "@/app/actions/server";
import Image from "next/image";
import React from "react";

async function Suggested({ product }: { product: ProductWithPrice }) {
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
					return (
						<div className="flex flex-col gap-0   " key={product.id}>
							<Image
								src={product.images[0]}
								width={1640}
								height={1240}
								alt="suggested product"
								className="w-full h-full object-cover md:max-h-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] rounded"
							/>
							<h2 className="text-base font-medium mt-2">{product.name}</h2>
							<h4 className="text-sm font-normal mt-0.5">£{product.price}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Suggested;
