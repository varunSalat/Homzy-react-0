import preloader from "../../assets/imgs/building.gif"
const Preloader = () => {
  return (
    <div className="preloader_main_container">
        <figure className="preloader_img_container"><img src={preloader} alt="preloader" /></figure>
    </div>
  )
}

export default Preloader
