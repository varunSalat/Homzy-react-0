import img from "../../assets/imgs/logo2.png"
const Footer = () => {
  return (
    <footer className="section" id="footer">
        <div className="footer_inner_container flex">
            <div className="footer_container">
                <figure className="footer_logo">
                    <img id="header_logo" src={img} alt="Homzy-logo"></img>
                </figure>
            <p className="footer_secondary_text">Our vision is to make all people
    the best place to live for them.</p>
            </div>
            <div className="footer_container">
                <h5 className="footer_container_header">Social Media</h5>
                <ul className="footer_list_container">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            <div className="footer_container">
                <h5 className="footer_container_header">Address</h5>
                <ul className="footer_list_container">
                    <li><a>Plot-E/125 Near Crown Circle <br/> Sector-25 Ahmadabad <br/> Pincode:382552 </a></li>
                </ul>
            </div>
        </div>
        <div className="copyright_container">
            <p>All rights received by <a href="https://www.linkedin.com/in/varun-salat-709a0a19a"target="_blank" rel="noreferrer">Varun Salat</a></p>
        </div>
    </footer>
  )
}

export default Footer
