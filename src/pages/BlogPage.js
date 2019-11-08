import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// axios
import axios from "axios";

import Card from '@material-ui/core/Card';

// Components
import { NavBar } from "../components/NavBar";

const IMG_URL = "https://media1.tenor.com/images/78ad02f84b6b2d2049984881605b5995/tenor.gif?itemid=9245965"

export default class BlogPage extends Component {

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
        getAPI(process.env.REACT_APP_API_URL + '/blogs')
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
                    this.state.isLoading ? LoadingImg(IMG_URL) : BlogPageContainer(this.state.response)
                }
            </div>
        )
    }
}

export async function getAPI(apiRoute) {
    let data;
    try {
        data = await axios.get((apiRoute)
            // , {
            //     auth: {
            //         username: process.env.REACT_APP_USERNAME,
            //         password: process.env.REACT_APP_PASSWORD
            //     }
            // }
        );
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
const NavBarLinks = [
    { title: "Home", route: "/" },
]
const BlogPageContainer = (data) => {
    return (
        <div>
            {NavBar(NavBarLinks, true)}
            <Grid container
                direction="column"
                justify="center"
                alignItems="center">
                <div style={{ maxWidth: '97%', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        data === undefined ? <h1>Back End Server is off</h1> :
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
                <PlusSign align="right" />
            </Grid>
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

function PlusSign() {
    return (
        <a href="/post" style={{ textAlign: 'slider-horizontal' }} >
            <Typography style={PlusSignStyle} variant="h2" color="white" > + </Typography>
        </a >
    )
}

const PlusSignStyle = {
    backgroundColor: 'pink',
    width: '80px',
    height: '70px',
    borderRadius: '300px',
    color: "white",
    margin: '10px',
    cursor: 'pointer'
}

