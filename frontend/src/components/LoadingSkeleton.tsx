import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = () => {
  return (
    <div className='flex h-[95%] m-4 overflow-hidden'>
      <div className='w-[15%] min-h-screen mr-4 hidden md:block'>
        <Skeleton height='100%' />
      </div>
      <div className='w-full md:w-[90%] h-full'>
        <Skeleton height={50} className='mb-2' />
        <div className='flex flex-col md:flex-row  md:justify-between gap-4 w-full h-full'>
          <Skeleton
            style={{ height: '100%', width: '100%' }}
            containerClassName='md:min-h-screen w-full md:w-1/3 h-1/3'
          />
          <Skeleton
            style={{ height: '100%', width: '100%' }}
            containerClassName='md:min-h-screen w-full md:w-1/3 h-1/3'
          />
          <Skeleton
            style={{ height: '100%', width: '100%' }}
            containerClassName='md:min-h-screen w-full md:w-1/3 h-1/3'
          />
          {/* <Skeleton style={{ height: '100%', width: '50%%' }} /> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
