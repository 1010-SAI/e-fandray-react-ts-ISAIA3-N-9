import React, {useState} from 'react'


interface Iprops {
	pseudo: string
	email: string
}

const users = [
	{
		"email": "tahiana@gmail.com",
		"pseudo": "ratah",
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
let tableau:any = [''];


const Message:React.FC<Iprops> = ({email, pseudo}) => {

	const [textMessage, setTextMessage] = useState('')
	const [allMessage, setAllMessage] = useState([' '])
	


	const handleClickSend = (e:any) => {
		e.preventDefault()
		console.log(tableau)
		tableau.push(textMessage)
		setAllMessage(tableau)
		setTextMessage(" ")
	}

	const handleMessageChange = (e:any) => {
		setTextMessage(e.target.value)
	}



	return(
		<div>
		<fieldset className="case">
		<div>
			<div>
				<input className="other" type="text" placeholder="Entrer le pseudo du destinataire" />
			</div>

			<hr/>
			<div>
				{
					allMessage.map(function(message){
						return <p id="mess" key={message}>  {message}</p> 
						
					})
				}
			
			</div>
		</div>
		</fieldset>
			
		<footer>
				<input type="text" placeholder="Entrer votre message"  value={textMessage} onChange={handleMessageChange}  />	
				<button type="submit" className="btn btn-success" onClick={handleClickSend}> Envoyer </button>
		</footer>		
			</div>
			
	)

}

export default Message
