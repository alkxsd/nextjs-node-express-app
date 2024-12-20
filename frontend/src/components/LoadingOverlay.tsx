import Loading from "./Loading";

const LoadingOverlay = () => {
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
