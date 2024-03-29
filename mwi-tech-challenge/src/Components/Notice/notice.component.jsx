import { BaseButton } from "../Styles/BaseButton/button.styles";
import { NoticeLayout,OverLay } from "./notice.styles";

export const Notice = ({text,clearNotice}) => {

    return (
        <OverLay>
            <NoticeLayout>
                <p>{text}</p>
                <BaseButton onClick={clearNotice}>
                    close
                </BaseButton>
            </NoticeLayout>
        </OverLay>
    )
}