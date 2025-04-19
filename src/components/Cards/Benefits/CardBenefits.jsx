import PropTypes from 'prop-types'
import styles from './CardBenefits.module.css'

const CardBenefits = ({ title, description }) => {
  CardBenefits.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  return (
    <div className={styles.cardBenefits}>
      <h3>
        {title}
      </h3>
      <p>
        {description}
      </p>
    </div>
  )
}

export default CardBenefits;