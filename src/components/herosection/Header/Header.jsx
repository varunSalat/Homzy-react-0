import { useState } from 'react';
import logoImg from '../../../assets/imgs/logo.png';
import './header.css';
import HamBurger from './HamBurger';
const Header = () => {
    const [active,setActive]=useState(false);
    window.addEventListener("scroll",()=>{
        if(active)setActive(false)
    })
return (
<header id='header' className='flex'>
    <nav className='navbar flex'>
        <img id='header_logo' src={logoImg} alt="Homzy-logo" />
        <HamBurger active={active} setActive={setActive} />
        <ul className={active?'nav_link_container active flex':'nav_link_container flex'}>
            <li className='nav_link'><a href="#popular_residence_section">Residencies</a></li>
            <li className='nav_link'><a href="#our_value_section">Our Value</a></li>
            <li className='nav_link'><a href="#contact_us_section">Contact Us</a></li>
            <li className='nav_link'><a href="#get_started_section">Get Started</a></li>
            <li className='nav_link' id='free_trial_btn'><a className='gradient_btn' href="#">Free Trial</a></li>
        </ul>
        
    </nav>
</header>
)
}

export default Header
