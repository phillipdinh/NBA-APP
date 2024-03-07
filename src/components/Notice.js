import styled from '@emotion/styled/macro';
import { noticeRed, noticeBlue } from '../colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faBell } from '@fortawesome/free-solid-svg-icons'

function Notice(props) {
    const NoticeContainer = styled.div`
        display: flex;
        flex-direction: row;
        background-color: ${props.error ? noticeRed : noticeBlue};
        padding: 10px;
        border-radius: 20px;
        justify-content: center;
        margin: 5px;
    `

    const NoticeSymbol = styled.div`
        margin-right: 10px;
    `

    const NoticeMessage = styled.div`
        font-weight: 600;
    `

    return <NoticeContainer>
        <NoticeSymbol>
            <FontAwesomeIcon icon={props.error ? faCircleExclamation : faBell} />
        </NoticeSymbol>
        <NoticeMessage>{props.message}</NoticeMessage>
    </NoticeContainer>
}

export default Notice