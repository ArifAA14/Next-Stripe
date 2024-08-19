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
	const { addItem, updateItem, items } = useStore();

	function handleClick() {
		if (!size) return;

		const existingItem = items.find(
			(i) =>
				i.title === product.name && i.size === size && i.price === product.price
		);
		console.log(existingItem);

		if (existingItem) {
			console.log("firing this");
			updateItem(existingItem.id, existingItem.quantity + 1);
		} else {
			console.log("firing this not");
			addItem({
				title: product.name,
				price: product.price,
				size: size,
				id: product.id + size,
				thumbnail: product.images[0],
				desc: product.description,
				priceId: product.default_price,
				quantity: 1,
			});
		}
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
