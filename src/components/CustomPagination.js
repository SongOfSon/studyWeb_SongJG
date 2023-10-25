import React from 'react';

import '../styles/CustomPagination.css'

function CustomPagination({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit);
  
    return (
      <div className='pagination'>
        <button className="paginArrow" onClick={() => setPage(page - 1)} disabled={page === 1}>
          {"<"}
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button className="paginNumList"
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
        <button className="paginArrow" onClick={() => setPage(page + 1)} disabled={page === numPages}>
          {">"}
        </button>
      </div>
    );
  }
export default CustomPagination;