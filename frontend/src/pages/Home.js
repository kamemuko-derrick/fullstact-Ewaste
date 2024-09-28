import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Organic waste"} heading={"Top's Organic waste"}/>
      <HorizontalCardProduct category={"Glass waste"} heading={"Glass waste"}/>

      <VerticalCardProduct category={"polythen waste"} heading={"polythen waste"}/>
      <VerticalCardProduct category={"plastic waste"} heading={"plastic waste"}/>
      <VerticalCardProduct category={"paper waste"} heading={"paper waste"}/>
      <VerticalCardProduct category={"Tree waste"} heading={"Tree waste"}/>
    </div>
  )
}

export default Home