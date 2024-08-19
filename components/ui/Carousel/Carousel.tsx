/* eslint-disable @next/next/no-img-element */
"use client";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function Carousel({ images }: { images: string[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<div className="relative w-full h-full overflow-hidden">
			<div
				className="w-full h-full flex transition-transform duration-700 ease-in-out rounded-md"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div
						key={index}
						className="w-full flex-shrink-0 h-full min-h-[400px]"
						style={{ flexBasis: "100%" }}
					>
						<img
							src={image}
							alt="product"
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
			<div className="flex absolute gap-4 bottom-6 right-4">
				<button
					onClick={handlePrev}
					className="bg-neutral-600/40 backdrop-blur-sm text-white px-2 py-2 rounded-full"
				>
					<CaretLeftIcon className="w-6 h-6" />
				</button>
				<button
					onClick={handleNext}
					className="bg-neutral-600/40 backdrop-blur-sm text-white px-2 py-2 rounded-full"
				>
					<CaretRightIcon className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
}

export default Carousel;
