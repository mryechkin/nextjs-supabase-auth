'use client';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import React from 'react';

const theme = createTheme({
  components: {
    // Name of the component
    MuiPagination: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: '#000',
        },
      },
    },
  },
});

PaginationTest.propTypes = {
  pages: PropTypes.number,
  currentPage: PropTypes.number,
};

export default function PaginationTest(props) {
  const router = useRouter();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Pagination
          className="font-bold"
          // siblingCount={10}
          page={props.currentPage}
          count={props.pages}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                borderRadius: 0,
                borderColor: '#000',
                border: 2,
                fontWeight: 'bold',
              }}
              to={`/${item.page === 1 ? '' : `archive?page=${item.page}`}`}
              {...item}
              onClick={() => router.push(`/archive?page=${item.page}`)}
              size={'large'}
              variant="outlined"
            />
          )}
        />
      </ThemeProvider>
    </div>
  );
}
