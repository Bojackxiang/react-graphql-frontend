import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/events">events</NavLink></li>
                <li><NavLink to="/bookings">Booking</NavLink></li>
                <li><NavLink to="/auth">Auth</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
