import React, { useState, useEffect } from "react";
import s from './Pagination.module.css';
import left_inactive from '../../../../assets/icons/left-arrow-inactive.svg';
import left_active from '../../../../assets/icons/left-arrow-active.svg';
import right_inactive from '../../../../assets/icons/right-arrow-inactive.svg';
import right_active from '../../../../assets/icons/right-arrow-active.svg';

const Pagination = ({ repos, currentPage, setCurrentPage }) => {
	const pagesNumber = Math.ceil(repos.length / 4);
	let pages = [];

	for (let i = 1; i <= pagesNumber;) {
		pages.push(i++);
	}

	const [pageNumbers, setPageNumbers] = useState([]);


	useEffect(() => {
		const dots = '...';
		const leftDots = '... ';
		const rightDots = ' ...';
		if (pagesNumber < 5) {
			pages = [...pages]
		} else if (currentPage >= 1 && currentPage <= 2) {
			pages = [1, 2, 3, dots, pages.length]
		} else if (currentPage > 2 && currentPage < pages.length - 2) {
			const slice = pages.slice(currentPage - 2, currentPage + 1)
			pages = ([1, leftDots, ...slice, rightDots, pages.length])
		} else if (currentPage > pages.length - 3) {
			const slice = pages.slice(pages.length - 3)
			pages = ([1, leftDots, ...slice])
		} else if (currentPage === dots) {
			setCurrentPage(pageNumbers[pageNumbers.length - 3] + 1)
		} else if (currentPage === rightDots) {
			setCurrentPage(pageNumbers[3] + 2)
		} else if (currentPage === leftDots) {
			setCurrentPage(pageNumbers[3] - 2)
		}

		setPageNumbers(pages)
	}, [currentPage, repos])

	const pagesInterval = `${(currentPage * 4 - 3)} - ${currentPage * 4 < repos.length ? currentPage * 4 : repos.length} of ${repos.length} items`;

	return (
		<div className={s.pagination}>
			<div className={s.items}>{pagesInterval}</div>
			<div className={s.main}>
				<img onClick={() =>
					currentPage > 1
						? setCurrentPage(currentPage - 1)
						: null}
					src={currentPage > 1 ? left_active : left_inactive}
					className={currentPage > 1 ? s.previous : null}
					alt="left arrow"
				/>
				{pageNumbers.map((page, index) => <div
					key={index}
					className={
						currentPage === page
							? s.active_page
							: s.page}
					onClick={() => setCurrentPage(page)}>{page}</div>)}
				<img onClick={() =>
					currentPage < pagesNumber
						? setCurrentPage(currentPage + 1)
						: null}
					src={currentPage < pagesNumber ? right_active : right_inactive}
					className={currentPage < pagesNumber ? s.next : null}
					alt="right arrow"
				/>
			</div>
		</div>
	)
}

export { Pagination };