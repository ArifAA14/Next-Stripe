import Link from "next/link";
import React from "react";

function CancelPage() {
	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto relative ">
			<Link href={"/"}>
				<p className=" font-medium text-purple-600 cursor-pointer absolute left-10 top-10">
					bites
				</p>
			</Link>
		</main>
	);
}

export default CancelPage;
