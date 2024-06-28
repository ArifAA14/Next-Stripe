import React from "react";

function InfoBanner() {
	return (
		<div className="flex flex-col gap-4 mt-10 border shadow-sm p-6 rounded-xl ">
			<div className="flex items-center justify-between w-full">
				<h2 className="text-lg font-normal">Lightweight Ecommerce</h2>
				<button className="text-xs font-light bg-black text-white px-4 py-1.5 rounded-full ">
					Github
				</button>
			</div>
			<p className="text-sm font-light text-gray-500">
				lightweight ecommerce template built with Next.js, TypeScript, Tailwind
				& Stripe as the backend service, deployed on our beloved Vercel.
			</p>
		</div>
	);
}

export default InfoBanner;
