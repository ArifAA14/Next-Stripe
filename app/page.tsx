import Head from "@/components/Head/Head";
import Products from "@/components/Products/Products";
import getData from "./actions/search";
import Server from "./actions/server";

export default async function Home() {
	const server = new Server();
	const data = await server.getAllProducts();

	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto ">
			<Head />
			<Products products={data} />
		</main>
	);
}
