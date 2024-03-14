import {Component} from "react";
import "./authentication.css";
class Login extends Component {

    constructor(props: object) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
        render(){
            return (
                <div className="container">
                    <h1>Login</h1>
                    <div className="card">
                        <form>
                            <label>Email address</label>
                            <input type="text" />
                            <label>Password</label>
                            <input type="password" />
                            <button type="submit">Login into your account</button>
                            <div><p>Don't have an account <span className='red'>Signup</span></p></div>
                        </form>
                    </div>
                </div>
            );
        }
    
}
export default Login;