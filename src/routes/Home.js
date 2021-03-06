import React, { useState } from "react";
import Header from "../components/Header"
import Popup from '../components/Popup'
import Listdisease from "../components/Listdisease"
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from '@mui/material/Container';
import axios from 'axios'
import Defaultimage from "../images/Default.png";


const Wrapper = styled.div`
  height: auto;
  width: 70%;
  margin:0 auto;
  border-radius: 0px;
  margin-bottom : 50px;
`;

export default function Home() { 
  const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
  const [fileImage, setFileImage] = useState(Defaultimage);
  const [postfile, setPostfile] = useState("");
  const Imageurl = new FormData();
  const navigate = useNavigate();
  
  const saveFileImage  = (event) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
    setPostfile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage(Defaultimage);
    setPostfile(null);
  };

  const onTransmit = (event) => {
    event.preventDefault();

    console.log(postfile);
    Imageurl.append('media', postfile);

    if(fileImage === Defaultimage){
      setPopup({open: true, title: "에러!", message: "사진을 넣어 주세요!"});
    }
    else {
      postData();
    }
  }

  const postData = async () => {
    const postUrl = "/condition/classify";
    await axios.post(postUrl, Imageurl, {
      headers:{
          'Content-Type' : 'multipart/form-data'
        }
    })
    .then((response) => {
      console.log(response.data);
      setPopup({open: true, title: "성공!", message: "증상이 판별 되었습니다!", callback: function(){
        navigate("/Judgment",{ state : { imageurl : fileImage, discriminate : response.data } });
      }});
    }).catch(function(error){
        console.log(error);
    });
  }

    return (
      <div>
          <Popup open = {popup.open} setPopup = {setPopup} title = {popup.title} message = {popup.message} callback = {popup.callback}/>

          <Header />
          <br /><br /><br />
          <Wrapper>
          <Container maxWidth={"xl"}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Listdisease/>
              </Grid>

              <Grid item xs={6} >
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label style={{fontSize: "30px"}}>진단받고 싶은 사진을 선택하세요</Form.Label>
                  <Grid container spacing={2}>
                    <Grid item xs={9} >
                      <Form.Control type="file" size="lg" name="img" accept="image/*" onChange={saveFileImage}/>
                    </Grid>   
                    <Grid item xs={3} >
                      <Button
                        style={{fontSize: "20px", textTransform: "none", padding: "10px 20px" }}
                        variant="secondary" 
                        onClick={() => deleteFileImage()}>
                        삭제
                      </Button>
                    </Grid>     
                  </Grid>
                </Form.Group>
                <Box width="100%" height="80%" >
                  <img className="diseaseImage" alt="diseaseImage" src={fileImage} width="100%" height="100%"/>    
                </Box>                          
                <br/><br/>
                
                <Grid item xs={12} align='center'>
                  <Button 
                    style={{fontSize: "20px", textTransform: "none", padding: "20px 40px" }} 
                    variant="success"
                    onClick={onTransmit}>
                    진단하기
                  </Button>     
                </Grid>         
                
              </Grid>
            </Grid> 
          </Container>
          </Wrapper>
      </div>
    );
  }
  