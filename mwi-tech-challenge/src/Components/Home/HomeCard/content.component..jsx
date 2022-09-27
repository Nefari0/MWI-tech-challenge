import { BaseButton } from '../../Styles/BaseButton/button.styles'
import { HeadingTwo } from '../../Styles/HeadingTwo/heading-two.component'
import { ContentContainer } from './content.styles'

const Content = (props) => {

    const { content,image } = props

    return(
        <ContentContainer>

            <img src={image}/>

            <HeadingTwo>Heading Two</HeadingTwo>

            <p>{content}</p>

            <BaseButton>Learn More</BaseButton>
            
        </ContentContainer>
    )
}

export default Content