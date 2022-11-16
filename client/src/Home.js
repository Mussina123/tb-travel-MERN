import React from 'react'
import homeLogo from './images/homeLogo1.png'
import homeLogo2 from './images/homeLogo2.png'
import homeLogo3 from './images/homeLogo3.png'

const Home = () => {
    return (
        <main className=' text-white'>
            <section className='ml-20'>
                A community of travelers who want to make memories and explore the world TOGETHER! Join our community by signing up and posting about your travel adventures! Look at other locations others have been at for inspiration... and don't forget to GoTravel!
            </section>
            <section >
                <img
                    className='homeLogo max-h-96 ml-auto md:ml-0'
                    src={homeLogo}
                    alt='homepage'
                >
                </img>
                <img
                    className='homeLogo max-h-96 ml-auto md:ml-0'
                    src={homeLogo2}
                    alt='homepage'
                >
                </img>
                <img
                    className='homeLogo max-h-96 ml-auto md:ml-0'
                    src={homeLogo3}
                    alt='homepage'
                >
                </img>
            </section>
        </main >
    )
}

export default Home