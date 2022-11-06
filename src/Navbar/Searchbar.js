import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SearchbarSlashSVG } from "../svgs";

const SearchBox = styled.div`
  height: 38px;
  border: 1px solid #57606a;
  background-color: rgba(46, 55, 74, 0.82);
  border-radius: 6px;
  overflow: hidden;
  margin-right: 16px;
  display: flex;
  align-items: center;
  width: 240px;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  outline: none;
  background: none;
  border: none;
  height: 100%;
  width: 100%;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #8c959f;
  }
  :-ms-input-placeholder {
    color: #8c959f;
  }
`;

const SearchBar = () => {
  const inputRef = useRef();

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "/" && document.activeElement != inputRef.current) {
        e.preventDefault();
        inputRef.current.focus();
      }
    });
  }, [inputRef]);

  return (
    <SearchBox>
      <SearchInput ref={inputRef} type="text" placeholder="Search GitHub" />
      {SearchbarSlashSVG}
    </SearchBox>
  );
};

export default SearchBar;
