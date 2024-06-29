import {
	CardStackIcon,
	CountdownTimerIcon,
	InfoCircledIcon,
	PaperPlaneIcon,
} from "@radix-ui/react-icons";
import React from "react";

function ProductInfo() {
	return (
		<div className="flex flex-col gap-3 mt-6">
			<div className="flex items-center gap-3">
				<InfoCircledIcon className="w-5 h-5 text-black" />
				<p className="text-sm text-gray-500">
					100% pure cotton and handcrafted
				</p>
			</div>

			<div className="flex items-center gap-3">
				<PaperPlaneIcon className="w-5 h-5 text-black" />
				<p className="text-sm text-gray-500">
					Free same day shipping on all orders
				</p>
			</div>

			<div className="flex items-center gap-3">
				<CountdownTimerIcon className="w-5 h-5 text-black" />
				<p className="text-sm text-gray-500"> 30 day money back guarantee</p>
			</div>

			<div className="flex items-center gap-3">
				<CardStackIcon className="w-5 h-5 text-black" />
				<p className="text-sm text-gray-500"> secure payments with stripe</p>
			</div>
		</div>
	);
}

export default ProductInfo;
