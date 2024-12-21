import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
return (
    <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>Home Foody</h2>
            </Link>
            
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...'/>
        </div>
        <div className="userAuth">
            Login / signUp
        </div>
    </section>
)
}

export default TopBar