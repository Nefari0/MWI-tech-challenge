import axios from 'axios'
import { connect } from 'react-redux'
import { setSpinner } from '../../dux/isLoadingReducer'
import { setMessage } from '../../dux/noticeReducer'
import { useState } from 'react'
import FormInput from './Form/FormInput'
import TextEditor from './Form/TextEditor'
import { Form } from './Form/FormInput.styles'
import { ContactPage } from './contact.styles'
import { BaseButton } from '../Styles/BaseButton/button.styles'
import { HeadingTwo } from '../Styles/HeadingTwo/heading-two.component'
import { HeadingOne } from '../HeadingOne/heading-one.component'

const initialState = {
    firstName:'',
    lastName:'',
    title:'',
    email:'',
    message:''
}

const Contact = (props) => {
    
    const [state,setState] = useState(initialState)
    const { email,title,firstName,lastName,message } = state;
    const { isContact } = props

    const inputHandler = (e) => {
        const {name,value} = e.target
        setState({...state,[name]:value})
    }

    const sendInfo = async (e) => {
        e.preventDefault()
        props.setSpinner(true)
        await axios.post(`/api/contacts/new`,{firstName,lastName,title,email,message}).then(() => {
            props.setSpinner(false)
            props.setMessage(`Message from ${firstName} has been received`)
            setState(initialState)
        }).catch(err => {
            props.setMessage(`THERE WAS A SERIOUS ERROR: ${err}`)
            props.setSpinner(false)
        })
    }

        return(
            <ContactPage>

                <HeadingOne
                    title={"Heading One"}
                    isContact={isContact}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

function mapStateToProps(reduxState){
    return reduxState
  }
  
export default connect(mapStateToProps, { setSpinner,setMessage })(Contact)