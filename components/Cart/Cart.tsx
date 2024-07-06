"use client";
import useStore from "@/app/providers/cartstore";
import { BackpackIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

function CartComponent() {
	const { items, addItem, removeItem } = useStore();

	const cartItems = items.length;
	return (
		<Link href="/cart">
			<span className="absolute top-10 right-10 cursor-pointer">
				<BackpackIcon className="w-6 h-6" />
				{cartItems > 0 && (
					<span className="text-red-600 font-bold  p-1.5 rounded-full text-xs absolute -top-4 left-6">
						{cartItems}
					</span>
				)}
			</span>
		</Link>
	);
}

export default CartComponent;
