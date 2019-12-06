import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <div align="center" className="loading">
    <Spinner animation="border" variant="secondary" />
  </div>
);
export default Loader;
