
import PropTypes from 'prop-types';

const ResidenceSlide = ({item}) => {
  return (
    <>
          <figure className="res_slide_figure">
            <img src={item.image} alt="name" loading='lazy' />
          </figure>
          <article className="res_slide_dis">
            <p className="res_slide_price"><span className="dollar_sign">$</span> {item.price}</p>
            <h6>{item.name}</h6>
            <p className="secondary_res_slide_dis">{item.detail}</p>
          </article>
        </>
  )
}

ResidenceSlide.propTypes={
  item:PropTypes.object.isRequired
}

export default ResidenceSlide
