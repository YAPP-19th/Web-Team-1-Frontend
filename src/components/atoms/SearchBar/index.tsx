import React, { useState, useCallback } from 'react';
import searchIcon from '@src/assets/images/search.svg';
import './style.scss';

export interface SearchBarProps {
  placeholder: string;
  onSubmit: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSubmit }) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(keyword);
    }
  };

  return (
    <section className="search" role="form">
      <input
        className="search-input"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
      <div
        className="search-button"
        role="button"
        tabIndex={0}
        onClick={() => onSubmit(keyword)}
        onKeyPress={() => onSubmit(keyword)}
      >
        <img src={searchIcon} alt="searchIcon" />
      </div>
    </section>
  );
};

export default SearchBar;
