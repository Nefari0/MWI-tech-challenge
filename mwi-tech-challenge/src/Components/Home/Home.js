import axios from "axios";
import './Home.css'
import { Component } from 'react'
import Content from "./Content";
import { HeadingOne } from "../HeadOne/headingone.component";
import { HomePage } from "./home.styles";
import { HomeContent } from "./home.styles";

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

    componentDidMount = () => {
        axios.get(`https://api.mwi.dev/content/home`).then(res => {
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

        return (
            <HomePage>

            <HomeContent>
                {mappedData}
            </HomeContent>

            <HeadingOne />

        </HomePage>)
    }
}

export default Home