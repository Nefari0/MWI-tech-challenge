import axios from "axios";
import './Home.css'
import react, { Component } from 'react'
import Content from "./Content";

class Home extends Component {
    constructor() {
        super()

        this.state = {
            data:[],
            images:['https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Talkie.png','https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Rabbit.png','https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Shield.png']
            // image1:
            // image2:
            // image3:
        }
    }

    componentDidMount = async () => {
        await axios.get(`https://api.mwi.dev/content/home`).then(res => {
        const { data } = res.data
            // console.log('here is data',data[0].content)
            this.setState({
                ...this.state,
                data
            })
        })
    }

    executeGetNames = () => {
        // console.log('got names')
    }

    render() {

        const { data,images } = this.state

        const mappedData = data.map(el => {
            // console.log(el.content)
            return <Content key={el.id} content={el.content} image={images[el.id-1]} />
        })

        return(<div className="home">
            {/* <header className="home-header" >
                <h2>header</h2>
                <a>contact</a>
            </header> */}
            <section className="home-row-1">
                {/* <img src='https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Rabbit.png' /> */}
                {/* <img src={images[0]} /> */}
                {mappedData}
                {/* <Content /> */}
                {/* <Content /> */}
                {/* <Content /> */}
            </section>

            <section className="home-row-2" >
                <h1 className="heading-1" >Heading One</h1>
                <p className="home-text" style={{textAlign:'left',marginLeft:'40px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic , remaining essentially unchanged<a onClick={() => this.executeGetNames()} style={{color:'#DEBF79'}}>  link</a>.
                </p>
            </section>
        </div>)
    }
}

export default Home