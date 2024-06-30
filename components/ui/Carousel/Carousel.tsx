"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

function Carousel({ images }: { images: string[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const dragControls = useDragControls();

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const handleDragEnd = (event: any, info: any) => {
		if (info.offset.x < -100) {
			handleNext();
		} else if (info.offset.x > 100) {
			handlePrev();
		}
	};

	return (
		<div className=" relative w-full h-full">
			<AnimatePresence mode="popLayout">
				{images.map((image, index) =>
					index === currentIndex ? (
						<motion.img
							key={index}
							src={image}
							alt="product"
							className="rounded-md shadow w-full min-h-[500px]  md:min-w-[420px] h-full object-fill  cursor-pointer"
							initial={{ visibility: "hidden" }}
							animate={{ opacity: 1, visibility: "visible" }}
							exit={{ visibility: "hidden" }}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.1}
							transition={{
								duration: 0.6,
								type: "spring",
								damping: 20,
								stiffness: 100,
							}}
							onDragEnd={handleDragEnd}
							dragControls={dragControls}
						/>
					) : null
				)}
			</AnimatePresence>
			<div className="flex absolute gap-4 bottom-2 right-4">
				<button
					onClick={handlePrev}
					className=" transform -translate-y-1/2 bg-neutral-600/40 backdrop-blur-sm text-white px-2 py-2 rounded-full"
				>
					<CaretLeftIcon className="w-6 h-6" />
				</button>
				<button
					onClick={handleNext}
					className=" transform -translate-y-1/2 bg-neutral-600/40 backdrop-blur-sm text-white px-2 py-2 rounded-full"
				>
					<CaretRightIcon className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}

export default Carousel;
