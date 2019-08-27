import React from 'react';

import TopNavigation from '../../Layout/Layout';
import BusPath from '../BusPath';

class Home extends React.Component{
    render(){
        return(
            <div>
                <TopNavigation/>
                <BusPath/>
            </div>
        );
    }
}

export default Home;