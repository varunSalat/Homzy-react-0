import "./contactUs.css"
import heroImg from '../../assets/imgs/contact.jpg';
import SectionHeader from '../generalComponents/SectionHeader';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
const ContactUs = () => {
  return (
    <section id="contact_us_section">
    <div className="flex_section_inner_container flex">
        <div className="section_dis_container section_dis_container_white_bg">
        <SectionHeader mainHeader={'Our Contact Us'} secondaryHeader={'Easy to contact us'}/>
              <p className='sec_header_small_text'>We always ready to help by providing the best services for you. We believe a good place to live can make your life better</p>
            
            <div className="contact_card_main_container">
              <div className="contact_card">
                <div className="contact_header flex">
                    <LocalPhoneIcon/>
                  <div className="contact_inner_header">
                    <p className='contact_inner_main_header'>Call</p>
                    <p className="contact_dis">+91 9974397197</p>
                  </div>
                </div>
                <a className='contact_card_action_btn' href="tel:+919974397197">Call</a>
              </div>
              <div className="contact_card">
                <div className="contact_header flex">
                    <WhatsAppIcon/>
                  <div className="contact_inner_header">
                    <p className='contact_inner_main_header'>Whatsapp</p>
                    <p className="contact_dis">+91 9974397197</p>
                  </div>
                </div>
                <a className='contact_card_action_btn' target='_blank' rel='noreferrer' href="https://wa.me/+919974397197">Chat</a>
              </div>
              <div className="contact_card">
                <div className="contact_header flex">
                    <LinkedInIcon/>
                  <div className="contact_inner_header">
                    <p className='contact_inner_main_header'>LinkedIn</p>
                    <p className="contact_dis">Varun Salat</p>
                  </div>
                </div>
                <a className='contact_card_action_btn' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/varun-salat-709a0a19a">Connect</a>
              </div>
              <div className="contact_card">
                <div className="contact_header flex">
                    <LanguageIcon/>
                  <div className="contact_inner_header">
                    <p className='contact_inner_main_header'>Website</p>
                    <p className="contact_dis">varunsalat.com</p>
                  </div>
                </div>
                <a className='contact_card_action_btn' rel='noreferrer' target='_blank' href="https://varunsalat.com/">Visit</a>
              </div>
            </div>
        </div>
        <div className="section_img_container section_img_blk">
            <img src={heroImg} alt="hero-right-image"  />
        </div>
    </div>
</section>
  )
}

export default ContactUs
