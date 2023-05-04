import React from 'react'
import { useSession } from 'next-auth/react'
import Dashboard from './dashboard'
import Login from './login'

const Home = () => {

  const { data: session } = useSession();

  if (session) {
    return (
      <Dashboard />
    )
  } else {
    return (
      <Login />
    )
  }

}

export default Home;
