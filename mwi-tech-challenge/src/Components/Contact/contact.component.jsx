import axios from 'axios'
import { Component } from 'react'
import FormInput from './Form/FormInput'
import { Message,Form } from './Form/FormInput.styles'
import { ContactPage } from './contact.styles'
import { BaseButton } from '../Styles/BaseButton/button.styles'
import { HeadingTwo } from '../Styles/HeadingTwo/heading-two.component'

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            firstName:'',
            lastName:'',
            title:'',
            email:'',
            message:''
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.sendInfo = this.sendInfo.bind(this)
    }

    inputHandler = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    sendInfo = (e) => {
        e.preventDefault()
        const { firstName,lastName,title,email,message } = this.state
        axios.post(`/api/contacts/new`,{firstName,lastName,title,email,message})
    }

    render() {

        const { email,title,firstName,lastName } = this.state;

        return(
            <ContactPage>
                <Form onSubmit={this.sendInfo} >
                    <HeadingTwo>Heading Two</HeadingTwo>

                    <FormInput
                        label='First Name'
                        name='firstName'
                        type='text'
                        required
                        onChange={this.inputHandler} 
                        value={firstName}
                    />

                    <FormInput
                        label='Last Name'
                        name='lastName'
                        type='text'
                        required
                        onChange={this.inputHandler} 
                        value={lastName}
                    />

                    <FormInput
                        label='Title'
                        name='title'
                        type='text'
                        required
                        onChange={this.inputHandler} 
                        value={title}
                    />

                    <FormInput
                        label='Email'
                        name='email'
                        type='text'
                        required
                        onChange={this.inputHandler} 
                        value={email}
                    />

                    <Message onChange={(e) => this.inputHandler(e)} placeholder='Message' ></Message>

                    <BaseButton type="submit">Submit</BaseButton>
                
                </Form>
            </ContactPage>
        )
    }
}

export default Contact