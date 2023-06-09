import PropTypes from 'prop-types';

const HamBurger = ({active,setActive}) => {
  return (
    <div onClick={()=>setActive(!active)} className={active?'burger_container active':'burger_container'}>
            <i></i>
            <i></i>
            <i></i>
        </div>
  )
}
HamBurger.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default HamBurger
