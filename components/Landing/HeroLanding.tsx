import React from 'react';
import Image from 'next/image';

export const HeroLanding: React.FC = () => {
    return (
        <div className='mt-10 relative overflow-hidden'>
            <div className='text-center '>
                <h1 className='text-[25px] md:text-[60px] lg:text-[80px] font-extrabold'>the <span className='text-pink-400'>future</span> of learning</h1>
                <div className='w-[100px] h-[100px] bg-green-500 rounded-full absolute -z-10  right-0 -top-10 md:-top-5  md:right-10 lg:top-0 lg:right-20'></div>
            </div>
            <div className=' pt-4'>
                <div className='bg-green-400 px-6 py-4 rounded-full font-extrabold text-[20px] md:text-[25px] my-6 text-center'>
                    <h3 className='text-black'>Learn 5x faster, 5x more fun </h3>
                </div>
                <div className='bg-blue-400 px-6 py-4 rounded-full font-extrabold text-[20px] md:text-[25px] my-6 text-center'>
                    <h3 className='text-black'>Custom lessons backed by science </h3>
                </div>
                <div className='bg-pink-400 px-6 py-4 rounded-full font-extrabold text-[20px] md:text-[25px] my-6 text-center'>
                    <h3 className='text-black'>Fun challenges to stay motivated </h3>
                </div>
                <div className='bg-green-400 px-6 py-4 rounded-full font-extrabold text-[20px] md:text-[25px] my-6 text-center'>
                    <h3 className='text-black'>Use fluentify everywhere, anywhere </h3>
                </div>
            </div>
        </div>
    );
}

