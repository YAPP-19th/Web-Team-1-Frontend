import React, { useState, useCallback } from 'react';
import './index.scss';
import searchIcon from '@src/assets/images/search.svg';

export interface SearchBarProps {
  placeholder: string;
  onSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSubmit }) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  const handleEnter = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }, []);

  return (
    <section className="searchContainer" role="form">
      <input
        className="searchInput"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
      <div
        className="searchButton"
        role="button"
        tabIndex={0}
        onClick={onSubmit}
        onKeyPress={onSubmit}
      >
        <img src={searchIcon} alt="searchIcon" />
      </div>
    </section>
  );
};

export default SearchBar;
