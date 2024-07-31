import React, { useState } from 'react';
import css from './headerInput.module.css';
import { Search } from 'react-f7-icons';
import { getDeviceByName } from 'components/service/getDeviceByName';
import { useNavigate } from 'react-router-dom';

const HeaderInput = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = event => {
    const value = event.target.value;

    if (value.length === 1 && value === ' ') {
      setInputValue('');
    } else {
      setInputValue(value);
    }
  };

  const handleSearch = event => {
    event.preventDefault();
    getDeviceByName(inputValue);

    navigate('/search');
  };

  return (
    <form onSubmit={handleSearch}>
      <label className={`${css.inputWrapper} ${inputValue ? css.active : ''}`}>
        <input
          className={css.headerInput}
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={css.headerInputBtn}>
          <Search size="25px" fill="white" className={css.searchIcon} />
        </button>
      </label>
    </form>
  );
};

export default HeaderInput;
