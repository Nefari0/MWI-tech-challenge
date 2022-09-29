import axios from "axios";
import {useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { setMessage } from "../../dux/noticeReducer";
import Content from "./HomeCard/content.component.";
import { HeadingOne } from "../HeadingOne/heading-one.component";
import { HomeContent,NameRow,HomePage } from "./home.styles";
import { colors } from "../Styles/colors";
const { darkGray,white } = colors

const Home = (props) => {
    const { isContact } = props

    const [state,setState] = useState({
        data:[],
        images:[
            'https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Talkie.png',
            'https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Rabbit.png',
            'https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Shield.png'
        ],
        nameObj1:"Matt Johnson,Matt Johnson,Bart Paden,Ryan Doss,Jared Malcolm",
        nameObj2:"Matt Johnson,Bart Paden,Bart Paden,Jordan Heigle,Jordan Heigle,Tyler Viles",
        newNameArray:[],
        clicked:false
    })

    var { nameObj1,nameObj2,data,images,newNameArray,clicked } = state

    useEffect(() => {
        intitialize()
    },[])

    const returnDistinctNames = i => i.replace(/(\b\S.+\b)(?=.*\1)/g ,"").trim();

    const intitialize = () => {
        axios.get(`https://api.mwi.dev/content/home`).then(res => {
            const { data } = res.data
            setState({
                ...state,
                data:data,
                newNameArray:[...returnDistinctNames(nameObj1+','+nameObj2).split(',')]
            })
        })
    }

    const clickLink = () => {
        if (clicked === false) {
            setState({...state,clicked:true})
        } else if (clicked === true) {
            props.setMessage('You already clicked this link')
        }
    }

    const mappedData = data.map(el => {
        return <Content key={el.id} content={el.content} image={images[el.id-1]} />
    })

    const mappTheseNames = (nameArr,hide) => { // Takes an array. The hide parameter is a boolean.

        const newArr = nameArr.map((el,i) => {

            const location = () => {return(hide ? 0 : i*20)} 
            const hidden = () => {return(hide ? `0` : `1`)}

            var locations = {
                top:`${location()}px`,
                left:`${location()}px`,
                color:`white`,
                position:'absolute',
                transition: "all 1000ms",
                opacity:`${hidden()}`,
            }

            return <p style={locations} key={i}>{el}</p>
        })

        return <NameRow hide={hide} >{newArr}</NameRow>
    }

    return (
        <HomePage>

            <HomeContent>
                {mappedData}
            </HomeContent>

            <HeadingOne
                title={'Heading One'}
                isContact={isContact}
            >
                Remove the duplicates in 2 Javascript arrays,
                add the results to an array and output the list of distinct
                names in an unordered list below this paragraph when{' '}
                <a onClick={clickLink}>this link</a> is clicked. If the
                operation has been completed already, notify the user that this
                has already been done.
            </HeadingOne>

            {/* --- Displaying names --- */}
            {clicked ? mappTheseNames(newNameArray):mappTheseNames(newNameArray,true)} 

            {clicked ? mappTheseNames(nameObj1.concat(',',nameObj2).split(','),true)
            :
            mappTheseNames(nameObj1.concat(',',nameObj2).split(','))}
            

        </HomePage>
    )
}

function mapStateToProps(reduxState){
    return reduxState
  }
  
export default connect(mapStateToProps, { setMessage })(Home)