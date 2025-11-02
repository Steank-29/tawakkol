import React from 'react'
import Navbar from "../Components/Pages/Navbar"


export default function Layout(props) {
  return (
    <>
        <Navbar/>
        {props.children}
    </>
  )
}