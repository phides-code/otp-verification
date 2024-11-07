import styled from 'styled-components';
import OtpForm from './OtpForm';
import { useContext } from 'react';
import { MobileContext, StyledComponentProp } from './MobileContext';

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

const Wrapper = styled.div<StyledComponentProp>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: ${(props) => (props.$isMobile ? '' : '44rem')};
    border-radius: 15px;
    background-color: #262b42;

    margin: 1rem;
    padding: 1rem;
`;

const HeaderText = styled.div`
    color: #b2b9d8;
    text-align: center;
    font-size: xx-large;
`;

const SubHeaderText = styled.div`
    text-align: center;
    color: #7582ac;
`;

export default OtpDialog;
