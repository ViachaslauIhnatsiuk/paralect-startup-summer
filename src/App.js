import React, { useState } from 'react';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

const App = () => {
	const [user, setUser] = useState([]);
	const [repos, setRepos] = useState([]);

	return (
		<div className={s.wrapper}>
			<Header setUser={setUser} setRepos={setRepos} />
			<Main user={user} repos={repos} />
		</div>
	);
}

export { App };