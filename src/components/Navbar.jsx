import React from 'react'
import styles from '../styles/dashboard.module.css'
import { FiPieChart } from 'react-icons/fi'
import { FaTags, FaRegCalendar, FaRegUserCircle, FaRegSun  } from 'react-icons/fa'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <section className={styles.navbar}>
            <Link href="/dashboard" className={styles.logo}>Board.</Link>

            <ul className={styles.links}>
                <li className='activeLink flex items-center justify-start py-4'>
                    <FiPieChart />
                    <span className='active font-semibold px-4'>Dashboard</span>
                </li>

                <li className='link flex items-center justify-start py-4 opacity-70 '>
                    <FaTags />
                    <span className='px-4'>Transactions</span>
                </li>

                <li className='link flex items-center justify-start py-4 opacity-70 '>
                    <FaRegCalendar />
                    <span className='px-4'>Schedule</span>
                </li>

                <li className='link flex items-center justify-start py-4 opacity-70 '>
                    <FaRegUserCircle />
                    <span className='px-4'>Users</span>
                </li>

                <li className='link flex items-center justify-start py-4 opacity-70 '>
                    <FaRegSun />
                    <span className='px-4'>Settings</span>
                </li>
            </ul>

            <article className={styles.externalLinks}>
                <li className='text-left text-base text-white font-light list-none px-8 py-2'>Help</li>
                <li className='text-left text-base text-white font-light list-none px-8 py-2'>Contact Us</li>
                <li className='text-left text-base text-black bg-white w-fit rounded-2xl font-light list-none mx-5 px-4 py-2
                cursor-pointer hover:bg-gray-200' 
                onClick={()=>signOut()}>Sign Out</li>
            </article>
        </section>
    )
}

export default Navbar