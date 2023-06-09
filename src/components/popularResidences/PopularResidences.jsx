import SectionHeader from "../generalComponents/SectionHeader"
import SwiperSlider from "./ResidenciesSlider"
import "./residence_slider.css"

const PopularResidences = () => {
  return (
    <section className="section" id="popular_residence_section">
        <SectionHeader mainHeader={'Best Choices'} secondaryHeader={'Popular Residencies'} />
        <SwiperSlider/>
    </section>
  )
}

export default PopularResidences
