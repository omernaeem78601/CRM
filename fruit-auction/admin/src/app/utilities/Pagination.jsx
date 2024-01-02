import React, { useContext, useEffect, useState } from 'react'
import { setDataContext } from './SettingContext'

const Pagination = ({ paginationData}) => {
  
  const totalPages = paginationData? paginationData.totalPages : 1

  const { setRefresh, pageNumber, setPageNumber} = useContext(setDataContext) 
    // pagination 
  const handlePageClick = (page) => { 
    setPageNumber(page) 
    setRefresh(true)
  } 
  const handleNextClick = () => { 
    if (pageNumber < totalPages) { 
      setPageNumber(pageNumber + 1) 
      setRefresh(true)
    } 
  } 
  const handlePreviousClick = () => { 
    if (pageNumber > 1) { 
      setPageNumber(pageNumber - 1) 
      setRefresh(true)
    } 
  } 
  
  // const pageNumbers = Array.from({length: totalPages}, (_, index) => index + 1) 
  const pageNumbers = 1

  // Function to determine which pageNumber numbers to display 
  const getPageNumbersToShow = () => {
    const maxButtonsToShow = 3 
    if (totalPages <= maxButtonsToShow) { 
      return pageNumbers 
    } else if (pageNumber <= maxButtonsToShow - 1) { 
      return [...pageNumbers.slice(0, maxButtonsToShow), '...', totalPages] 
    } else if (pageNumber >= totalPages - (maxButtonsToShow - 1)) { 
      return [1, '...', ...pageNumbers.slice(-maxButtonsToShow)] 
    } else { 
      return [1, '...', pageNumber - 1, pageNumber, pageNumber + 1, '...', totalPages] 
    } 
  } 

  // pagination end 
  useEffect(()=>{
  },[pageNumber,pageNumbers])

  return (
    <div className="row border-top">
      
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
        {/* Showing {paginationData.from ?? 0} to {paginationData.to ?? 0} of {paginationData.total} entries */}
        Showing {0} to { 0} of {0} entries
      </div>

      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
        <div className="dataTables_paginate paging_simple_numbers p-1" id="kt_table_users_paginate">
          <ul className='pagination'> 
            <li className={`paginate_button page-item previous ${pageNumber === 1 ? ' disabled' : ''}`}> 
              <button onClick={handlePreviousClick} className="page-link">Previous</button> 
            </li> 
            {/* {getPageNumbersToShow().map((page, index) => ( 
              <li key={index} className={`paginate_button page-item ${pageNumber === page ? ' active' : ''}`}> 
                { page === '...' ? ( 
                  <span className='page-link'>...</span> 
                ) : ( 
                  <a href="#" onClick={() => handlePageClick(page)} className="page-link"> 
                    {page} 
                  </a> 
                )} 
              </li> 
            ))}  */}
            
              <li className={`paginate_button page-item active`}> 
                  <span className='page-link'>...</span> 
                  <a href="#"className="page-link"> 
                    2
                  </a> 
              </li> 
            <li className={`paginate_button page-item  next page-item${pageNumber === totalPages ? ' disabled' : ''}`}> 
              <a href="#" className="page-link">Next</a> 
            </li> 
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default Pagination