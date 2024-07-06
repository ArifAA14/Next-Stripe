import Head from "@/components/Head/Head";
import Products from "@/components/Products/Products";
import getData from "./actions/search";
import Server from "./actions/server";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import CartComponent from "@/components/Cart/Cart";

export default async function Home() {
	const server = new Server();
	const data = await server.getAllProducts();

	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto relative ">
			<Link href={"/"}>
				<p className=" font-medium text-purple-600 cursor-pointer absolute left-10 top-10">
					bites
				</p>
			</Link>
			<CartComponent />
			<Products products={data} />
		</main>
	);
}
