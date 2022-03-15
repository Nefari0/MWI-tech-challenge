import './Content.css'

const Content = (props) => {

    const { content,image } = props

    return(<div className='content-container'>
        <div className='heading-two-image'><img src={image}/></div>
        <h2 className='heading-2'>Heading Two</h2>
        <p className='content-box-text' >{content}</p>
        <div className='learn-more-button'><p className='content-box-text' style={{color:'#fff'}}>learn more</p></div>
    </div>)
}

export default Content