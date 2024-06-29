/* eslint-disable react/display-name */
import React, { ReactNode } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";

interface DropdownMenuContentProps {
	children: ReactNode;
}

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = React.forwardRef<
	HTMLDivElement,
	DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				{...props}
				ref={forwardedRef}
				className="border shadow-sm p-3 flex flex-col gap-1 text-sm bg-white rounded-md w-[190px] max-w-[300px] z-10 "
				sideOffset={4}
				side="bottom"
			>
				{children}
				<DropdownMenuPrimitive.Arrow className="" color="bg-white" />
			</DropdownMenuPrimitive.Content>
		</DropdownMenuPrimitive.Portal>
	);
});

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

interface DropdownMenuCheckboxItemProps {
	children: ReactNode;
	checked?: boolean | "indeterminate";
}

export const DropdownMenuCheckboxItem = React.forwardRef<
	HTMLDivElement,
	DropdownMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => {
	return (
		<DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
			{children}
			<DropdownMenuPrimitive.ItemIndicator>
				{props.checked === "indeterminate" && <DividerHorizontalIcon />}
				{props.checked === true && <CheckIcon />}
			</DropdownMenuPrimitive.ItemIndicator>
		</DropdownMenuPrimitive.CheckboxItem>
	);
});

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

interface DropdownMenuRadioItemProps {
	children: ReactNode;
	value: string;
}

export const DropdownMenuRadioItem = React.forwardRef<
	HTMLDivElement,
	DropdownMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => {
	return (
		<DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
			{children}
			<DropdownMenuPrimitive.ItemIndicator>
				<CheckIcon />
			</DropdownMenuPrimitive.ItemIndicator>
		</DropdownMenuPrimitive.RadioItem>
	);
});

export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
