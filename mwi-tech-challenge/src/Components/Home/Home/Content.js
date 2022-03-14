import './Content.css'

const Content = (props) => {

    return(<div className='content-container'>
        <div><p>icon</p></div>
        <h2 className='content-box-h2'>Text</h2>
        <p className='content-box-text' >this is where small text will be contained</p>
        <div className='learn-more-button'><p>learn more</p></div>
    </div>)
}

export default Content