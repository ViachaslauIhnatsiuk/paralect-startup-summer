import { useContext } from 'react';
import { FetchContext } from '../context.js';

const useFetch = () => {
	const { userName, setUser, setRepos, setLoader } = useContext(FetchContext);

	const fetchParams = {
		method: 'GET',
		headers: {
			Authorization: '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',
		}
	};

	return {
		searchUser(e) {
			let reposList = [];
			if (e.key === 'Enter') {
				setLoader(true);
				fetch(`https://api.github.com/users/${userName}`, fetchParams)
					.then(response => response.json())
					.then(response => setUser(response))
					.catch(error => console.log(error));
				for (let i = 1; i < 4; i++) {
					fetch(`https://api.github.com/users/${userName}/repos?per_page=100&page=${i}`, fetchParams)
						.then(response => response.json())
						.then(response => reposList.push(...response))
						.then(() => setLoader(false))
						.catch(error => console.log(error));
				}
			}
			setRepos(reposList);
		}
	}
};

export { useFetch };