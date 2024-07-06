"use client";
import VariantPicker from "@/components/Products/Variant/VariantPicker";
import React from "react";

function Picker({
	type,
	size,
	setSize,
}: {
	type: string;
	size: string | null;
	setSize: (size: string) => void;
}) {
	return <VariantPicker type={type} size={size} setSize={setSize} />;
}

export default Picker;
