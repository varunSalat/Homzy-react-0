import { useState } from 'react';
import "./ourvalue.css"
import heroImg from '../../assets/imgs/value.png';

import SectionHeader from "../generalComponents/SectionHeader"
import GppGoodIcon from '@mui/icons-material/GppGood';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ourValueData = [
    {
        que:'Best interest rates on the market',
        ans:'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.'
    },
    {
        que:'Prevent unstable prices',
        ans:'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.'
    },
    {
        que:'Best price on the market',
        ans:'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.'
    }
]

const ValueSection = () => {
    const [toggleIndex,setToggleIndex]=useState(null)
    const handleToggle=(i)=>{
    if (toggleIndex === i) {
        setToggleIndex(null);
    } else {
        setToggleIndex(i);
    }
    }
  return (
    <section id="our_value_section">
    <div className="flex_section_inner_container flex" id='our_value_inner_container'>
        <div className="section_dis_container section_dis_container_white_bg">
        <SectionHeader mainHeader={'Our Value'} secondaryHeader={'Value We Give to You'}/>
              <p className='sec_header_small_text'>We always ready to help by providing the best services for you.
We believe a good balance to live can make your life better</p>
            
            <div className="value_main_container">
                {
                    ourValueData.map((item,i)=>{
                        return (
                            <div onClick={()=>handleToggle(i)} key={i}>
                                <div className={i===toggleIndex?"value_container active":"value_container"}>
                                    <div className="que_container flex">
                                    <GppGoodIcon className='que_first_icon' />
                                    <p>{item.que}</p>
                                    <KeyboardArrowDownIcon/>
                                </div>
                                <p>{item.ans}</p>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="section_img_container section_img_blk">
            <img src={heroImg} alt="hero-right-image"  />
        </div>
    </div>
</section>
  )
}

export default ValueSection
