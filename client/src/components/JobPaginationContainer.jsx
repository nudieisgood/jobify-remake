import Wrapper from "../assets/styledComponents/JobPaginationContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const JobPaginationContainer = ({ totalPages, totalJobs, currentPage }) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("currentPage", pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Wrapper>
      <button
        className="btn pre-btn"
        onClick={() => {
          let goToPage = currentPage - 1;
          if (goToPage < 1) {
            goToPage = 1;
          }
          handlePageChange(goToPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btns-container">
        {pages.map((page) => {
          return (
            <button
              className={`btn page-btn ${page === currentPage && "active"}`}
              onClick={() => {
                handlePageChange(page);
              }}
              key={page}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        className="btn next-btn"
        onClick={() => {
          let goToPage = currentPage + 1;
          if (goToPage > totalPages) {
            goToPage = totalPages;
          }
          handlePageChange(goToPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default JobPaginationContainer;
