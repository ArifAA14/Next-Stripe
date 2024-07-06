"use client";
import { ProductWithPrice } from "@/app/actions/server";
import useStore from "@/app/providers/cartstore";
import React from "react";

function Add({
	size,
	product,
}: {
	size: string | null;
	product: ProductWithPrice;
}) {
	const { addItem, items } = useStore();

	function handleClick() {
		if (size) {
			addItem({
				price: product.price,
				size,
				title: product.name,
				id: product.id,
				thumbnail: product.images[0],
				desc: product.description,
			});
		}
		console.log(items);
	}
	return (
		<button
			className="bg-black text-white px-4 py-2 rounded-md font-semibold"
			onClick={handleClick}
		>
			add
		</button>
	);
}

export default Add;
