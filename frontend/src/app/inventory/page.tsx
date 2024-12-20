'use client';

import Header from '@/components/Header';
import LoadingOverlay from '@/components/LoadingOverlay';
import { useGetProductsQuery } from '@/store/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {};

const columns: GridColDef[] = [
  { field: 'productId', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'price', headerName: 'Price', width: 110, type: 'number', valueGetter: (value, row) => `$${row.price}` },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 110,
    type: 'number',
    valueGetter: (value, row) => (row.rating ? row.rating : 'N/A'),
  },
  { field: 'stockQuantity', headerName: 'Stock Quantity', width: 110 },
];

function Inventory({}: Props) {
  const { data: products, isError, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (isError || !products) {
    console.log('ERROR', error);
    return <div className=' text-center text-red-500 py-4'>Failed to fetch product!</div>;
  }

  return (
    <div className='flex flex-col'>
      <Header name='Inventory' />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'
      />
    </div>
  );
}

export default Inventory;
