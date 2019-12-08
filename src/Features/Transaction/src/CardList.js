import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { isEmpty, convertToRp, capitalize } from "commons/helper";
import dayjs from "dayjs";

const CardList = ({ listTransactions }) => {
  return (
    <>
      {!isEmpty(listTransactions) &&
        listTransactions.map((item, i) => (
          <Card.Body key={i} className="cardborder">
            <Row>
              <Col md={8} xs={8}>
                <strong>
                  {capitalize(item.sender_bank)} &#x2192;{" "}
                  {capitalize(item.beneficiary_bank)}
                </strong>
                <br />
                <span>{item.beneficiary_name}</span>
                <br />
                <span>{convertToRp(item.amount)}</span>
                <span> &#8226;</span>
                <span> {dayjs(item.completed_at).format("DD MMMM YYYY")}</span>
              </Col>
              <Col md={4} xs={4}>
                <Button
                  style={{ float: "right", marginTop: "1em", color:'white' }}
                  variant={
                    item.status === "SUCCESS"
                      ? "success"
                      : item.status === "PENDING"
                      ? "warning"
                      : "danger"
                  }
                >
                  {item.status}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        ))}
    </>
  );
};
export default CardList;
