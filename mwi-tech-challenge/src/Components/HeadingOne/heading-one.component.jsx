import { HeadOne } from "./heading-one.styles"

export const HeadingOne = ({children,title,isContact}) => {

    const theWidth = () => {return(isContact ? 600 : 1200)}

    return (
        <HeadOne theWidth={theWidth}>
            <h1>{title}<span></span></h1>
            <p >{children}</p>
        </HeadOne>
    )
}