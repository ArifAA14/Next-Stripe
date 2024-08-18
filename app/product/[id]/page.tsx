import Server from "@/app/actions/server";
import CartComponent from "@/components/Cart/Cart";
import Product from "@/components/ProductPage/Product";
import Carousel from "@/components/ui/Carousel/Carousel";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
	const server = new Server();
	const product = await server.getProduct(params.id);

	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto relative ">
			<Link href={"/"}>
				<ArrowLeftIcon className="w-6 h-6 absolute top-8 left-10 cursor-pointer" />
			</Link>
			<CartComponent />
			<Product product={product} />
		</main>
	);
}
