import React from "react";
import Button from "~/components/button";
import classNames from 'classnames';

const ServiceCard = ({ type, serviceName, preService, postService, startLink, startText, learnLink, learnText }) => {
	const baseClasses = 'p-8 rounded-2xl gap-7 focus:outline-none focus:ring';
  	const typeClasses = classNames({
		'bg-cyan-500 text-cyan-200 flex flex-col': type === 'design',
		'bg-lime-500 text-lime-200 flex flex-col': type === 'web',
		'bg-purple-500 text-purple-200 flex flex-col': type === 'social',
		'bg-amber-500 text-amber-200 flex flex-col': type === 'print'
  	});

	return (
		<div className={`${baseClasses} ${typeClasses}`}>
			<h3 className="text-4xl font-bold">
				<span>{preService}</span><span className="text-white">{serviceName}</span><span>{postService}</span>
			</h3>
			<div className="flex flex-row gap-4">
				<Button to="#" type="primary">Start for Free</Button>
				<Button to="/about" type="secondary">Learn More</Button>
			</div>
		</div>
	);
}

export default ServiceCard;