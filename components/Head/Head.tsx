import { BackpackIcon } from "@radix-ui/react-icons";
import React from "react";
import CartComponent from "../Cart/Cart";

function Head() {
	return (
		<div className="flex items-center w-full justify-between relative">
			<h1 className="md:text-lg font-medium lowercase text-orange-600">
				bites
			</h1>

			<CartComponent />
		</div>
	);
}

export default Head;
