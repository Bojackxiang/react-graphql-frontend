import React, {useState} from 'react'

const Auth = () => {
    const [form, setForm] = useState({email: '', password: ''}); 
    const formSubmit = async (event) => {
        event.preventDefault()
        const requestBody = {
            query: `
                createUser(userInput: {email: "useremail", password: "111111"}){
                    email
                    password
                }
            `,
        }

        try {
            fetch('http://localhost:3005/graphql', {
                method: 'POST',
                body: JSON.stringify(requestBody), 
                headers: {
                    'Content-Type':'application/json'
                }
            }).then(resp => {console.log(resp)})
            
        } catch (error) {
            
        }
        
    }

    const inputChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    return (
        <div>
            <p>this is the auth page</p>
            <form onSubmit={formSubmit}>
                <input placeholder="email input" name="email" onChange={inputChange}/>
                <input placeholder="password input" name="password" onChange={inputChange}/>
                <button type="submit">submit</button>
            </form>
            
            
        </div>
    )
}

export default Auth;
