import PropTypes from 'prop-types'

const SectionHeader = ({mainHeader,secondaryHeader}) => {
  return (
    <div className="sec_header_container">
      <h3>{mainHeader}</h3>
      <h4>{secondaryHeader}</h4>
    </div>
  )
}

SectionHeader.propTypes={
    mainHeader:PropTypes.string.isRequired,
    secondaryHeader:PropTypes.string.isRequired
}

export default SectionHeader
