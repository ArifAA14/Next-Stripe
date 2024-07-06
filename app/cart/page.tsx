"use client";
import CartComponent from "@/components/Cart/Cart";
import { ArrowLeftIcon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import useStore from "../providers/cartstore";
import Image from "next/image";

function CartPage() {
	const { items } = useStore();
	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto relative ">
			<Link href={"/"}>
				<ArrowLeftIcon className="w-6 h-6 absolute top-8 left-10 cursor-pointer" />
			</Link>
			<CartComponent />
			<div className="flex flex-col md:flex-row gap-10 mt-10 md:mt-16 w-full h-full ">
				{items && items.length > 0 ? (
					<div className="w-full flex flex-col gap-6">
						{items.map((item) => (
							<div
								key={item.id}
								className="flex gap-6 border w-full px-4 py-4 rounded-md"
							>
								<Image
									src={item.thumbnail}
									width={160}
									height={40}
									alt="item-img"
									className="rounded shadow-sm"
								/>
								<div className="flex flex-col  gap-5">
									<div className="flex flex-col gap-2">
										<p className="text-lg font-semibold">{item.title}</p>
										<p className="text-base font-normal text-gray-600">
											{item.desc}
										</p>
										<div className="flex items-center justify-between">
											<p className="text-md font-normal text-white border w-fit px-4 rounded py-1 bg-black">
												{item.size}
											</p>
											<p className="text-md font-semibold">£{item.price}</p>
										</div>
									</div>

									<button className="bg-white  rounded-xl flex items-center justify-between w-fit mt-2 text-black">
										<TrashIcon className="w-6 h-6 text-red-600" />
									</button>
								</div>
							</div>
						))}
					</div>
				) : (
					<p>Your cart is empty</p>
				)}
			</div>
		</main>
	);
}

export default CartPage;
