import React, { useState } from 'react';

const Paginate = ({ currentPage, setCurrentPage }) => {
    const pageNumbers = [];


    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="page-link cursor-pointer"
                    >
                        Prev
                    </button>
                </li>
                <li className="page-item">
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="page-link cursor-pointer"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginate;