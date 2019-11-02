import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { config } from "dotenv";

// axios
import axios from "axios";

import Card from '@material-ui/core/Card';

const IMG_URL = "https://media1.tenor.com/images/78ad02f84b6b2d2049984881605b5995/tenor.gif?itemid=9245965"

export default class Landingpage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            response: [
                {
                    id: 0,
                    date: "",
                    title: "Title",
                    body: "",
                    created_at: ""
                }
            ]
        };
    };

    componentDidMount() {
        getAPI(process.env.REACT_APP_API_URL)
            .then(response => {
                this.setState({
                    isLoading: false,
                    response: response.data
                })
            })
    }

    render() {

        return (
            <div>
                {
                    this.state.isLoading ? LoadingImg(IMG_URL) : LandingPageContainer(this.state.response)
                }
            </div>
        )
    }
}

export async function getAPI(apiRoute) {
    let data;
    try {
        data = await axios.get(apiRoute);
    } catch (error) {
        data = error
    }
    return data;
}
const LoadingImg = (IMG_URL) => {
    return (
        <div>
            <img src={IMG_URL} ></img>
        </div>
    )
}

const LandingPageContainer = (data) => {
    return (
        <div>
            {NavBar("Blog")}
            <div style={{ maxWidth: '97%', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    data.map((item, index) => {
                        {
                            return (
                                <a href={'/blogs/' + item.id} >
                                    <MyCard key={index} item={item} />
                                </a>
                            )
                        }
                    })
                }

            </div>

        </div>
    )
}

export const NavBar = (title) => {
    return (
        <div >
            <AppBar style={{ padding: '20px', backgroundColor: 'pink', fontWeight: 700, color: 'white', size: '100px' }} position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h2" >
                        <a style={{ color: 'white' }} href="/" >{title}</a>
                    </Typography>
                    <span>
                        {/* <SearchIcon /> */}
                        <InputBase
                            style={{ color: 'white', fontSize: '30px', border: '0' }}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const MyCard = (props) => {
    return (
        < Card style={cardBody} >
            <Typography align="left" variant="h5" > {props.item.title} </Typography>
            <hr></hr>
            <br></br>
            <img style={{ width: '100%' }} src={props.item.media_url}></img>
        </Card >
    )
}

const cardBody = {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: '20vw',
    maxWidth: '240px',
    height: '250px',
    border: '2px solid #888888',
    padding: '15px',
    boxShadow: '5px 10px #888888',
    margin: '20px',
}

function parseDate(str) {
    return str.substring(0, 10);
}