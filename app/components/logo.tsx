import React from "react";

const logoConfig = {
	"Primary": {
		arrow: "fill-cyan-500",
		topBlock: "fill-amber-500",
		midBlock: "fill-purple-500",
		bottomBlock: "fill-lime-500"
	},
	"White": {
		arrow: "fill-white",
		topBlock: "fill-white",
		midBlock: "fill-white",
		bottomBlock: "fill-white"
	},
	"Black": {
		arrow: "fill-black",
		topBlock: "fill-black",
		midBlock: "fill-black",
		bottomBlock: "fill-black"
	},
	"Dark": {
		arrow: "fill-slate-500",
		topBlock: "fill-slate-500",
		midBlock: "fill-slate-500",
		bottomBlock: "fill-slate-500"
	}
}

export default function Logo({ status }: { status: string }) {
	const currentStatus = logoConfig[status];
	
  	if (!currentStatus) {
		return null; // Or render some fallback UI
  	}
  
	return (
		<svg viewBox="0 0 472 332" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="118" width="100" height="100" rx="8" fill="#F59E0B" className={currentStatus.topBlock}/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M346.402 3.06749C344.886 1.13121 342.563 0 340.104 0H260.426C253.757 0 250.016 7.68158 254.128 12.9325L370.137 161.067C372.406 163.965 372.406 168.035 370.137 170.933L254.128 319.067C250.016 324.318 253.757 332 260.426 332H340.104C342.563 332 344.886 330.869 346.402 328.933L470.137 170.933C472.406 168.035 472.406 163.965 470.137 161.067L346.402 3.06749Z" className={currentStatus.arrow}/>
			<rect x="118" y="232" width="100" height="100" rx="8" className={currentStatus.midBlock}/>
			<rect y="116" width="100" height="100" rx="8" className={currentStatus.bottomBlock}/>
		</svg>
	);
}