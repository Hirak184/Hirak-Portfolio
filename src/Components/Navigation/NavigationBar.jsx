import React from "react";
import NavigationBarStyled from "./NavigationBar.style";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";


export const NavigationBar = ({setcolor}) => {
    return(
        <NavigationBarStyled>
                    
            <AppBar position="static">
<Toolbar className="navbar">
    <div className="icon_name">
    <Typography className="name" variant="h6">
           HIRAK
    </Typography>
    </div>
    <div className="contents">
    <NavLink className="links" to="/" onClick={() => setcolor("#08171E")}> <Typography variant="h6">Home</Typography></NavLink>
    <NavLink  className="links" to="/resume" onClick={() => setcolor("#000000")} ><Typography variant="h6">Resume</Typography></NavLink>
    <NavLink  className="links" to="/work" onClick={() => setcolor("#3E5167")}><Typography variant="h6">Work</Typography></NavLink>
    <NavLink  className="links" to="/contact" onClick={() => setcolor("#CE8054")}><Typography variant="h6">Contact</Typography></NavLink>
    </div>
</Toolbar>
</AppBar>
        </NavigationBarStyled>
    );
}