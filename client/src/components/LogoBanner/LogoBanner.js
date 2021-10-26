import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styles from "./LogoBanner.module.css";
import image4 from "./JD_Image.png";

function LogoContain() {
  return (
    <Col
      sm={12}
      className="d-flex justify-content-center"
      className={styles["bannerCol"]}
    >
      <Image className={styles["bannerImg"]} src={image4} thumbnail />
    </Col>
  );
}

export default LogoContain;
