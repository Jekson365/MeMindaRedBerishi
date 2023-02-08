import React from 'react'
import Logo from '../assets/LOGO-02.png'
import secLog from '../assets/LOGO-40.png'

export const Home = () => {
    return (
        <>
            <div className="container-fluid cover">
                <div className="secondary-logo">
                    <img src={secLog}/>
                </div>
                <div className="container-fluid p-5">
                    <img src={Logo} className='logo'/>
                    <div className="line"></div>
                </div>
                <div className="buttons">
                    <button className='res'>ჩანაწერის დამატება</button>
                </div>
            </div>
        </>
    )
}
