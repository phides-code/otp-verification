import styled from 'styled-components';
import {
    DARKER_PURPLE,
    GREY_PURPLE,
    LIGHT_PURPLE,
    LIGHTER_PURPLE,
} from './theme';
import { useContext } from 'react';
import { MobileContext, StyledComponentMobileProp } from './MobileContext';

interface VerifyButtonProps {
    digits: string[];
    clearDigits: () => void;
}

const PASSWORD = '1234';

const VerifyButton = ({ digits, clearDigits }: VerifyButtonProps) => {
    const { isMobile } = useContext(MobileContext);

    const arrayToString = (arr: string[]): string => {
        let str = '';

        arr.forEach((elem) => (str += elem));

        return str;
    };

    const handleSubmit = () => {
        alert(
            arrayToString(digits) === PASSWORD
                ? 'Password OK'
                : 'Incorrect password'
        );
        clearDigits();
    };

    const isValidDigits: boolean = digits.every((digit) =>
        /^[0-9]$/.test(digit)
    );

    return (
        <Wrapper>
            <StyledButton
                disabled={!isValidDigits}
                onClick={handleSubmit}
                $isMobile={isMobile}
            >
                Verify OTP
            </StyledButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledButton = styled.button<StyledComponentMobileProp>`
    background-color: ${DARKER_PURPLE};
    color: ${LIGHTER_PURPLE};
    height: 3rem;
    width: ${(props) => (props.$isMobile ? '12rem' : '24rem')};
    border: none;

    &:hover {
        border: 1px solid ${LIGHT_PURPLE};
    }

    &:disabled {
        color: ${GREY_PURPLE};
    }
`;

export default VerifyButton;
