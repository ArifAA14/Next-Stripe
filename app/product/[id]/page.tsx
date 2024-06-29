import Server from "@/app/actions/server";
import ProductInfo from "@/components/misc/ProductInfo";
import { ArrowLeftIcon, BackpackIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Picker from "./Picker";

export default async function Page({ params }: { params: { id: string } }) {
	const server = new Server();
	const product = await server.getProduct(params.id);

	return (
		<main className="flex min-h-screen flex-col p-10  md:p-20 w-full md:max-w-[75%] md:mx-auto relative">
			<Link href={"/"}>
				<ArrowLeftIcon className="w-6 h-6 absolute top-8 left-10 cursor-pointer" />
			</Link>
			<BackpackIcon className="w-6 h-6 absolute top-8 right-10 cursor-pointer" />
			<div className="flex flex-col md:flex-row gap-10 mt-10">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={500}
					height={400}
					loading="eager"
					className="rounded-md shadow"
				/>

				<div className="flex flex-col gap-5 justify-between">
					<div className="flex flex-col gap-4">
						<h1 className="text-xl font-semibold">{product.name}</h1>
						<p className="text-gray-500 text-pretty tracking-tight">
							{product.description}
						</p>

						<div className="flex items-center w-full justify-between mt-2">
							<p className="text-base font-semibold text-black ">
								£{product.price}
							</p>
							<Picker type={product.metadata.type} />
						</div>

						<ProductInfo />
					</div>

					<div className="flex flex-col gap-2">
						<button className="bg-black text-white px-4 py-2 rounded-md font-semibold">
							add
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
