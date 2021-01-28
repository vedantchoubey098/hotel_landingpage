import React from 'react'
import '../Components/SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from '../Components/SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__info">
               <p>65 stays 26 august to 30 august 2 guest</p>
               <h1>Stays nearby</h1>
               <Button variant="outlined">cancellation Flexibility</Button>
               <Button variant="outlined">Type of place</Button>
               <Button variant="outlined">Price</Button>
               <Button variant="outlined">Rooms and beds</Button>
               <Button variant="outlined">More filter</Button>
           </div>
           <SearchResult
           img="https://assets3.thrillist.com/v1/image/1641168/414x310/crop;jpeg_quality=65.jpg"
           location="london"
           title="stay at this specious place"
           description="1 guest 1.5 shared bathroom wifi kitchen 1 bed"
           star={4.89}
           price="$45 / night"
           total="150 total"
           />
           <SearchResult
           img="https://cf.bstatic.com/images/hotel/max1024x768/178/178761823.jpg"
           location="london"
           title="stay at this specious place"
           description="1 guest 1.5 shared bathroom wifi kitchen 1 bed"
           star={4}
           price="$45 / night"
           total="150 total"
           />
           <SearchResult
           img="https://a0.muscache.com/pictures/5fcbb0af-ace5-47bb-b251-eba6ada69681.jpg"
           location="london"
           title="stay at this specious place"
           description="1 guest 1.5 shared bathroom wifi kitchen 1 bed"
           star={7.52}
           price="$45 / night"
           total="150 total"
           />
           <SearchResult
           img="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=2500%2C1666"
           location="london"
           title="stay at this specious place"
           description="1 guest 1.5 shared bathroom wifi kitchen 1 bed"
           star={3.98}
           price="$45 / night"
           total="150 total"
           />
           <SearchResult
           img="https://www.thebalancesmb.com/thmb/uret7OWtxiiuxFQmh8NFNtRqZAk=/3200x2400/filters:no_upscale():max_bytes(150000):strip_icc()/loft-room-684105698-5a0759140d327a0036fc01d8.jpg"
           location="london"
           title="stay at this specious place"
           description="1 guest 1.5 shared bathroom wifi kitchen 1 bed"
           star={5.00}
           price="$45 / night"
           total="150 total"
           />
           <SearchResult
           img="https://media.nomadicmatt.com/2018/apartment.jpg"
           location="london"
           title="stay at this specious place"
           description="1 guest 1.5 shared bathroom wifi kitchen 1 bed"
           star={4.58}
           price="$45 / night"
           total="150 total"
           />
        </div>
    )
}

export default SearchPage
