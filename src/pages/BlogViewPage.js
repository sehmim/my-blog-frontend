import React, { Component } from 'react'

import { useParams } from "react-router-dom";
import { getAPI, NavBar } from "../pages/Landingpage";
import { Card, Typography } from '@material-ui/core';
// export default function BlogViewPage() {

//     getAPI('http://localhost:1337/blogs' + id)

// }


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
        getAPI(`http://localhost:1337/blogs/${params.id}`)
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
                {NavBar("Back")}
                < Card style={cardBody} >
                    <Typography variant="h2" > {this.state.response.title} </Typography>
                    <hr></hr>
                    <Typography align="left" variant="caption" > {this.state.response.date.substring(0, 10)} </Typography>
                    <h3>{this.state.response.body}</h3>
                    <img style={IMG_STYLE} src={this.state.response.media_url}></img>
                </Card >
            </div >
        )
    }
}
const cardBody = {
    minWidth: '75vw',
    // maxWidth: '240px',
    border: '2px solid #888888',
    padding: '15px',
    boxShadow: '5px 10px #888888',
    margin: '20px',
}

const IMG_STYLE = {
    maxWidth: '300px'
}