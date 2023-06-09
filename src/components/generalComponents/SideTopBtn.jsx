import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const SideTopBtn = () => {
    const [showSidebtn,setShowSideBtn]=useState(false)
  // !SCROLL TOP BUTTON
  useEffect(()=>{
    const handleScroll = ()=>{
    const heroSectionHeight = document.getElementById("hero_section").offsetHeight+400;
    const scrollPosition = window.pageYOffset ||document.documentElement.scrollTop;

    if(scrollPosition>=heroSectionHeight){
      setShowSideBtn(true)
    }else{
      setShowSideBtn(false)
    }
  }
  window.addEventListener("scroll",handleScroll);
  return ()=>window.removeEventListener("scroll",handleScroll)
  },[])
  
  return (
    <div className= {showSidebtn?"side_btn_container active":"side_btn_container"} >
        <a href="#"><KeyboardArrowUpIcon/></a>
    </div>
  )
}

export default SideTopBtn
