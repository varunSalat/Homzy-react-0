import { useState } from 'react';
import logoImg from '../../../assets/imgs/logo.png';
import './header.css';
import HamBurger from './HamBurger';
const Header = () => {
    const [active,setActive]=useState(false);
return (
<header id='header' className='flex'>
    <nav className='navbar flex'>
        <img id='header_logo' src={logoImg} alt="Homzy-logo" />
        <HamBurger active={active} setActive={setActive} />
        <ul className={active?'nav_link_container active flex':'nav_link_container flex'}>
            <li className='nav_link'><a href="#">Residencies</a></li>
            <li className='nav_link'><a href="#">Our Value</a></li>
            <li className='nav_link'><a href="#">Contact Us</a></li>
            <li className='nav_link'><a href="#">Get Started</a></li>
            <li className='nav_link' id='free_trial_btn'><a className='gradient_btn' href="#">Free Trial</a></li>
        </ul>
        
    </nav>
</header>
)
}

export default Header
