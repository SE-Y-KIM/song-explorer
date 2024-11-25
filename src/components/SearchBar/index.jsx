import { useRef } from "react";
import "./index.css";
import { useSearchTextStore } from "../../stores/useSearchTextStore";

function SearchBar({ onSearch }) {
  const inputRef =
    useRef(); /*특정 돔요소에 대한 레퍼런스 컨트롤하고 싶을 때 사용하는 훅?*/
  const { setSearchText } = useSearchTextStore();

  return (
    <div className="SearchBar">
      <input ref={inputRef} className="SearchBar__input" />
      <button
        className="SearchBar__button"
        onClick={() => {
          setSearchText(inputRef.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
