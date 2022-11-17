import React from 'react'
import homeLogo from './images/homeLogo1.png'
import homeLogo2 from './images/homeLogo2.png'
import homeLogo3 from './images/homeLogo3.png'

const Home = () => {
    return (
        <>

            <main className=' text-white'>
                <section className='mx-8 mr-14 md:ml-8 md:mr-12 font-medium'>
                    A community of travelers who want to make memories and explore the world TOGETHER! Join our community by signing up and posting about your travel adventures! Look at other locations others have been at for inspiration... and don't forget to GoTravel! Take a look at a few examples from our community! :D
                </section>
                <section className='md:mx-24 mt-6'>
                    <section className='flex flex-col md:grid md:grid-cols-3 justify-evenly'>
                        <img
                            className='homeLogo'
                            src={homeLogo}
                            alt='homepage'
                        >
                        </img>
                        <img
                            className='homeLogo'
                            src={homeLogo2}
                            alt='homepage'
                        >
                        </img>
                        <img
                            className='homeLogo '
                            src={homeLogo3}
                            alt='homepage'
                        >
                        </img>
                    </section>
                </section>
            </main >
        </>
    )
}

export default Home