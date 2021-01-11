import React from 'react'
import './Cards.css';
import CardItem from './CardItem';
import myImage1 from '../images/pte.jpg';


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these lessons</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'> 
                    <ul className='cards__items'> 
                    <CardItem 
                        src={myImage1} 
                        text="Advance your knowledge and upgrade them together Advance your knowledge and upgrade them together Advance " 
                        label="Speaking" 
                        path="/blogs" 
                    />
                     <CardItem 
                        src={myImage1} 
                        text="Advance your knowledge and upgrade them together Advan them together Advance yo  them together Advance yo  them together Advance yo  them together Advance yo  them together Advance yo vance yo  them" 
                        label="Listening" 
                        path="/blogs" 
                    />
                    <CardItem 
                        src={myImage1} 
                        text="Advance your knowledge and upgrade them togetheAdvance your  them together Advance yo  them together Advance yo  them together Advance yo  them together Advance yo  them together Advance yo vance yo  them" 
                        label="Reading" 
                        path="/blogs" 
                    />
                    <CardItem 
                        src={myImage1} 
                        text="Advance your knowledge and upgrand upgrade them together Advance your  them together Advance yo  them together Advance yo  them together Advance yo  them together Advance yo  them together Advance yo vance yo  them" 
                        label="Writing" 
                        path="/blogs" 
                    />
                    

                    </ul>
                    
                </div>
            </div>

        </div>
    )
}

export default Cards;
