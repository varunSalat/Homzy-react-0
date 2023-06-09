import './clients.css'
import img1 from "./imgs/prologis.png"
import img2 from "./imgs/tower.png"
import img3 from "./imgs/equinix.png"
import img4 from "./imgs/realty.png"
const OurClients = () => {
  return (
    <section className="section">
        <div className="client_main_container flex">
            <figure className="client_container">
                <img src={img1} alt="prologis"/>
            </figure>
            <figure className="client_container">
                <img src={img2} alt="tower"/>
            </figure>
            <figure className="client_container">
                <img src={img3} alt="equinix"/>
            </figure>
            <figure className="client_container">
                <img src={img4} alt="realty"/>
            </figure>
        </div>
    
    </section>
  )
}

export default OurClients
