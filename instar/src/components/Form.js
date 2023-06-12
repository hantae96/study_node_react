import React, { useEffect, useState } from "react";
import axios from 'axios';

function Form(){
    let [id,setId] = useState('');
    let [pw,setPw] = useState('');

    const postUser =async function postUser(){
            await axios.post('http://localhost:7070/login',{
                id : id,
                pw : pw
            }).then(function(response){
                console.log("성공");
            }).catch(function(error){
                console.log("실패");
            })

    }
    
    
    return(
        <div>
            <form>
                <label>아이디 입력 :
                <input type = "text" name = "id" onChange={(e)=>{setId(e.target.value)}}></input>
                </label>
                <label>비밀번호 입력 : 
                <input type = "text" name = "pw" onChange={(e)=>{setPw(e.target.value)}}></input>
                </label>
                <button type="submit" onClick={postUser}> 사용자 정보 제출 </button>
            </form>
        </div>
    )
}

export default Form;