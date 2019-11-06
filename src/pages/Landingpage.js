import React, { Component } from 'react'
import { NavBar } from "../pages/BlogPage";
export default class LandingPage extends Component {

    render() {
        const NavBarItems = [
            { title: "Blogs", route: "/blogs" },
            // { title: "Experience", route: "/blogs" },
            // { title: "Projects", route: "/blogs" },
        ]
        return (
            <div>
                {NavBar(NavBarItems, true)}
            </div>
        )
    }
}
