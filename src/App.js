import React, { useState } from 'react';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { MainStart } from './components/main/pages/MainStart';
import { MainNotFound } from './components/main/pages/MainNotFound';

const App = () => {
	const [user, setUser] = useState('');
	const [repos, setRepos] = useState([]);
	const [loader, setLoader] = useState(false);

	if (user === '') {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} setLoader={setLoader} />
				<MainStart />
			</div>
		);
	} else if (user.message) {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} setLoader={setLoader} />
				<MainNotFound />
			</div>
		);
	} else {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} setLoader={setLoader} />
				<Main user={user} repos={repos} loader={loader} />
			</div>
		);
	}
}

export { App };