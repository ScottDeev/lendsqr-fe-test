import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import UsersData from "./UsersData";
// styles
import '../../../styles/components/pagination.scss'
import { useFetch } from "../../../assets/API/useFetch";

export default function Pagination() {
  const {data} = useFetch('/users')
  localStorage.setItem('users', JSON.stringify(data));
  const items = JSON.parse(localStorage.getItem('users')|| "");

  const usersDisplayed = 10;
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + usersDisplayed;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / usersDisplayed);    
  
  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * usersDisplayed) % items?.length;
    setItemOffset(newOffset);
  };
  return (
    <>
    <UsersData users={currentItems}/>
    <div className="pagination-container">
      <div className="select-wrapper">
        <label>
              Showing
              <div className="select-wrapper">
                <select defaultValue="10">
                  <option value="10">10</option>
                </select>
              </div>
              out of 100
            </label>
      </div>
      {items && <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          containerClassName="pagination-wrapper"
          pageLinkClassName="page-link"
          activeLinkClassName="active-link"
          previousClassName='prev'
          nextClassName="next"
          breakLinkClassName='page-link'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
        />}
    </div>
    </>
  )
}