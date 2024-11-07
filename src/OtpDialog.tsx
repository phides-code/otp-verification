import styled from 'styled-components';
import OtpForm from './OtpForm';
import { useContext } from 'react';
import { MobileContext, StyledComponentMobileProp } from './MobileContext';
import { DARK_PURPLE, LIGHT_PURPLE, LIGHTER_PURPLE } from './theme';

const OtpDialog = () => {
    const { isMobile } = useContext(MobileContext);

    return (
        <Wrapper $isMobile={isMobile}>
            <HeaderText>Verify your email address</HeaderText>
            <SubHeaderText>
                A four-digit code has been sent to your email
                name@frontendpro.dev
                <br />
                Please enter the code below to verify your email address.
            </SubHeaderText>
            <OtpForm />
        </Wrapper>
    );
};

const Wrapper = styled.div<StyledComponentMobileProp>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: ${(props) => (props.$isMobile ? '' : '44rem')};
    border-radius: 15px;
    background-color: ${DARK_PURPLE};

    margin: 1rem;
    padding: 1rem;
`;

const HeaderText = styled.div`
    color: ${LIGHTER_PURPLE};
    text-align: center;
    font-size: xx-large;
`;

const SubHeaderText = styled.div`
    text-align: center;
    color: ${LIGHT_PURPLE};
`;

export default OtpDialog;
