import styles from '../../Cards/Wellness/CardWellness.module.css'
import PropTypes from 'prop-types';

const Card = ({ title, description, isOpen, onToggle }) => {
  return (
    <div onClick={onToggle} className={styles.card}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <div className={`${styles.descriptionWrapper} ${isOpen ? styles.show : ''}`}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func
};

export default Card;
