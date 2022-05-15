import React from 'react';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
    </div>
  );
}

export { App };