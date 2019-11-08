import React, { Component } from 'react'

import { Typography, Grid, AppBar, Toolbar, InputBase } from '@material-ui/core';

const NavBar = (navLinks, isSearch) => {
    return (
        <div >
            <AppBar style={{ padding: '20px', backgroundColor: 'pink', fontWeight: 700, color: 'white', size: '100px' }} position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        {
                            navLinks.map((item, index) => {
                                return (
                                    <Typography variant="h4" >
                                        |<a style={{ color: 'white', padding: '10px' }} href={item.route} >{item.title}</a>|
                                    </Typography>
                                )
                            })
                        }
                    </Toolbar>
                    {
                        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {/* {
                                navLinks.map((item, index) => {
                                    return (
                                        <Typography variant="h4" >
                                            <a style={{ color: 'white', padding: '10px' }} href={item.route} >{item.title}</a>
                                        </Typography>
                                    )
                                })
                            } */}
                            {
                                isSearch ? <span>
                                    {/* <SearchIcon /> */}
                                    <InputBase
                                        style={{ color: 'white', fontSize: '20px', border: '0' }}
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </span> : null
                            }
                        </Toolbar>
                    }

                </Toolbar>
            </AppBar>
        </div>
    )
}


export { NavBar }