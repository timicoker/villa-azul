import React from 'react';
import SimpleMap from './GoogleMaps'


const Map = () => {
    return(
        <div className="row z-depth-10 " >
            <div className="center">
                <div style={{height: 600}}>
                    <SimpleMap />
                </div>   
            </div>                     
        </div>
    )
}

export default Map