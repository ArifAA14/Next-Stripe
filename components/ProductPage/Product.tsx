"use client";
import { ProductWithPrice } from "@/app/actions/server";
import Picker from "@/app/product/[id]/Picker";
import React from "react";
import ProductInfo from "../misc/ProductInfo";
import Add from "../Cart/Add";
import Carousel from "../ui/Carousel/Carousel";

function Product({ product }: { product: ProductWithPrice }) {
	const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-16 w-full h-full ">
			<Carousel images={product.images} />
			<div className="flex flex-col gap-5 justify-between">
				<div className="flex flex-col gap-4">
					<h1 className="text-xl font-semibold">{product.name}</h1>
					<p className="text-gray-500 text-pretty tracking-tight">
						{product.description}
					</p>

					<div className="flex items-center w-full justify-between mt-2">
						<p className="text-base font-semibold text-black ">
							£{product.price}
						</p>
						<Picker
							type={product.metadata.type}
							size={selectedSize}
							setSize={setSelectedSize}
						/>
					</div>

					<ProductInfo />
				</div>

				<div className="flex flex-col gap-2">
					<Add size={selectedSize} product={product} />
				</div>
			</div>
		</div>
	);
}

export default Product;
