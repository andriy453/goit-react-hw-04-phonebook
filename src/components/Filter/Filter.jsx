import PropTypes from 'prop-types';
import css from  '../../components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p className={css.filter_text}>Find contacts by name</p>
      <label className="Filter_Todo">
        <input
          type="text"
          className={css.filter_inp}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
