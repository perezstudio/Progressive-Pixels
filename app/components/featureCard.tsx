import React from 'react';
import { Link } from '@remix-run/react';
import classNames from 'classnames';

const FeatureCard = ({ type, children, heading, body, ...props }) => {
	const baseClasses = 'font-semibold';
  	const iconClasses = classNames({
		'flex flex-col items-center bg-cyan-500 border-cyan-400 border-2 text-cyan-800 font-bold text-3xl size-14 min-w-14 content-center justify-center rounded-lg': type === 'design',
		'flex flex-col items-center bg-lime-500 border-lime-400 border-2 text-lime-800 font-bold text-3xl size-14 min-w-14 content-center justify-center rounded-lg': type === 'web',
		'flex flex-col items-center bg-amber-500 border-amber-400 border-2 text-amber-800 font-bold text-3xl size-14 min-w-14 content-center justify-center rounded-lg': type === 'print',
  	});
	const headingClasses = classNames({
		'text-2xl text-cyan-500 font-bold': type === 'design',
		'text-2xl text-lime-500 font-bold': type === 'web',
		'text-2xl text-amber-500 font-bold': type === 'print',
	});
	
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 items-center">
				<span className={iconClasses}>{children}</span>
				<h3 className={`${baseClasses} ${headingClasses}`}>{heading}</h3>
			</div>
			<p className="font-bold text-slate-400">{body}</p>
		</div>
	);
}

export default FeatureCard;