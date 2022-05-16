import React from 'react';
import s from './Loader.module.css';

const Loader = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.loader}></div>
		</div>
	)
}

export { Loader };