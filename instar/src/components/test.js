import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Test.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function Test(props){
    const [res,setRes] = useState([])
    const sendRequest = async() => {
        const response = await axios.get('http://localhost:7070/login');
        console.log(response.data)
        setRes(response.data);
      }

    return(
        <div className = "container">
            <div className = "post">
            {
                res.map((val,idx) => (
                    <div key={idx}>
                        <h1>아이디: {val.id}</h1>
                        <p>글 내용: {val.pw}</p>
                    </div>
                ))
            }
            </div>
            <Button onClick = {sendRequest}>정보 불러오기</Button>
        </div>
    )
}

export default Test;
