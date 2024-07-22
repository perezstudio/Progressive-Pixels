import React from 'react';
import classNames from 'classnames';

export default function DollarIcon({ iconClass }) {
	
	const iconClasses = classNames(iconClass);
	
	return(
		<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className={iconClasses}>
		<path d="M14.8511 29.7227C12.8641 29.7227 10.9956 29.3444 9.24561 28.5879C7.50472 27.8405 5.97347 26.806 4.65186 25.4844C3.33024 24.1628 2.29118 22.6315 1.53467 20.8906C0.787272 19.1406 0.413574 17.2721 0.413574 15.2852C0.413574 13.2891 0.787272 11.4206 1.53467 9.67969C2.29118 7.92969 3.33024 6.39388 4.65186 5.07227C5.97347 3.74154 7.50472 2.70703 9.24561 1.96875C10.9956 1.22135 12.8641 0.847656 14.8511 0.847656C16.8472 0.847656 18.7157 1.22135 20.4565 1.96875C22.2065 2.70703 23.7424 3.74154 25.064 5.07227C26.3856 6.39388 27.4201 7.92969 28.1675 9.67969C28.924 11.4206 29.3022 13.2891 29.3022 15.2852C29.3022 17.2721 28.924 19.1406 28.1675 20.8906C27.4201 22.6315 26.3856 24.1628 25.064 25.4844C23.7424 26.806 22.2065 27.8405 20.4565 28.5879C18.7157 29.3444 16.8472 29.7227 14.8511 29.7227ZM14.8511 26.127C16.355 26.127 17.7586 25.8444 19.062 25.2793C20.3745 24.7233 21.5275 23.9486 22.521 22.9551C23.5145 21.9525 24.2938 20.7995 24.8589 19.4961C25.424 18.1836 25.7065 16.7799 25.7065 15.2852C25.7065 13.7812 25.424 12.373 24.8589 11.0605C24.2938 9.74805 23.5145 8.59961 22.521 7.61523C21.5275 6.62174 20.3745 5.84701 19.062 5.29102C17.7586 4.72591 16.355 4.44336 14.8511 4.44336C13.3563 4.44336 11.9526 4.72591 10.6401 5.29102C9.33675 5.84701 8.18376 6.62174 7.18115 7.61523C6.18766 8.59961 5.40837 9.74805 4.84326 11.0605C4.28727 12.373 4.00928 13.7812 4.00928 15.2852C4.00928 16.7799 4.28727 18.1836 4.84326 19.4961C5.40837 20.7995 6.18766 21.9525 7.18115 22.9551C8.18376 23.9486 9.33675 24.7233 10.6401 25.2793C11.9526 25.8444 13.3563 26.127 14.8511 26.127ZM14.7827 21.1367C14.1265 21.1367 13.4976 21.0547 12.896 20.8906C12.3035 20.7174 11.7931 20.4714 11.3647 20.1523C10.9364 19.8242 10.631 19.4186 10.4487 18.9355C10.3394 18.6986 10.2847 18.4798 10.2847 18.2793C10.2847 17.9603 10.3895 17.7142 10.5991 17.541C10.8088 17.3678 11.0685 17.2812 11.3784 17.2812C11.6336 17.2812 11.8433 17.3451 12.0073 17.4727C12.1714 17.5911 12.3172 17.7734 12.4448 18.0195C12.6453 18.4844 12.9416 18.8171 13.3335 19.0176C13.7345 19.209 14.2358 19.3047 14.8374 19.3047C15.2567 19.3047 15.644 19.2591 15.9995 19.168C16.3641 19.0677 16.6512 18.9128 16.8608 18.7031C17.0796 18.4844 17.189 18.1973 17.189 17.8418C17.189 17.3587 16.9793 17.0124 16.5601 16.8027C16.1408 16.5931 15.644 16.4245 15.0698 16.2969L13.7847 16.0234C13.1831 15.8867 12.618 15.6953 12.0894 15.4492C11.5698 15.194 11.146 14.8477 10.8179 14.4102C10.4989 13.9727 10.3394 13.4121 10.3394 12.7285C10.3394 11.972 10.549 11.3431 10.9683 10.8418C11.3966 10.3314 11.9481 9.94401 12.6226 9.67969C13.297 9.41536 14.0171 9.2832 14.7827 9.2832C15.5301 9.2832 16.2365 9.40625 16.9019 9.65234C17.5763 9.89844 18.1232 10.2402 18.5425 10.6777C18.9709 11.1152 19.1851 11.6211 19.1851 12.1953C19.1851 12.5052 19.0757 12.7331 18.8569 12.8789C18.6473 13.0247 18.4103 13.0977 18.146 13.0977C17.8908 13.0977 17.672 13.0384 17.4897 12.9199C17.3075 12.7923 17.1525 12.61 17.0249 12.373C16.8426 11.9447 16.5555 11.6302 16.1636 11.4297C15.7808 11.2201 15.3296 11.1152 14.8101 11.1152C14.4272 11.1152 14.0672 11.1699 13.73 11.2793C13.4019 11.3796 13.1375 11.5345 12.937 11.7441C12.7365 11.9447 12.6362 12.2044 12.6362 12.5234C12.6362 12.806 12.7137 13.043 12.8687 13.2344C13.0327 13.4167 13.2651 13.5716 13.5659 13.6992C13.8758 13.8268 14.2404 13.9408 14.6597 14.041L15.9312 14.3281C16.5965 14.474 17.1981 14.6745 17.7358 14.9297C18.2736 15.1758 18.6974 15.513 19.0073 15.9414C19.3172 16.3607 19.4722 16.9121 19.4722 17.5957C19.4722 18.4251 19.2489 19.0996 18.8022 19.6191C18.3556 20.1387 17.7723 20.5215 17.0522 20.7676C16.3413 21.0137 15.5848 21.1367 14.7827 21.1367ZM14.8511 22.6543C14.7417 22.6543 14.646 22.6178 14.564 22.5449C14.4819 22.4629 14.4409 22.3672 14.4409 22.2578V8.16211C14.4409 8.05273 14.4819 7.95703 14.564 7.875C14.646 7.79297 14.7417 7.75195 14.8511 7.75195C14.9604 7.75195 15.0516 7.79297 15.1245 7.875C15.2065 7.95703 15.2476 8.05273 15.2476 8.16211V22.2578C15.2476 22.3672 15.2065 22.4629 15.1245 22.5449C15.0516 22.6178 14.9604 22.6543 14.8511 22.6543Z"/>
		</svg>
	);
}

