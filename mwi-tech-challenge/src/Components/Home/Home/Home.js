import axios from "axios";
import './Home.css'
import react, { Component } from 'react'
import Content from "./Content";

class Home extends Component {
    constructor() {
        super()

        this.state = {
            // data:[]
        }
    }

    componentDidMount = async () => {
        await axios.get(`https://api.mwi.dev/content/home`).then(res => {
        const { data } = res.data
            this.setState({
                ...this.state,
                data
            })
        })
    }

    render() {

        const { data } = this.state

        // const mappedData = data.map(el => {
        //     return <Content key={el.id} />
        // })

        return(<div className="home">
            <header className="home-header" >
                <h2>header</h2>
                <a>contact</a>
            </header>
            <section className="home-row-1">
                {/* {mappedData} */}
                {/* <Content /> */}
                {/* <Content /> */}
                {/* <Content /> */}
            </section>

            <section className="home-row-2" >
                <h1 className="home-h1" >Heading One</h1>
                <p style={{textAlign:'left',marginLeft:'40px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </section>
        </div>)
    }
}

export default Home