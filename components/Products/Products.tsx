import { ProductWithPrice } from "@/app/actions/search";
import React from "react";
import Product from "./Product";

function Products({ products }: { products: ProductWithPrice[] }) {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 w-full h-full gap-10 mt-14 mb-10">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
}

export default Products;
