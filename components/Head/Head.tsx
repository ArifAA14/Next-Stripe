import { BackpackIcon } from "@radix-ui/react-icons";
import React from "react";

function Head() {
	return (
		<div className="flex items-center w-full justify-between">
			<h1 className="md:text-lg font-medium lowercase text-orange-600">
				bites
			</h1>

			<div className="flex items-center md:gap-10 gap-4">
				<BackpackIcon className="w-6 h-6 cursor-pointer" />
			</div>
		</div>
	);
}

export default Head;
