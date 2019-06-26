import React, { Component } from 'react';
import {Link ,Redirect} from 'react-router-dom';


class Login extends Component {

    state = {
        email:'',
        password:'',
        redirect: false
    }

    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleInputPassword = (event) => {
        this.setState({password:event.target.value})
    }

    

    submitForm = (e) =>{
      if(this.state.email=="hruday@gmail.com" && this.state.password=="hruday123"){
       this.setState({
        redirect: true
       })
        console.log("this is matching email and password")
      }
      else{
          console.log("this is not matching email and password")
      }
        e.preventDefault();
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/dashboard' />
        }
      }

    render() {
        
        
        return (
            <div className="rl_container">
                {this.renderRedirect()}
                <form onSubmit={this.submitForm}>
                    <h2>Log in here</h2>

                    <div className="form_element">
                        <input 
                            type="email"
                            placeholder="Enter your mail"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>

                    <div className="form_element">
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>

                    <button type="submit">Log in</button>

                </form>
            </div>
        );
    }
}



export default Login;

