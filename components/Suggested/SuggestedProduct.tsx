"use client";
import { ProductWithPrice } from "@/app/actions/server";
import Image from "next/image";
import React from "react";

function SuggestedProduct({ product }: { product: ProductWithPrice }) {
	return (
		<div
			className="flex flex-col gap-0 cursor-pointer"
			onClick={() => (window.location.href = `/product/${product.id}`)}
			key={product.id}
		>
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
}

export default SuggestedProduct;
