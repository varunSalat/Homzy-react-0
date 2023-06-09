import './hero.css';

import heroImg from '../../../assets/imgs/hero-image.png'

const HeroSection = () => {
return (
<section id="hero_section">
    <div className="flex_section_inner_container flex">
        <div className="section_inner_container">
            <div className="hero_sec_left_main_header">
                <h1>Discover <br/> Most Suitable <br/> Property</h1>
                <div className="orange-circle"></div>
            </div>
            <p>Find a variety of properties that suit you very easily
Forget all difficulties in finding a residence for you</p>
            <form onSubmit={e=>e.preventDefault()} id='search_property_form'>
                <input type="text" name="find_location" placeholder='search with location' id="find_location" />
                <button className='gradient_btn' id='submit_btn' type="submit">Search</button>
            </form>
            <div className="testi_container flex">
                <div className="testi_card">
                    <h3>9,000 <span className='plus'>+</span></h3>
                    <h4>Premium Product</h4>
                </div>
                <div className="testi_card">
                    <h3>2,000 <span className='plus'>+</span></h3>
                    <h4>Happy Customer</h4>
                </div>
                <div className="testi_card">
                    <h3>28 <span className='plus'>+</span></h3>
                    <h4>Awards Winning</h4>
                </div>
            </div>
        </div>
        <div className="hero_section_right_container">
            <img src={heroImg} alt="hero-right-image"  />
        </div>
    </div>
</section>
)
}

export default HeroSection
