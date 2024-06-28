/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const DialogContent = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, forwardedRef) => (
	<DialogPrimitive.Portal>
		<DialogPrimitive.Overlay
			className="inset-0 fixed w-full h-full  bg-black/70 backdrop-blur-sm 
    data-[state=open]:animate-overlayShow 
    "
		/>

		<DialogPrimitive.Content
			{...props}
			ref={forwardedRef}
			className={` fixed  top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]
        ${props.className}`}
		>
			{children}
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
));

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
