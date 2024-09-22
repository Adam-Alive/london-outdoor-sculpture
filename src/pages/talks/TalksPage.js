import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/TalksPage.module.css";

import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";


const TalksPage = () => {
  
  
  
  return (   
    <Table striped bordered>
  <tbody>
    <tr>
      <td>Title</td>
      <td></td>      
    </tr>
    <tr>
      <td>Speaker</td>
      <td></td>
      
    </tr>
    <tr>
      <td>Date</td>
      <td></td>
      
    </tr>
    <tr>
      <td>Time</td>
      <td></td>
      
    </tr>
    <tr>
      <td>Summary</td>
      <td></td>
      
    </tr>
  </tbody>
</Table>

  )
}

export default TalksPage