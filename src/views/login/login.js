import React, {useState} from 'react';
import './login.css';
import 'font-awesome/css/font-awesome.min.css';
import HttpService from '../services/http';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = function(event){
        event.preventDefault();
        HttpService.axios.post('login', {email: email, password: password}).then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="limiter">
		<div className="container-login100">
        <div className="wrap-login100">
        <form className="login100-form validate-form" onSubmit={login}>
			<span className="login100-form-title">
				Login
			</span>

			<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
				<input className="input100" type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
				<span className="focus-input100"></span>
				<span className="symbol-input100">
					<i className="fa fa-envelope" aria-hidden="true"></i>
				</span>
			</div>

			<div className="wrap-input100 validate-input" data-validate = "Password is required">
				<input className="input100" type="password" name="pass" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
				<span className="focus-input100"></span>
				<span className="symbol-input100">
					<i className="fa fa-lock" aria-hidden="true"></i>
				</span>
			</div>
					
			<div className="container-login100-form-btn">
				<button type="submit" className="login100-form-btn">
					Login
				</button>
			</div>

			<div className="text-center p-t-12">
				<span className="txt1">
					Forgot
				</span>
				<a className="txt2" href="#/forgot_password">
					Username / Password?
				</a>
			</div>

			<div className="text-center p-t-136">
				<a className="txt2" href="#/cadastrat">
					Create your Account
					<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
				</a>
			</div>
		</form>
		</div>
        </div>
    </div>
    )
}

export default Login;