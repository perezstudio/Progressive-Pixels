import React from "react";
import Logo from "~/components/logo"

export default function Footer() {
	return (
		<footer className="flex flex-col px-8 py-4 items-center">
			<div className="flex flex-row justify-between max-w-1200 w-full">
				<div className="flex items-center p-2 group transition-all duration-300 hover:bg-slate-200 rounded-md">
					<div className="w-8">
						<Logo status="Primary" />
					</div>
					<div className="ml-2 overflow-hidden">
					  <div className="flex flex-col gap-0s opacity-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-300 text-logo">
						<span>Progressive</span>
						<span>Pixels</span>
					  </div>
					</div>
				</div>
				<div>
					<p>© 2023 Progressive Pixels, LLC.</p>
				</div>
				<div>
					<ul className="flex flex-row gap-2">
						<li className="p-4">Login</li>
						<li className="p-4">Start for Free</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}