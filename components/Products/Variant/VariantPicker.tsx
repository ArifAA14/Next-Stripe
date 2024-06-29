"use client";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import React from "react";

function VariantPicker({ type }: { type: string }) {
	const [selected, setSelected] = React.useState<string | null>(null);
	const shoeOptions = ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"];
	const clothingOptions = ["S", "M", "L", "XL"];

	const options = type === "shoe" ? shoeOptions : clothingOptions;
	console.log(type);

	const hanndleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setSelected(e.currentTarget.textContent);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="bg-white border w-[100px] px-4 py-1.5 rounded shadow-sm text-xs font-semibold">
				{selected ? selected : "size"}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{options &&
					options.map((option) => (
						<DropdownMenuItem
							key={option}
							className="cursor-pointer hover:bg-neutral-50 px-4 py-1 rounded-md hover:font-semibold transition-all ease-linear duration-200"
							onSelect={() => setSelected(option)}
						>
							{option}
						</DropdownMenuItem>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default VariantPicker;
