import axios from "axios";
import './Home.css'
import react, { Component } from 'react'
import Content from "./Content";

class Home extends Component {
    constructor() {
        super()

        this.state = {
            data:[],
            images:['https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Talkie.png','https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Rabbit.png','https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Shield.png'],
            nameObj1:"Matt Johnson,Matt Johnson,Bart Paden,Ryan Doss,Jared Malcolm",
            nameObj2:"Matt Johnson,Bart Paden,Bart Paden,Jordan Heigle,Jordan Heigle,Tyler Viles",
            nameArray:[],
            displayNames:false,
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

    executeGetNames = () => {
        var { nameObj1,nameObj2} = this.state
        var newArr = []
        var returnDistinct = i => i.replace(/(\b\S.+\b)(?=.*\1)/g ,"").trim();
        var nameArr = returnDistinct(nameObj1+','+nameObj2).split(',')
        for (let x in nameArr) {
            newArr.push({
                name:nameArr[x],
                id:x})
        }
        if(this.state.nameArray[0] === undefined){
            this.setState({nameArray:newArr})
        } else {alert('You already clicked this link')}
    }

    render() {

        const { data,images,nameArray } = this.state

        const mappedData = data.map(el => {
            return <Content key={el.id} content={el.content} image={images[el.id-1]} />
        })

        const mappedNames = nameArray.map(el => {
            console.log(el.name)
            return <p style={{color:'white'}} key={el.id} name={el.name} >{el.name}</p>
        })

        return(<div className="home">
            <section className="home-row-1">
                {mappedData}
            </section>

            <section className="home-row-2" >
                <h1 className="heading-1" >Heading One</h1>
                <p className="home-text" style={{textAlign:'left',marginLeft:'40px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic , remaining essentially unchanged<a onClick={() => this.executeGetNames()} style={{color:'#DEBF79'}}>  link</a>.
                </p>
            <div className="mapped-names">{mappedNames}</div>
            </section>
        </div>)
    }
}

export default Home