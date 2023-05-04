import React from "react";
import styles from '../styles/dashboard.module.css';
import Navbar from "@/components/Navbar";
import DashDetails from "@/components/DashDetails";


const Dashboard = () => {
    return ( 
        <div className={styles.dashContainer}>
            <Navbar />
            <DashDetails />
        </div>
     );
}
 
export default Dashboard;