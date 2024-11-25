import SearchBar from "../../components/SearchBar"; //index.jsx 생략: bundler option
import SongList from "../../components/SongList";
import { useState } from "react";

function SearchPage() {
  return (
    <div>
      <SearchBar />
      <SongList />
    </div>
  );
}

export default SearchPage;
