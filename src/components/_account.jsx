import React from 'react'
import { useSession, getSession } from 'next-auth/react'
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'

// export const Account = () => {

//     const { data: session, status } = useSession({ required: true })

//     if (status === 'authenticated') {
//         return (
//             <Dashboard />
//         )
//     } else {
//         return (
//             <Login />
//         )
//     }
// }

//Server Side
export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    
    if (!session) {
        return {
            redirect: {
                destination: '/login'
            }
        }
    }
    return {
        props: {session},

    }
}