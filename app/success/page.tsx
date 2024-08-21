import { CheckCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Server from "../actions/server";
import Clear from "@/components/Cart/Clear";

async function Page({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string };
}) {
	const server = new Server();
	const receiptUrl = await server.completeCheckoutSession(
		searchParams.session_id
	);

	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[65%] md:mx-auto relative ">
			<Clear />
			<div className="flex flex-col gap-6   mt-4 w-full">
				<div className="flex items-center w-full justify-between">
					<h1 className="text-xl font-medium">Thank you for your purchase!</h1>
					<CheckCircledIcon className="w-8 h-8 text-green-500" />
				</div>
				<p className="text-base font-normal text-gray-600">
					Your payment has been successfully processed.
					<br />
					Your order will be shipped within 3-5 business days.
					<br />
					You will receive an email with your receipt shortly.
					<br />
					Thank you for shopping with us!
				</p>
			</div>

			{receiptUrl ? (
				<div className="mt-8">
					<a
						href={receiptUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-black underline underline-offset-4"
					>
						View Receipt
					</a>
				</div>
			) : (
				<p>Loading receipt...</p>
			)}

			<button className="bg-black text-white px-4 py-4 rounded-md mt-8">
				<Link href="/">Continue Shopping</Link>
			</button>
		</main>
	);
}

export default Page;
