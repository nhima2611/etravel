import { Link } from 'react-router-dom'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './styles.scss/Pricing.scss'
const Pricing = () => {
    return (
        <div className='pricing'>
            <div className="tohome">
                <Link to='/'>
                    <AiOutlineArrowLeft className='arrow'/>
                </Link>
            </div>

                <div className="cart-container">
                    <h1 className='gp'>General Pricing</h1>
                    <div className="tour">
                        <h1>Paris</h1>
                        <p>5 day tour to Paris,France</p>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio delectus iste, voluptas dignissimos laudantium repellendus repudiandae voluptatem amet expedita quia eos porro ut a molestiae eaque impedit temporibus. Exercitationem!</h5>
                        <button>More</button>
                    </div>

                    <div className="tour">
                        <h1>New York</h1>
                        <p>5 day tour to NYC,USA</p>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio delectus iste, voluptas dignissimos laudantium repellendus repudiandae voluptatem amet expedita quia eos porro ut a molestiae eaque impedit temporibus. Exercitationem!</h5>
                        <button>More</button>
                    </div>

                    <div className="tour">
                        <h1>Moscow</h1>
                        <p>5 day tour to Moscow,Russia</p>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio delectus iste, voluptas dignissimos laudantium repellendus repudiandae voluptatem amet expedita quia eos porro ut a molestiae eaque impedit temporibus. Exercitationem!</h5>
                        <button>More</button>
                    </div>

                    <div className="tour">
                        <h1>Barcelona</h1>
                        <p>5 day tour to Barcelona,Spain</p>
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio delectus iste, voluptas dignissimos laudantium repellendus repudiandae voluptatem amet expedita quia eos porro ut a molestiae eaque impedit temporibus. Exercitationem!</h5>
                        <button>More</button>
                    </div>

                </div>

        </div>
    )
}

export default Pricing