import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import useAxios from "../../../assets/API/useAxios";
import UsersData from "./UsersData";
// styles
import '../../../styles/components/pagination.scss'

export default function Pagination() {
  const [usersDisplayed, setUsersDisplayed] = useState<any>(10)

  const { response} = useAxios({
    url: '/users',
    headers: JSON.stringify({ accept: '*/*' }),
  });
  console.log(response);
  
  localStorage.setItem('users', JSON.stringify(response));
  const items = JSON.parse(localStorage.getItem('users')|| "");

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
                <select value={usersDisplayed} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setUsersDisplayed(e.target.value)}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              out of 100
            </label>
      </div>
      <ReactPaginate
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
        />
    </div>
    </>
  )
}