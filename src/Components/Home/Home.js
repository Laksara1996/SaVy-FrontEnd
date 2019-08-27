import React from 'react';

import TopNavigation from '../../Layout/Layout';
import Map from '../Map';

class Home extends React.Component{
    render(){
        return(
            <div>
                <TopNavigation/>
                <Map/>
            </div>
        );
    }
}

export default Home;