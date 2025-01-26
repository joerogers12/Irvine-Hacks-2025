import Data from "./Data"
import MenuToolbar from "./MenuToolbar"
import SwipeCards from "./SwipeCard"

export default function Header(){
    return(
        <div className='Screen'>
            <img className="HouseImage" src="src\components\images.jpg"/>
            <Data/>
            <MenuToolbar/>
            {/* <SwipeCards/> */}
        </div>
    )
}