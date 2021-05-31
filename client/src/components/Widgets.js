import React, { Suspense } from 'react'
import './Widgets.css'
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from '../contexts/StateProvider'
import Skeleton from '@material-ui/lab/Skeleton';
const WidgetsChat = React.lazy(()=>import('./chat/WidgetsChat'))
const WigetsDummy  = React.lazy(()=>import('./chat/WigetsDummy'))


function Widgets() {
    //get the user from the provider  
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="widgets"> 
            <div className="widgets__inputBox">
                <SearchIcon className="widgets__searchIcon"/>
                <Input style={{color:"aliceblue"}} className="widgets__input" type= "text" placeholder="Search MyPal" />
            </div>
            <div className="widgets___widgetContainer">
                {/* if user doesnt exists WidgetsChat component wasthrwoing an error hence I Made a fummy component which doesnt have a user object and 
                will be rendered during refresh transitions when momentarily user is unavailable instead of throwing an error  */}
                {user?(<Suspense fallback={<Skeleton variant="rect" width={100} height={500} />}><WidgetsChat/></Suspense>):(<Suspense fallback={<Skeleton variant="rect" width={100} height={400} />}><WigetsDummy/></Suspense>)}
            </div>
        </div>
    )
}

export default Widgets
