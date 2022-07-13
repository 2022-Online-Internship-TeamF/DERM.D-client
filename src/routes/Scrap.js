import React, { useState } from "react";
import Header from "../components/Header"
import Card from 'react-bootstrap/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Scrapitem = styled.div`
    height: auto;
    width: 70%;
    margin:0 auto;
    border-radius: 0px;
    margin-bottom : 50px;
`;

const cardData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: '여드름',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      link : '/login',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Fern',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      link : '/',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      link : '/',
    },
  ];

export default function Scrap(){
    return (
        <>
            <div>
                <Header />
                <br /><br /><br /><br /><br />
                <Scrapitem>
                    <Container maxWidth={"false"}>
                        <Typography variant="h2" gutterBottom component="div" align="left" style={{ textDecoration: 'none', color:'#168d63' }}>
                                스크랩 기록
                        </Typography>
                        <br />
                        <Grid container spacing={8}>
                            {cardData.map((data) => (
                                <Grid item xl={3} lg={6} sm={12}>
                                    <Link to={data.link} style={{ textDecoration: 'none', color:'black'}}>
                                    <Card border='dark'>
                                        <Card.Img variant="top" src={data.img}/>
                                        <Card.Body>
                                            <Card.Title align='center' style={{ fontSize:'30px'}}>{data.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Scrapitem>
            </div>
        </>
    );
}