import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    // <div className="flex justify-center items-center h-screen">
    //   <button
    //     className="bg-blue-500 text-white px-4 py-2 rounded"
    //     onClick={() => navigate('/services/new')}
    //   >
    //     Go to Services
    //   </button>
    // </div>


  <div className="bg-blue-500 p-4 h-[300px] w-[600px] mx-auto  rounded-md">
    <div className='h-[50px] mt-[20px]  mb-2 bg-red-200'>
        <h2 className='align-middle'>WellCome, This is done by shubhi</h2>
    </div>
    <div className='h-[100px] bg-red-600 flex justify-center items-center'>
    <button className="bg-blue-500  text-white px-4 py-2 rounded"
        onClick={() => navigate('/services/new')} >
        Go to Services
      </button>
    </div>
  </div>


  );
};

export default HomePage;
