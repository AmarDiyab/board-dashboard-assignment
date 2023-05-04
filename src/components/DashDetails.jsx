import React from 'react'
import styles from '../styles/dashboard.module.css';
import { FaRegBell, FaMoneyCheck, FaTags, FaThumbsUp, FaUsers } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import LineChart from './LineChart';
import BottomSection from './BottomSection';

const DashDetails = () => {
    return (
        <section className='dashDetails col-span-4 flex flex-col'>

            <article className='titleSection flex w-full items-center justify-around px-8 py-4'>
                <span className='text-left text-2xl font-semibold mr-auto'>Dashboard</span>
                <input type="text" id='search' name='mail' placeholder='Search...' className='w-[90%] rounded-lg py-2 mx-8 px-4 w-fit' />
                <FaRegBell className='text-2xl cursor-pointer' />
                <CgProfile className='h-7 w-7 mx-8 cursor-pointer' />
            </article>

            <article className='detailSummary h-full w-full px-8'>
                <div className={styles.topSection}>

                    <span className='revenue h-full w-full flex justify-between rounded-2xl bg-[#DDEFE0] px-8 py-4'>
                        <div className='flex-col mt-auto'>
                            <span className='text-base font-medium opacity-80'>Total Revenue</span>
                            <h1 className='text-3xl font-semibold m-0 mt-1'>$1,129,430</h1>
                        </div>
                        <FaMoneyCheck className='icon text-3xl self-start opacity-80' />
                    </span>

                    <span className='transaction h-full w-full flex justify-between rounded-2xl bg-[#F4ECDD] px-8 py-4'>
                        <div className='flex-col mt-auto'>
                            <span className='text-base font-medium opacity-80'>Total Transaction</span>
                            <h1 className='text-3xl font-semibold m-0 mt-1'>1,520</h1>
                        </div>
                        <FaTags className='icon text-3xl self-start opacity-80' />
                    </span>

                    <span className='likes h-full w-full flex justify-between rounded-2xl bg-[#EFDADA] px-8 py-4'>
                        <div className='flex-col mt-auto'>
                            <span className='text-base font-medium opacity-80'>Total Likes</span>
                            <h1 className='text-3xl font-semibold m-0 mt-1'>9,721</h1>
                        </div>
                        <FaThumbsUp className='icon text-3xl self-start opacity-80' />
                    </span>

                    <span className='users h-full w-full flex justify-between rounded-2xl bg-[#EFDADA] px-8 py-4'>
                        <div className='flex-col mt-auto'>
                            <span className='text-base font-medium opacity-80'>Total Users</span>
                            <h1 className='text-3xl font-semibold m-0 mt-1'>892</h1>
                        </div>
                        <FaUsers className='icon text-3xl self-start opacity-80' />
                    </span>
                </div>

                <div className='charts h-full w-full bg-white row-span-2 rounded-2xl'>
                    <LineChart />
                <BottomSection />
                </div>
            </article>

        </section>
    )
}

export default DashDetails