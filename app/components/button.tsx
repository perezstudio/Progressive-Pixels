import React from 'react';
import { Link } from '@remix-run/react';
import classNames from 'classnames';

const Button = ({ to, type, children, ...props }) => {
	const baseClasses = 'px-4 py-2 font-semibold rounded-full focus:outline-none focus:ring';
  	const typeClasses = classNames({
		'bg-slate-950 text-slate-50 hover:bg-slate-800': type === 'primary',
		'bg-slate-100 text-slate-950 hover:bg-slate-200': type === 'secondary',
		'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white': type === 'tertiary',
  	});
	
	return (
		<Link to={to} className={`${baseClasses} ${typeClasses}`} {...props}>
		  {children}
		</Link>
	);
}

export default Button;