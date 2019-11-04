import React, { Component } from 'react'
import { NavBar } from '../pages/BlogPage'
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


import axios from "axios";

const INITIAL_STATE = {
    password: '',
    title: '',
    media_url: '',
    media: '',
    body: '',
};
export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        // const promtVal = prompt("Please Enter The Right Password or Email me to get it");
        // const { password } = this.state;
        // password === 'poop6969' ?
        PostAPI(this.state, '/blogs').then((res) => {
            console.log(res)
        })
        // :
        // prompt("Please Enter The Right Password or Email me to get it")
        event.preventDefault();
    };
    reDir = () => {
        return (<Redirect to="/" />)
    }

    render() {

        return (
            <div>
                {NavBar(NavBarLinks, true)}

                <form onSubmit={this.onSubmit} style={FormStyle}>
                    <Typography variant="body1" >
                        Ps You need my password to post here. Email me if you want to contribute
                    </Typography>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            autoComplete="title"
                            autoFocus
                            onChange={this.onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="body"
                            label="Body"
                            name="body"
                            autoComplete="body"
                            autoFocus
                            onChange={this.onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="media_url"
                            label="Media URL"
                            name="media_url"
                            autoComplete="media_url"
                            autoFocus
                            onChange={this.onChange}
                        />
                        {/* OR
                        <Button placeholder="media" type="file" onChange={this.onChange} name="media" variant="contained" component="span">
                            Upload
                        </Button> */}
                        <Button onClick={this.reDir} color="primary" type="submit">POST</Button>
                    </Grid>
                </form>
            </div>
        );
    }
}

const FormStyle = {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: '50vw',
    border: '2px solid #888888',
    boxShadow: '5px 10px #888888',
    margin: '20px',
    padding: '2rem',
}


const PostAPI = async (data, endpoint) => {
    let res;
    try {
        res = await axios.post(process.env.REACT_APP_API_URL + endpoint, data);
    } catch (error) {
        res = error
    }
    return res;
}

const NavBarLinks = [
    { title: "Back", route: "/blogs" }
]