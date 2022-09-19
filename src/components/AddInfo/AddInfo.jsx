import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AddInfo.module.css';

const AddInfo = ({ id }) => {
    return (
      <>
        <p>Add info</p>
        <ul className={styles.AddInfoList}>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </>
    );
};
  
export default AddInfo;
  
AddInfo.propTypes = {
    id: PropTypes.string.isRequired,
};