import React from "react";
import Logo from "~/components/logo";
import SocialIcons from "~/components/socialIcons"

export default function Footer() {
	return (
		<footer className="flex flex-col px-8 py-4 items-center">
			<div className="flex flex-row justify-between max-w-1200 w-full">
				<div className="flex items-center p-2 group transition-all duration-300 hover:bg-slate-200 rounded-md">
					<div className="w-8">
						<Logo status="Dark" />
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
					<ul className="flex flex-row gap-2 items-center">
						<li><SocialIcons to="https://facebook.com/" type="facebook" className="fill-slate-400 hover:fill-blue-500" /></li>
						<li><SocialIcons to="https://twitter.com/" type="twitter" className="fill-slate-400 hover:fill-cyan-500" /></li>
						<li><SocialIcons to="https://instagram.com/" type="instagram" className="fill-slate-400 hover:fill-orange-500" /></li>
						<li><SocialIcons to="https://tiktok.com/" type="tiktok" className="fill-slate-400 hover:fill-pink-500" /></li>
						<li><SocialIcons to="https://youtube.com/" type="youtube" className="fill-slate-400 hover:fill-red-500" /></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}