import React from 'react';
import s from './Repository.module.css';

const Repository = () => {
	return (
		<div className={s.repository}>
			<h4 className={s.title}>react-hot-loader</h4>
			<p className={s.description}>Tweak React components in real time. (Deprecated: use Fast Refresh instead.</p>
		</div>
	)
}

export { Repository };