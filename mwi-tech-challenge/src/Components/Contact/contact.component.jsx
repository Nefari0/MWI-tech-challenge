import axios from 'axios'
import { useState } from 'react'
import FormInput from './Form/FormInput'
import TextEditor from './Form/TextEditor'
import { Message,Form } from './Form/FormInput.styles'
import { ContactPage } from './contact.styles'
import { BaseButton } from '../Styles/BaseButton/button.styles'
import { HeadingTwo } from '../Styles/HeadingTwo/heading-two.component'
import { HeadingOne } from '../HeadingOne/heading-one.component'

const Contact = ({isContact}) => {

        const [state,setState] = useState({
            firstName:'',
            lastName:'',
            title:'',
            email:'',
            message:''
        })

        const { email,title,firstName,lastName,message } = state;

    const inputHandler = (e) => {
        const {name,value} = e.target
        setState({...state,[name]:value})
    }

    const sendInfo = (e) => {
        e.preventDefault()
        axios.post(`/api/contacts/new`,{firstName,lastName,title,email,message})
    }

        return(
            <ContactPage>

                <HeadingOne
                    title={"Heading One"}
                    isContact={isContact}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </HeadingOne>

                <Form onSubmit={sendInfo} >
                    <HeadingTwo>Heading Two</HeadingTwo>

                    <FormInput
                        label='First Name'
                        name='firstName'
                        type='text'
                        required
                        onChange={inputHandler} 
                        value={firstName}
                    />

                    <FormInput
                        label='Last Name'
                        name='lastName'
                        type='text'
                        required
                        onChange={inputHandler} 
                        value={lastName}
                    />

                    <FormInput
                        label='Title'
                        name='title'
                        type='text'
                        required
                        onChange={inputHandler} 
                        value={title}
                    />

                    <FormInput
                        label='Email'
                        name='email'
                        type='text'
                        required
                        onChange={inputHandler} 
                        value={email}
                    />

                    <TextEditor
                        required
                        type='text'
                        onChange={inputHandler}
                        label='Message'
                        name="message"
                        value={message}
                    />

                    <BaseButton type="submit">Submit</BaseButton>
                
                </Form>

            </ContactPage>
        )
    
}

export default Contact