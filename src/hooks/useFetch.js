import { useContext } from 'react';
import { FetchContext } from '../context.js';
import axios from 'axios';

const useFetch = () => {
	const { userName, setUser, setRepos, setLoader } = useContext(FetchContext);
	const URL = `https://api.github.com/users/${userName}`;

	return {
		async searchUser(e) {
			let reposList = [];
			if (e.key === 'Enter') {
				setLoader(true);
				axios.get(`${URL}`)
					.then(response => setUser(response.data))
					.catch(error => console.log(error));
				for (let i = 1; reposList.length % 100 === 0; i++) {
					await axios.get(`${URL}/repos?per_page=100&page=${i}`)
						.then(response => reposList.push(...response.data))
						.catch(error => console.log(error));
				}
				setLoader(false);
			}
			setRepos(reposList);
		}
	}
};

export { useFetch };