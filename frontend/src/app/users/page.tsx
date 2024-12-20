'use client';

import Header from '@/components/Header';
import LoadingOverlay from '@/components/LoadingOverlay';
import { useGetUsersQuery } from '@/store/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {};

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'User Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 210 },
];

function Users({}: Props) {
  const { data: users, isError, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (isError || !users) {
    console.log('ERROR', error);
    return <div className=' text-center text-red-500 py-4'>Failed to fetch users!</div>;
  }

  return (
    <div className='flex flex-col'>
      <Header name='Users' />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'
      />
    </div>
  );
}

export default Users;
