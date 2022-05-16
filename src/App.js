import React, { useState } from 'react';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { MainStart } from './components/main/MainStart';

const App = () => {
	const [user, setUser] = useState([]);
	const [repos, setRepos] = useState([]);

	if (repos.length) {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} />
				<Main user={user} repos={repos} />
			</div>
		);
	} else {
		return (
			<div className={s.wrapper}>
				<Header setUser={setUser} setRepos={setRepos} repos={repos} />
				<MainStart />
			</div>
		);
	}
}

export { App };