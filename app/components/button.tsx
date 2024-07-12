import React from "react";
import { Link } from '@remix-run/react';

export default function Button({ to, buttonText, service, type = 'primary', children, ...props }) {
	const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring';
  	const typeClasses = classNames({
		'bg-slate-950 text-slate-050 hover:bg-slate-800': type === 'primary',
		'bg-slate-100 text-slate-950 hover:bg-slate-300': type === 'secondary',
		'bg-transparent text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-slate-100': type === 'tertiary',
  	});
	
	return (
		<Link to={to} className={`${baseClasses} ${typeClasses}`} {...props}>
		  {buttonText}
		</Link>
	);
}