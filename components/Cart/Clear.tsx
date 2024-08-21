"use client";
import useStore from "@/app/providers/cartstore";
import React, { useEffect } from "react";

function Clear() {
	const { clearCart } = useStore();

	useEffect(() => {
		clearCart();
	}, []);

	return <></>;
}

export default Clear;
