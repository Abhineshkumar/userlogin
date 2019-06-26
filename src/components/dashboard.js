import React, { Component } from 'react';
import JSON from '../db.json'
import User from './user.js';


class Dashboard extends Component {
    
      state={
         user:JSON
      }

    render() {
        console.log(this.state.user)
        return (
            <div>
                <h1 align="center" color="#FF0000">All The Details of Dashboard</h1>
                <User user={this.state.user}/>
            </div>
        );
    }
}

export default Dashboard;