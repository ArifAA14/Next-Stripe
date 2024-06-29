"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { CheckCircledIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

function VariantPicker({
	type,
	size,
	setSize,
}: {
	type: string;
	size: string | null;
	setSize: (size: string) => void;
}) {
	const shoeOptions = ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"];
	const clothingOptions = ["S", "M", "L", "XL"];

	const options = type === "shoe" ? shoeOptions : clothingOptions;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="bg-white border w-[100px] px-4 py-1.5 rounded shadow-sm text-xs font-semibold flex items-center justify-between">
				<p>{size ? size : "size"}</p>
				<ChevronDownIcon className="w-3 h-3 text-black" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{options &&
					options.map((option) => (
						<DropdownMenuItem
							key={option}
							className="cursor-pointer hover:bg-neutral-50 px-2 py-1 rounded-md hover:font-semibold transition-all ease-linear duration-200
							flex items-center justify-between w-full"
							onSelect={() => setSize(option)}
						>
							<p className="">{option}</p>
							{size === option && (
								<CheckCircledIcon className="w-3 h-3 text-black" />
							)}
						</DropdownMenuItem>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default VariantPicker;
