import React from 'react'
import styles from '../styles/dashboard.module.css'
import PieChart from './PieChart'
import { FaArrowRight } from 'react-icons/fa'

const BottomSection = () => {

  return (
    <div className='h-full w-full grid grid-rows-1 grid-cols-2 row-span-2 gap-8' >
        <div className={styles.pieChart}>
            <h1 className={styles.topProducts}>Top Products</h1>

            <select name="clothes" id="clothes" 
            className='absolute top-4 right-4 w-fit self-end rounded-lg font-medium text-gray-600 opacity-70 px-4 py-2'>
                <option value="Tees">May-Jun 2023</option>
                <option value="Pants">Jun-Jul 2023</option>
                <option value="Hoodies">Jul-Aug 2023</option>
            </select>
            <PieChart />
        </div>

        <div className={styles.schedule}>
            <a href="#" className='absolute flex text-gray-600 top-[10px] right-[10px] px-8 py-4'>
                <span className='px-4'>See All</span>
            <FaArrowRight />
            </a>
            <h1 className='text-left font-semibold text-2xl px-8 py-4'>Today&apos;s Schedule</h1>

            <div className='flex flex-col justify-around px-8'>

                <div className='item border-l-4 border-[#9BDD7C] px-4 my-2'>
                    <h1>Meeting with suppliers from Kuta Bali</h1>
                    <p className='time text-left text-lg opacity-60'>14:00 - 15:00</p>
                    <p className='location text-left'>At Sunset Road, Kuta, Bali</p>
                </div>

                <div className='item border-l-4 border-[#6972C3] px-4 my-2'>
                    <h1>Check operation at Giga Factory 1</h1>
                    <p className='time text-left text-lg opacity-60'>18:00 - 20:00</p>
                    <p className='location text-left'>At Central Jakarta</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default BottomSection