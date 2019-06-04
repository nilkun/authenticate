import React, { Component } from "react";

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "", 
            profileImageUrl: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(() => {
            console.log("logged in...")
        })
    }

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp } = this.props;
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                        <h2>{heading}</h2>
                        <label htmlFor="email">Email:</label>
                        <input 
                            onChange={this.handleChange} 
                            value={email} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            id="email"
                        />
                    
                        <label htmlFor="password">password:</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="password" 
                            name="password" 
                            id="password"
                        />
                    
                        { signUp && (
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input onChange={this.handleChange} 
                                    value={username} 
                                    className="form-control" 
                                    type="text" 
                                    name="username" 
                                    id="username"
                                />                            
                                
                                <label htmlFor="image-url">image-url:</label>
                                <input onChange={this.handleChange} 
                                    value={profileImageUrl} 
                                    className="form-control" 
                                    type="text" 
                                    name="profileImageUrl" 
                                    id="image-url"
                                />
                            </div>
                        )}

                        <button className="btn btn-primary btn-block btn-lg" type="submit">
                            {buttonText}
                        </button>
                    
</form>
                    </div>
                </div>
            </div>
        )
    }
}