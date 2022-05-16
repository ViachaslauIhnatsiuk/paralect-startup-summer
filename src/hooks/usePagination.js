import { useState, useEffect, useContext } from "react";
import { FetchContext } from '../context.js';

const usePagination = () => {
	const { repos, currentPage, setCurrentPage } = useContext(FetchContext);
	const [pageNumbers, setPageNumbers] = useState([]);

	const pagesAmount = Math.ceil(repos.length / 4);
	const pagesInterval = `${(currentPage * 4 - 3)} - ${currentPage * 4 < repos.length ? currentPage * 4 : repos.length} of ${repos.length} items`;
	let pages = [];

	for (let i = 1; i <= pagesAmount;) {
		pages.push(i++);
	}

	useEffect(() => {
		const dots = '...';
		const leftDots = '... ';
		const rightDots = ' ...';

		if (pagesAmount < 5) {
			pages = [...pages];
		} else if (currentPage >= 1 && currentPage <= 2) {
			pages = [1, 2, 3, dots, pages.length];
		} else if (currentPage > 2 && currentPage < pages.length - 2) {
			const slice = pages.slice(currentPage - 2, currentPage + 1)
			pages = [1, leftDots, ...slice, rightDots, pages.length];
		} else if (currentPage > pages.length - 3) {
			const slice = pages.slice(pages.length - 3)
			pages = [1, leftDots, ...slice];
		} else if (currentPage === dots) {
			setCurrentPage(pageNumbers[pageNumbers.length - 3] + 1);
		} else if (currentPage === rightDots) {
			setCurrentPage(pageNumbers[3] + 2);
		} else if (currentPage === leftDots) {
			setCurrentPage(pageNumbers[3] - 2);
		}

		setPageNumbers(pages)
	}, [currentPage, repos]);

	return {
		pagesAmount,
		pagesInterval,
		pageNumbers,
		currentPage,
		setCurrentPage,
	}
};

export { usePagination };