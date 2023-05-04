import React from 'react'
import dummyData from '../../data.json'

const data = JSON.stringify(dummyData)
localStorage.setItem('data', data)

const getData = () => {
  return (
    <></>
  )
}

export default getData