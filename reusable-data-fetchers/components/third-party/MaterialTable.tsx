'use client';

import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  CircularProgress,
  Alert
} from '@mui/material';
import withClientFetching from '../../hoc/withClientFetching';
import { Product, WithDataProps } from '../../types';

const MaterialTable: React.FC<WithDataProps<Product>> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <TableContainer component={Paper} className="shadow-lg">
      <Table sx={{ minWidth: 650 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell 
                align="right"
                sx={{
                  color: product.stock > 10 ? 'success.main' : 
                         product.stock > 5 ? 'warning.main' : 
                         'error.main'
                }}
              >
                {product.stock}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Export the component wrapped with our client-side fetching HOC
export default withClientFetching<Product, WithDataProps<Product>>(
  MaterialTable, 
  'ProductList'
);