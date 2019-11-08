import React, { Component } from 'react'

import { getAPI } from "./BlogPage";
import { Typography } from '@material-ui/core';
import { NavBar } from '../components/NavBar'


export default class BlogViewPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            response:
            {
                id: 0,
                date: "",
                title: "Title",
                body: "",
                created_at: ""
            }
        };
    };


    componentDidMount() {

        const { match: { params } } = this.props;
        getAPI(process.env.REACT_APP_API_URL + `/blogs/${params.id}`)
            .then(response => {
                this.setState({
                    response: response.data
                })
            })
    }

    render() {
        console.log(this.state.response)
        return (
            <div >
                {NavBar(NavBarLinks, false)}
                < div style={cardBody} >
                    <Typography variant="h2" > {this.state.response.title} </Typography>
                    <br></br>
                    <hr></hr>
                    <Typography align="left" variant="caption" > {this.state.response.created_at.substring(0, 10)} </Typography>
                    <br></br>
                    <br></br>
                    <Typography variant="body1" > {this.state.response.body} </Typography>
                    <br></br>
                    <br></br>
                    <img style={IMG_STYLE} src={this.state.response.media_url}></img>
                </div >
            </div >
        )
    }
}
const cardBody = {
    padding: '15px',
    margin: '20px',
}

const IMG_STYLE = {
    maxWidth: '300px'
}

const NavBarLinks = [
    { title: "Back", route: "/blogs" }
]