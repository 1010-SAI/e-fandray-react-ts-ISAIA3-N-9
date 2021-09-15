import React, {useState} from 'react'
import Message from '../message/MessageComponent'


const users = [
	{
		"email": "user1@gmail.com",
		"pseudo": "user1",
		"password": "0123456789"
	},
	{
		"email": "maitre@gmail.com",
		"pseudo": "rapa",
		"password": "master"
	},
	{
		"email": "tendry@gmail.com",
		"pseudo": "tendry",
		"password": "tendry"
	}
]

const Login = () => {

const [email, setEmail] =useState('') 
const [password, setPassword] = useState('')
const [pseudo, setPseudo] = useState('') 
const [connected, setConnected] = useState(false) 
const handleEmailChange = (e:any) => {
	//console.log("mande")
	setEmail(e.target.value)
}

const handlePasswordChange = (e:any) => {
	setPassword(e.target.value)
}

const login = (e:any) => {
	e.preventDefault()
	users.map(function(user) {
		if(user.email === email && user.password === password) {
			setConnected(true)
			setPseudo(user.pseudo)
			console.log("connecter lesy a")
			return
		}
	})
}


	if(connected) {
		return(
			<Message email={email} pseudo={pseudo}/>
		)
	} else {
		return(
		<div className="log">
		<div className="formContent">
		
			<form className="form-signin">
  				
  				<h1 className="h3 mb-3 font-weight-normal" id="titre">connectez vous à e-Fandray</h1>
  				<input type="email" id="inputEmail"  value={email}  onChange={handleEmailChange} className="form-control" placeholder="Email ... " />
  				<input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Mot de passe ..." required/>
  				<div className="checkbox mb-3">
    				<label>
      					<input type="checkbox" value="remember-me"/> Se souvenir de moi
    				</label>
  				</div>
  				<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={login}  >Se connecter</button>
  					<p className="mt-5 mb-3 text-muted">&copy; copyright 2021</p>
			</form>
		</div>
		</div>
	)
	}
}

export default Login