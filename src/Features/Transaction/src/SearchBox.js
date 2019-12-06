import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBox = ({handleSearch}) => {
  return (
    <>
      <InputGroup size="lg" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text
            aria-describedby="inputGroup-sizing-sm"
            style={{ backgroundColor: "#fff", border: "none" }}
          >
            <span>&#x1F50E;</span>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={handleSearch}
          style={{ border: "none" }}
          placeholder="Search"
        />
      </InputGroup>
    </>
  );
};
export default SearchBox;
