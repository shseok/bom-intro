import React from 'react';
import Image from 'next/image';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Masthead: React.FC = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src='/assets/earth-bg.mp4' type='video/mp4;'/>
            </video>
            <div className={`flex-grow-0 pt-5 transition-opacity duration-1000`}>
                <Image src='/assets/github.png'
                       width={512 / 10}
                       height={512 / 10}
                       alt='logo'
                />
            </div>
            <div
                className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>헬로 마이 깃 월드</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>javascript / typescript/ react.js / next.js / flutter</span><span> ...ing</span>
                </h2>
            </div>
            <div className='flex-grow-0 pb-10 md:pb-10 transition-all duration-1000'>
                <Image
                    src='/assets/arrow-down.png'
                    width={500 / 10}
                    height={500 / 10}
                    alt='scroll down'/>
            </div>
        </div>
    )
}

export default Masthead;