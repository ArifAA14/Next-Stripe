"use client";
/* eslint-disable @next/next/no-img-element */
import { ProductWithPrice } from "@/app/actions/search";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/Dialog";
import VariantPicker from "./Variant/VariantPicker";

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
			<DialogContent className=" bg-white p-4 rounded-xl max-h-[90vh] w-[85vw] md:w-[90vw] md:max-w-[700px] max-w-[400px]   grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
				<div className=" w-full h-full  outline-none    ">
					<img
						src={product.images[0]}
						alt={product.name}
						className="w-full h-full object-fill  object-center  max-h-[350px]  rounded-md  "
					/>
				</div>

				<div className="flex flex-col gap-1 mt-0  justify-between">
					<div className="flex flex-col gap-1">
						<h1 className="text-base font-medium text-black">{product.name}</h1>
						<p className=" text-[11px] md:text-sm tracking-tight font-normal text-gray-400 ">
							{product && product.description}
						</p>

						<div className="flex items-center w-full justify-between mt-4">
							<VariantPicker type={product.metadata.type} />
							<p className="text-base font-medium text-black ">
								£{product.price}
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<button className="bg-white border text-black text-base font-normal rounded-md px-4 py-2 mt-2">
							view
						</button>
						<button className="bg-black text-white text-base font-normal rounded-md px-4 py-2 mt-2">
							add
						</button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default Product;
