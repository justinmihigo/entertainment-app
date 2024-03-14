import { Component } from "react";
import "./authentication.css";

class Signup extends Component {
    constructor(props:object) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                <div className="card">
                    <form>
                        <label>Email address</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" />
                        <label>Confirm Password</label>
                        <input type="password" />
                        <button type="submit">Sign Up</button>
                        <div>
                            <p>Already have an account? <span className='red'>Login</span></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;