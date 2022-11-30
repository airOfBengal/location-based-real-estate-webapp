import React, { useState } from 'react'
import { Button, Typography, AppBar, Toolbar } from '@mui/material';

import city from './Assets/city.jpg';

function Home() {
    const [btnColor, setBtnColor] = useState("error")

    return (
        <>
            <div style={{ position: "relative" }}>
                <img src={city} style={{ width: "100%", height: "92vh" }} />
                <div style={{ position: "absolute", zIndex: "100", top: "100px", left: "20px", textAlign: "center", }}>
                    <Typography variant='h1' sx={{ color: "white", fontWeight: "bolder", }}>
                        FIND YOUR <span style={{ color: "green" }}>NEXT PROPERTY</span> ON THE LBREP WEBSITE
                    </Typography>
                    <Button variant='contained' sx={{ fontSize: "3.5rem", borderRadius: "15px", backgroundColor: "green", marginTop: "2rem", boxShadow: "3px 3px 3px white", }}>
                        SEE ALL PROPERTIES
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home