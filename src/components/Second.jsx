import React from 'react'
import './styles.scss/Second.scss'
import small from './assets/small-paris.jpg'
import barca from './assets/barcelona.jpg'
import moscow from './assets/moscow.jpg'
import newyork from './assets/newyork.jpg'

const Second = () => {
    return (
        <section className='second'>
            <h1>Gallery</h1>
                <div className="images">
                <div>
                <img src={small} alt="paris"/>
                <p>Paris, France 2011</p>
                </div>
                <div>
                <img src={barca} alt="paris"/>
                <p>Barcelona, Spain 2019</p>
                </div>
                <div>
                <img src={moscow} alt="paris"/>
                <p>Moscow, Russia 2017</p>
                </div>
                <div>
                <img src={newyork} alt="paris" className='new-york'/>
                <p>NYC, USA 2020</p>
                </div>
            </div>

        </section>
    )
}

export default Second