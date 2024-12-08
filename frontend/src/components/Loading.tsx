import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center space-x-2'>
      <LoaderCircle className='animate-spin h-14 w-14 text-blue-500' />
      <span className='text-gray-700'>Loading...</span>
    </div>
  );
};

export default Loading;
