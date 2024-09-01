"use client";
/* eslint-disable @next/next/no-img-element */
import { ProductWithPrice } from "@/app/actions/search";
import Link from "next/link";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/Dialog";
import VariantPicker from "./Variant/VariantPicker";
import Image from "next/image";
import Add from "../Cart/Add";
import Carousel from "../ui/Carousel/Carousel";

function Product({ product }: { product: ProductWithPrice }) {
	const [size, setSize] = React.useState<string | null>(null);
	return (
		<Dialog>
			<DialogTrigger className="outline-none focus:outline-none">
				<div
					key={product.id}
					className="w-full h-full rounded-xl  group cursor-pointer  relative flex flex-col gap-2.5 "
				>
					<Carousel images={product.images} />
					<div className="flex flex-col gap-1 mt-1 ml-1 text-left">
						<h1 className="text-base font-medium text-black">{product.name}</h1>
						<p className="text-base font-normal text-gray-500">1 Color</p>
						<p className="text-base font-medium text-black">£{product.price}</p>
					</div>
				</div>
			</DialogTrigger>
			<DialogContent
				className=" bg-white p-4 rounded-xl  w-[75vw] max-h-fit
			md:w-[90vw] md:max-w-[700px] max-w-[400px]   grid grid-cols-1 md:grid-cols-2 gap-4 justify-between"
			>
				<div className=" w-full h-full  outline-none   max-h-[300px] md:max-h-[400px] ">
					<Image
						src={product.images[0]}
						alt={product.name}
						priority
						width={400}
						height={400}
						quality={100}
						className="w-full h-full object-fill     rounded-lg  "
					/>
				</div>

				<div className="flex flex-col gap-1 mt-0  justify-between">
					<div className="flex flex-col gap-1">
						<h1 className="text-base font-medium text-black">{product.name}</h1>
						<p className=" text-[10px] md:text-sm tracking-tighter md:tracking-tight font-normal text-gray-400 ">
							{product && product.description}
						</p>

						<div className="flex items-center w-full justify-between mt-4">
							<VariantPicker
								type={product.metadata.type}
								size={size}
								setSize={setSize}
							/>
							<p className="text-base font-medium text-black mr-4 ">
								£{product.price}
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<Link
							href={`product/${product.id}`}
							className="w-full "
							passHref
							legacyBehavior
							prefetch
						>
							<button
								className="bg-white border text-black text-base font-normal rounded-md px-4 py-2 mt-2
							hover:bg-neutral-100 transition duration-300 ease-in-out
						"
							>
								view
							</button>
						</Link>
						<Add size={size} product={product} />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default Product;
