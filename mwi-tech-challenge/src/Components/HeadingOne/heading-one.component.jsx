import { HeadOne } from "./heading-one.styles"

export const HeadingOne = ({children,title}) => {
    return (
        <HeadOne>
            <h1>{title}<span></span></h1>
            <p >{children}</p>
        </HeadOne>
    )
}