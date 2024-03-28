import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <label htmlFor="">Search Serial Number</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Search;
