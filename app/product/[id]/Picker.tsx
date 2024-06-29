"use client";
import VariantPicker from "@/components/Products/Variant/VariantPicker";
import React from "react";

function Picker({ type }: { type: string }) {
	const [size, setSize] = React.useState<string | null>(null);
	return <VariantPicker type={type} size={size} setSize={setSize} />;
}

export default Picker;
