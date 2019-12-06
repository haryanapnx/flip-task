import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { URL } from "commons/config";
import axios from "axios";
import CardList from "./src/CardList";
import SearchBox from "./src/SearchBox";
import Skeleton from "react-loading-skeleton";

const Transaction = () => {
  const [listTransactions, setTransactions] = useState([]);
  const [transactionDatas, setTransactionDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(URL);
      let toArray = Object.keys(result.data).map(item => result.data[item]);
      setTransactionDatas(toArray);
      setTransactions(toArray);
    } catch (error) {
      alert("Maaf sedang terjadi masalah. Refresh lagi halaman ini 🙏");
    }
    setLoading(false);
  };

  const handleSearch = e => {
    const { value } = e.target;
    let findName = transactionDatas.filter(({ beneficiary_name }) => {
      return beneficiary_name.toLowerCase().match(value.toLowerCase());
    });
    setTransactions(findName);
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <header className="header" />
        <Card style={{ backgroundColor: "#f7f9fa" }}>
          <Card.Body>
            <SearchBox handleSearch={handleSearch} />
            {loading && <Skeleton height={130} count={5} />}
            <CardList listTransactions={listTransactions} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default Transaction;
