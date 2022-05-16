import { useContext } from 'react';
import { FetchContext } from '../context.js';

const useFetch = () => {
	const { userName, setUser, setRepos, setLoader } = useContext(FetchContext);

	const fetchParams = {
		method: 'GET',
		headers: {
			authorization: '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',
		}
	};

	return {
		searchUser(e) {
			if (e.key === 'Enter') {
				setLoader(true);
				fetch(`https://api.github.com/users/${userName}`, fetchParams)
					.then(response => response.json())
					.then(response => setUser(response))
					.catch(error => console.log(error));
				fetch(`https://api.github.com/users/${userName}/repos?per_page=100&page=1`, fetchParams)
					.then(response => response.json())
					.then(response => setRepos([...response]))
					.then(() => setLoader(false))
					.catch(error => console.log(error));
			}
		}
	}
};

export { useFetch };