import CartComponent from "@/components/Cart/Cart";
import CartPage from "@/components/Cart/CartPage/CartPage";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Server from "../actions/server";
import { ItemArray } from "../providers/cartstore";

function Page() {
	async function handleCheckout(items: ItemArray[]) {
		"use server";
		const server = new Server();
		const response = await server.createCheckoutSession(items);
		console.log(response);
		return response;
	}
	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto relative ">
			<Link href={"/"}>
				<ArrowLeftIcon className="w-6 h-6 absolute top-8 left-10 cursor-pointer" />
			</Link>
			<CartComponent />
			<CartPage checkout={handleCheckout} />
		</main>
	);
}

export default Page;
