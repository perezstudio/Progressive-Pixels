import React from 'react';
import { Link } from '@remix-run/react';
import classNames from 'classnames';

const CTACard = ({ children, heading, body }) => {
	
	return (
		<div className="flex flex-col gap-4 p-8 bg-slate-900 rounded-xl text-white justify-between">
			<div className="flex flex-col gap-4">
				<h3 className="text-4xl font-bold">{heading}</h3>
				<p className="font-medium">{body}</p>
			</div>
			<div>
				{children}
			</div>
		</div>
	);
}

export default CTACard;