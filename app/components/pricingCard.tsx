import React from 'react';
import classNames from 'classnames';
import Button from '~/components/button';

interface PricingCardProps {
	type: string;
	heading: string;
	features: string[];
	included: string[];
	dollarAmount: int;
	centsAmount: int;
}

const PricingCard: React.FC<PricingCardProps> = ({ type, heading, features, included, dollarAmount, centsAmount }) => {
	const baseClasses = 'flex flex-col p-8 gap-7 rounded-xl font-medium';
	const typeCardClasses = classNames({
		'bg-cyan-500 border-cyan-200 border-2 text-cyan-800': type === 'design',
		'bg-lime-500 border-lime-200 border-2 text-lime-800': type === 'web',
		'bg-purple-500 border-purple-200 border-2 text-purple-800': type === 'social',
		'bg-slate-500 border-slate-200 border-2 text-slate-800 col-span-2': type === 'bundle',
  	});
	const headingClasses = classNames({
		'text-cyan-200 text-4xl font-bold': type === 'design',
		'text-lime-200 text-4xl font-bold': type === 'web',
		'text-purple-200 text-4xl font-bold': type === 'social',
		'text-slate-200 text-4xl font-bold': type === 'bundle',
  	});
	const dollarClasses = 'text-6xl font-bold';
	
	return (
		<div className={`${baseClasses} ${typeCardClasses}`}>
			<h2 className={headingClasses}>{heading}</h2>
			<div className="text-white">
				<div className="flex flex-row gap-0.5">
					<span>$</span>
					<span className={dollarClasses}>{dollarAmount}</span>
					<span>{centsAmount}</span>
				</div>
				<p className="text-xs">Monthly / per Team</p>
			</div>
			<div className="flex flex-col gap-7">
				<ul className="list-disc list-inside">
					<p className="text-sm font-bold">What's Included</p>
					{included.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<ul className="list-disc list-inside">
					<p className="text-sm font-bold">Features</p>
					{features.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col sm:flex-row gap-4">
				<Button type="primary">Get Started</Button>
				<Button type="secondary">Book A Call</Button>
			</div>
		</div>
	);
}

export default PricingCard;