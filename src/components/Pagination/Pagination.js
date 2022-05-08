import "./Pagination.css";
//components
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageNumbers.length}
        onChange={(ev, page) => paginate(page)}
        color="primary"
      />
    </Stack>
  );
};

export default BasicPagination;
