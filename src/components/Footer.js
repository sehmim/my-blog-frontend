import React, { Component } from 'react'

import { Typography, Grid, AppBar, Toolbar, InputBase } from '@material-ui/core';

const Footer = (navLinks, isSearch) => {
    return (
        <div >
            <AppBar style={{ padding: '10px', backgroundColor: 'pink', fontWeight: 400, color: 'white', size: '60px' }} position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="http://brittanyrupphomes.com/wp-content/uploads/2019/04/social-linkedin-circle-512.png" style={{ margin: '0px 20px 0px 20px', width: '50px' }}></img>
                    <img src="https://image.flaticon.com/icons/svg/25/25231.svg" style={{ margin: '0px 20px 0px 20px', width: '50px' }}></img>
                    <img src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/soundcloud-512.png" style={{ margin: '0px 20px 0px 20px', width: '50px' }}></img>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export { Footer }