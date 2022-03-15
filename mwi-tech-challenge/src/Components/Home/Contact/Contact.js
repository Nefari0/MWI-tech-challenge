import './Contact.css'
import axios from 'axios'
import react, { Component } from 'react'

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
    }

    componentDidMount() {
        axios.get(`/api/contacts/get`).then(res => {
                this.setState({
                    contacts:res.data
                })
            })
    }

    inputHandler = (prop,val) => {
        this.setState({[prop]:val})
    }

    sendInfo = () => {
        const { firstName,lastName,title,email,message } = this.state
        axios.post(`/api/contacts/new`,{firstName,lastName,title,email,message})
    }

    render() {

        return(<div className='contact-page'>
            <h2 className='heading-2' style={{marginLeft:'22px'}} >Heading Two</h2>

            <div className='small-input-row' >
                <input onChange={(e) => this.inputHandler('firstName',e.target.value)} className='small-input' placeholder='First Name'/>
                <input onChange={(e) => this.inputHandler('lastName',e.target.value)}className='small-input' placeholder='Last Name' />
            </div>

            <div className='small-input-row' >
                <input onChange={(e) => this.inputHandler('title',e.target.value)} className='small-input' placeholder='Title'/>
                <input onChange={(e) => this.inputHandler('email',e.target.value)} className='small-input' placeholder='Email'/>
            </div>

            <div className='small-input-row'>
                <textarea onChange={(e) => this.inputHandler('message',e.target.value)} className='large-input' placeholder='Message' ></textarea>
            </div>

            <div onClick={() => this.sendInfo()} className='submit-button'>
                <p className='content-box-text' style={{color:'#fff'}}>Submit</p>
            </div>
        </div>)
    }
}

export default Contact