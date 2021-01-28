import React from 'react'
import '../Components/Home.css'
import Banner from '../Components/Banner'
import Card from '../Components/Card'


function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                src="https://skift.com/wp-content/uploads/2019/08/PJM013418Q322-Pasadena_House-00342_JL1.jpg"
                title="Entire home"
                description="confortable private place, with room for friends and familys"
                 />
                 <Card
                src="https://skift.com/wp-content/uploads/2019/12/airbnb-plus-room-cape-town-1024x684.jpg"
                title="Entire home"
                description="confortable private place, with room for friends and familys"
                 />
                 <Card
                src="https://skift.com/wp-content/uploads/2018/10/london-airbnb-living-room-e1539104712815.jpg"
                title="Entire home"
                description="confortable private place, with room for friends and familys"
                 />
            </div>   
            <div className="home__section">
            <Card
                src="https://skift.com/wp-content/uploads/2019/12/JM_117814_Jamaica_TheFlemmingVilla_009_Diningroom_Grid5_0555-Edit_TC1-e1576532963137.jpg"
                title="Entire home"
                description="confortable private place, with room for friends and familys"
                price="$80/night"
                 />
                 <Card
                src="https://cf.bstatic.com/images/hotel/max1024x768/178/178761823.jpg"
                title="Entire home"
                description="confortable private place, with room for friends and familys"
                price="$250/night"
                 />
                 <Card
                src="https://gritdaily.com/wp-content/uploads/2019/11/Lyric-New-Orleans-3-Bed-3-Bath-Apartment.jpg"
                title="Entire home"
                description="confortable private place, with room for friends and familys"
                price="$300/night"
                 />
            </div>   
        </div>
    )
}

export default Home
