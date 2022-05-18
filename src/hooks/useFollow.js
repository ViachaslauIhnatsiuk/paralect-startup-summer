import { useContext } from 'react';
import { FetchContext } from '../context.js';

const useFollow = () => {
	const { user } = useContext(FetchContext);

	return {
		followersRender() {
			if (user.followers < 1000) {
				return user.followers;
			} else {
				const amount = (user.followers / 1000).toFixed(1);
				if (amount[amount.length - 1] === '0') {
					return (user.followers / 1000).toFixed(0) + 'k';
				} else {
					return (user.followers / 1000).toFixed(1) + 'k';
				}
			}
		},
		followingRender() {
			if (user.following < 1000) {
				return user.following;
			} else {
				const amount = (user.following / 1000).toFixed(1);
				if (amount[amount.length - 1] === '0') {
					return (user.following / 1000).toFixed(0) + 'k';
				} else {
					return (user.following / 1000).toFixed(1) + 'k';
				}
			}
		}
	}
};

export { useFollow };