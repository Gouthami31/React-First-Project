import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Collections from '../components/Collections'
import Banner from '../components/Banner'

import {Gents,Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'

const Mainpage = () => {
  const [gentsFashion,setGentsFashion]=useState(Gents)
  const [ladiesFashion,setladiesFashion]=useState(Ladies)

  console.log(Gents)
  
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion={gentsFashion}/>
      <WomenCollection ladiesFashion={ladiesFashion} />
      <Footer/>
    </div>
  )}

export default Mainpage
