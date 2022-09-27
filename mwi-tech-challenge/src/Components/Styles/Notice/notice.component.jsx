import { BaseButton } from "../BaseButton/button.styles";
import { NoticeLayout } from "./notice.styles";

export const Notice = ({text,clearNotice}) => {

    return (
        <NoticeLayout>
            <p>{text}</p>
            <BaseButton onClick={clearNotice}>
                close
            </BaseButton>
        </NoticeLayout>
    )
}