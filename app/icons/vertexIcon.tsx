import React from 'react';
import classNames from 'classnames';

export default function VertexIcon({ iconClass }) {
	
	const iconClasses = classNames(iconClass);
	
	return(
		<svg width="31" height="28" viewBox="0 0 31 28" xmlns="http://www.w3.org/2000/svg" className={iconClasses}>
		<path d="M3.88135 22.0098L13.8481 17.0059V5.2207H17.1567V17.0059L27.1099 22.0098L25.4419 24.8535L15.5024 19.8496L5.54932 24.8535L3.88135 22.0098ZM0.695801 24.0879L0.668457 20.9707C0.668457 20.6608 0.723145 20.3965 0.83252 20.1777C0.951009 19.9499 1.1652 19.7493 1.4751 19.5762L4.15479 18.0312C4.45557 17.8581 4.73356 17.776 4.98877 17.7852C5.25309 17.7943 5.51742 17.8763 5.78174 18.0312L8.51611 19.5898C9.18148 19.9727 9.5096 20.5423 9.50049 21.2988L9.47314 24.4297C9.47314 24.7578 9.4139 25.0267 9.29541 25.2363C9.17692 25.4551 8.95817 25.6556 8.63916 25.8379L6.00049 27.3691C5.68148 27.5514 5.39893 27.638 5.15283 27.6289C4.91585 27.6198 4.66064 27.5332 4.38721 27.3691L1.69385 25.8105C1.02848 25.4277 0.695801 24.8535 0.695801 24.0879ZM21.4224 24.4434L21.4087 21.3125C21.3996 20.556 21.7277 19.9863 22.3931 19.6035L25.1138 18.0449C25.3781 17.89 25.6424 17.8079 25.9067 17.7988C26.1711 17.7897 26.4491 17.8717 26.7407 18.0449L29.4204 19.5898C29.7303 19.7721 29.9399 19.9727 30.0493 20.1914C30.1678 20.4102 30.2271 20.6745 30.2271 20.9844L30.2134 24.1016C30.2134 24.8672 29.8807 25.4414 29.2153 25.8242L26.522 27.3828C26.2485 27.5469 25.9888 27.6335 25.7427 27.6426C25.4966 27.6517 25.214 27.5651 24.895 27.3828L22.2563 25.8516C21.9373 25.6693 21.7186 25.4733 21.6001 25.2637C21.4816 25.054 21.4224 24.7806 21.4224 24.4434ZM11.77 8.57031C11.4966 8.41536 11.2915 8.22852 11.1548 8.00977C11.0181 7.79102 10.9497 7.50391 10.9497 7.14844V4.08594C10.9497 3.72135 11.0135 3.43424 11.1411 3.22461C11.2778 3.00586 11.4829 2.81901 11.7563 2.66406L14.4634 1.11914C15.1379 0.745443 15.7987 0.745443 16.4458 1.11914L19.1665 2.67773C19.4399 2.83268 19.6359 3.01497 19.7544 3.22461C19.882 3.43424 19.9458 3.72135 19.9458 4.08594V7.14844C19.9458 7.50391 19.882 7.79102 19.7544 8.00977C19.6268 8.22852 19.4263 8.41536 19.1528 8.57031L16.4321 10.1426C15.785 10.5163 15.1333 10.5163 14.4771 10.1426L11.77 8.57031Z" fill="#3F6212"/>
		</svg>
	);
}
