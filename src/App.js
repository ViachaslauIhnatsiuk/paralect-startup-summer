import React, { useState } from 'react';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { MainStart } from './components/main/pages/MainStart';
import { MainNotFound } from './components/main/pages/MainNotFound';

const App = () => {
	const [user, setUser] = useState('');
	const [repos, setRepos] = useState([]);

	console.log(user.message)

	if (repos.length) {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} />
				<Main user={user} repos={repos} />
			</div>
		);
	} else if (!repos.length) {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} />
				<MainStart />
			</div>
		);
	} else if (user.message) {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} />
				<MainNotFound />
			</div>
		);
	}
}

export { App };