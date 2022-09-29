import axios from "axios";
import {useEffect,useState} from 'react'
import Content from "./HomeCard/content.component.";
import { HeadingOne } from "../HeadingOne/heading-one.component";
import { HomeContent,NameRow,HomePage } from "./home.styles";
import { Notice } from "../Styles/Notice/notice.component";

const Home = ({isContact}) => {

    const [state,setState] = useState({
        data:[],
        images:['https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Talkie.png','https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Rabbit.png','https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Shield.png'],
        nameObj1:"Matt Johnson,Matt Johnson,Bart Paden,Ryan Doss,Jared Malcolm",
        nameObj2:"Matt Johnson,Bart Paden,Bart Paden,Jordan Heigle,Jordan Heigle,Tyler Viles",
        newNameArray:[],
        notice:null,
    })

    var { nameObj1,nameObj2,data,images,newNameArray,notice} = state

    useEffect(() => {getItems()},[])

    const getItems = () => {
        axios.get(`https://api.mwi.dev/content/home`).then(res => {
            const { data } = res.data
            setState({
                ...state,
                data
            })
        })
    }

    const closeNotice = () => { // -- Function for closing Notice component
        setState({...state,notice:''})
    }

    const executeGetNames = () => {
        var returnDistinct = i => i.replace(/(\b\S.+\b)(?=.*\1)/g ,"").trim();
        var nameArr = returnDistinct(nameObj1+','+nameObj2).split(',')

        if(newNameArray[0] === undefined){
            setState({...state,newNameArray:nameArr})
        } else {
            setState({...state,notice:'You already clicked this link'})
        }
    }

    const mappedData = data.map(el => {
        return <Content key={el.id} content={el.content} image={images[el.id-1]} />
    })

    const mappTheseNames = (nameArr) => {
        const newArr = nameArr.map((el,i) => {
            return <p style={{color:'white'}} key={i}>{el}</p>
        })
        return <NameRow>{newArr}</NameRow>
    }

    return (
        <HomePage>

            {notice && <Notice
                text={notice}
                clearNotice={closeNotice}
            />}

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
                <a onClick={executeGetNames}>this link</a> is clicked. If the
                operation has been completed already, notify the user that this
                has already been done.
            </HeadingOne>

            {newNameArray.length > 1 ?
            mappTheseNames(newNameArray)
            :
            mappTheseNames(nameObj1.concat(',',nameObj2).split(','))
            }
            

        </HomePage>
    )
}

export default Home