import React, { useState } from 'react';
import { FetchContext } from './context';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { MainStart } from './components/main/pages/MainStart';
import { MainNotFound } from './components/main/pages/MainNotFound';

const App = () => {
	const [user, setUser] = useState('');
	const [repos, setRepos] = useState([]);
	const [loader, setLoader] = useState(false);
	const [userName, setUserName] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<FetchContext.Provider
			value={{
				user,
				repos,
				loader,
				userName,
				currentPage,
				setUser,
				setRepos,
				setLoader,
				setUserName,
				setCurrentPage,
			}}>
			<div className={s.wrapper}>
				<Header />
				{user === ''
					? <MainStart />
					: user.message
						? <MainNotFound />
						: <Main />
				}
			</div>
		</FetchContext.Provider>
	)
};

export { App };