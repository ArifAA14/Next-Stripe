import Head from "@/components/Head/Head";
import Products from "@/components/Products/Products";
import InfoBanner from "@/components/misc/InfoBanner";
import getData from "./actions/search";

export default async function Home() {
	const data = await getData();

	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto ">
			<Head />
			<Products products={data} />
		</main>
	);
}
