"use client";
/* eslint-disable @next/next/no-img-element */
import { ProductWithPrice } from "@/app/actions/search";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/Dialog";

function Product({ product }: { product: ProductWithPrice }) {
	return (
		<Dialog>
			<DialogTrigger className="outline-none focus:outline-none">
				<div
					key={product.id}
					className="w-full h-full rounded-xl  group cursor-pointer  relative flex flex-col gap-2.5 "
				>
					<img
						src={product.images[0]}
						alt={product.name}
						className="w-full h-full object-contain rounded shadow-sm 
						md:max-h-[600px] max-w-full
						group-hover:opacity-80 transition duration-300 ease-in-out"
					/>
					<div className="flex flex-col gap-1 mt-0 ml-1 text-left">
						<h1 className="text-base font-medium text-black">{product.name}</h1>
						<p className="text-base font-normal text-gray-500">1 Color</p>
						<p className="text-base font-medium text-black">£{product.price}</p>
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className=" bg-white p-4 rounded-xl max-h-[95vh] w-[90vw] max-w-[500px]   flex flex-col gap-0 justify-between">
				<div className="flex-1 w-full h-full  outline-none mb-2 md:mb-4">
					<img
						src={product.images[0]}
						alt={product.name}
						className="w-full h-full object-cover max-h-[400px]   rounded-xl  max-w-full"
					/>
				</div>

				<div className="flex flex-col gap-1 mt-0 ml-1 text-left">
					<h1 className="text-base font-medium text-black">{product.name}</h1>
					<p className=" text-xs font-normal text-gray-600">
						{product &&
							product.description &&
							product.description.slice(0, 100)}
					</p>
					<p className="text-base font-medium text-black">£{product.price}</p>
					<button className="bg-neutral-200 border text-black text-base font-normal rounded-md px-4 py-2 mt-2">
						View
					</button>
					<button className="bg-black text-white text-base font-normal rounded-md px-4 py-2 mt-2">
						Add to Bag
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default Product;
