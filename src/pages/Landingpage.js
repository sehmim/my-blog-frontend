import React, { Component } from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

import { Typography, Card } from '@material-ui/core';

//assets
// import POOP from "";

export default class LandingPage extends Component {

    render() {
        const NavBarItems = [
            { title: "Blogs", route: "/blogs" }
        ]
        return (
            <div>
                {NavBar(NavBarItems, false)}
                {landingPageScope()}
                {Footer()}
            </div>
        )
    }
}

const IMG = "https://www.seoclerk.com/pics/3281-1.jpg"

const landingPageScope = () => {
    return (
        <Card style={landingWrap} >
            <div style={wrapperEach}>
                <br></br>
                <Typography variant="h2" > Sehmim Al </Typography>
                <br></br>                <br></br>
                <Typography variant="body2" > {BODYTEXT1} </Typography>
                <Typography variant="body2" > {BODYTEXT2} </Typography>
                <Typography variant="body2" > {BODYTEXT3} </Typography>
                <hr></hr>
                <Typography variant="body2" >
                    Check out my resume <a href="poop">here</a>
                </Typography>
                <hr></hr>
                <Typography variant="caption" >
                    <b>Currently:</b>
                    <ul>
                        <li>
                            Unemployed :( Seeking Summer 2020 coop
                        </li>
                    </ul>
                </Typography>
                <Typography variant="caption" >
                    <b>Previously:</b>
                    <ul>
                        <li>
                            Full-stack Dev Co-op @ Scotiabank (Jan - April 2019)
                        </li>
                        <li>
                            Platform Engineer Co-op @ Scotiabank (May - Aug 2019)
                        </li>
                    </ul>
                </Typography>

            </div>
            <div style={wrapperEach2}>
                <img style={{ width: '25vw', borderRadius: '50%' }} src={IMG}></img>
            </div>
        </Card >
    )
}

// STYLES //
const landingWrap = {
    margin: '2.5%',
    padding: '2.5%',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
}

const wrapperEach = {
    padding: '3vw',
    textAlign: 'left',
    display: 'flex',
    flexDirection: "column",
    minWidth: '40vw',
}
const wrapperEach2 = {
    padding: '3vw',
}

const BODYTEXT1 = "Hello!! I am a 3rd year student in York University, Toronto, Canada."
const BODYTEXT2 = "I like building websites and LOVE re-factoring code to make it look pretty."
const BODYTEXT3 = "In my free time I play guitar in a metal band and do mini tours around Ontario"



