import React from "react";

function Head() {
	return (
		<div className="flex items-center w-full justify-between">
			<h1 className="md:text-lg font-medium lowercase text-orange-600">
				litecommerce
			</h1>

			<div className="flex items-center md:gap-10 gap-4">
				<h1 className="md:text-lg font-normal lowercase">categories</h1>
				<h1 className="md:text-lg font-normal lowercase">cart</h1>
			</div>
		</div>
	);
}

export default Head;
