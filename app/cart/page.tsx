"use client";
import CartComponent from "@/components/Cart/Cart";
import {
	ArrowLeftIcon,
	CrossCircledIcon,
	HeartIcon,
	TrashIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import useStore from "../providers/cartstore";
import Image from "next/image";

function CartPage() {
	const { items, removeItem } = useStore();

	function calculateTotal() {
		let total = 0;
		items.forEach((item) => {
			total += Number(item.price);
		});
		return total;
	}

	function deleteItem(item: any) {
		return () => removeItem(item.id);
	}

	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto relative ">
			<Link href={"/"}>
				<ArrowLeftIcon className="w-6 h-6 absolute top-8 left-10 cursor-pointer" />
			</Link>
			<CartComponent />
			<div className="flex md:flex-row gap-14  md:gap-6 mt-16 flex-col-reverse">
				<div className="flex flex-col md:flex-row gap-10  w-full h-full flex-1 ">
					{items && items.length > 0 ? (
						<div className="w-full flex flex-col gap-6">
							{items.map((item) => (
								<div
									key={item.id}
									className="flex gap-6  w-full rounded-md flex-row "
								>
									<Image
										src={item.thumbnail}
										width={100}
										height={20}
										alt="item-img"
										className="rounded shadow-sm max-h-[150px] h-full  w-full max-w-[150px] "
									/>
									<div className="flex flex-col  gap-5 ">
										<div className="flex flex-col gap-1">
											<p className="text-lg font-normal">{item.title}</p>

											<div className="flex gap-2 flex-col">
												<p className="text-md font-normal text-gray-400 ">
													Size &nbsp;
													<span className="underline underline-offset-4 text-gray-600">
														{item.size}
													</span>
												</p>
												<p className="text-md font-semibold">£{item.price}</p>
											</div>
										</div>

										<div className="flex items-center gap-3">
											<button className="" onClick={deleteItem(item)}>
												<TrashIcon className="w-5 h-5 text-black" />
											</button>
											<button className="">
												<HeartIcon className="w-5 h-5 text-black" />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<p>Your cart is empty</p>
					)}
				</div>
				<div className="flex flex-col gap-6 w-full md:min-w-[350px] md:max-w-[400px]  ">
					<h2 className="text-2xl font-semibold">Summary</h2>
					<div className="w-full flex items-center justify-between">
						<h4 className="text-base font-normal">Subtotal</h4>
						<p className="text-base font-normal">£{calculateTotal()}</p>
					</div>

					<div className="w-full flex items-center justify-between">
						<h4 className="text-base font-normal">
							Estimated Delivery & Handling
						</h4>
						<p className="text-base font-normal">Free</p>
					</div>

					<div className="w-full flex items-center justify-between border-t pt-4 pb-4 border-b">
						<h4 className="text-base font-normal">Total</h4>
						<p className="text-base font-medium">
							£{calculateTotal().toFixed(2)}
						</p>
					</div>

					<button className="w-full h-[40px] text-white rounded-full px-4 py-2 text-center bg-black hover:opacity-90 transition-all ease-linear">
						checkout
					</button>
				</div>
			</div>
		</main>
	);
}

export default CartPage;
