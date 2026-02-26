import React from 'react'
import '../../styles/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiedPiperAlt } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <h1>Learn Buddy</h1>
        </div>
        <div className='pages'>
            <ul className='list'>
                <li className='listitem'>Home</li>
                <li className='listitem'>About Us</li>
                <li className='listitem'>Contact</li>
                <li className='listitem'>FeedBack</li>
                <li><button><FontAwesomeIcon icon={faPiedPiperAlt} /> Get Started</button></li>
            </ul>
        </div>
    </nav>
  )
}

