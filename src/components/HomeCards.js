import React from 'react'

class HomeCards extends React.Component {
    render(){
        const imageStyle = {
            width: '130px',
            height: '100px',
            
        }
    
        return(
            <div>
            <h3 style={{padding:20}}>A little more about us...</h3>
                <blockquote className="ms-blockquote">
                    <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laborum eos voluptatem qui quibusdam corrupti accusantium sed odit repellendus quo ratione dicta esse, distinctio delectus quia asperiores veritatis perspiciatis illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laborum eos voluptatem qui quibusdam corrupti accusantium sed odit repellendus quo ratione dicta esse, distinctio delectus quia asperiores veritatis perspiciatis illum.</em></p>
                </blockquote>    
                    <div className="col-s-10 col-m-12 col-l-6 ms-card">
                            <div className="ms-pic">
                                <img style={imageStyle} src={'icons/house.svg'} alt='pic'/>
                            </div>
                            <div className="ms-text ms-text-gray-font home-p">
                                <p className="text-center">All units feature a private bathroom, living room, flat-screen TV, A/C, and a fully-equipped kitchen and terrace.</p>
                            </div>
                        </div>
                        <div className="col-s-10 col-m-12 col-l-6 ms-card">
                            <div className="ms-pic">
                                <img style={imageStyle} src={'icons/beach.svg'} alt='pic'/>
                            </div>
                            <div className="ms-text ms-text-gray-font home-p">
                                <p className="text-center">Soak up the Domincan sun at Encuentro Beach in Cabarete or by our year-round outdoor pool.</p>
                            </div>
                        </div>
                        <div className="col-s-10 col-m-12 col-l-6 ms-card">
                            <div className="ms-pic">
                                <img style={imageStyle} src={'icons/car.svg'} alt='pic'/>
                            </div>
                            <div className="ms-text ms-text-gray-font home-p">
                                <p className="text-center">We'll help you explore more of the island with our car rental service.</p>
                            </div>
                        </div>
                        <div className="col-s-10 col-m-12 col-l-6 ms-card">
                            <div className="ms-pic">
                                <img style={imageStyle} src={'icons/wifi.svg'} alt='pic'/>
                            </div>
                            <div className="ms-text ms-text-gray-font home-p">
                                <p className="text-center">Surf Blue Billa Cabarete provides all the accommodations you could need, and of course: free WiFi.</p>
                            </div>
                        </div> 
            </div>
        )
    }
};
export default HomeCards;