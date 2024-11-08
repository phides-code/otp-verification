import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { MobileContext, StyledComponentMobileProp } from './MobileContext';
import {
    DARK_PURPLE,
    DARKER_PURPLE,
    GREY_PURPLE,
    LIGHT_PURPLE,
    LIGHTER_PURPLE,
} from './theme';
import VerifyButton from './VerifyButton';

const OtpForm = () => {
    const { isMobile } = useContext(MobileContext);

    const [digits, setDigits] = useState(['', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { value } = e.currentTarget;
        const sanitizedValue = value.replace(/[^0-9]/g, ''); // Only allow numeric input

        // Update the digit in the state
        const newDigits = [...digits];
        newDigits[index] = sanitizedValue;
        setDigits(newDigits);

        // Move to the next input if theres's exactly 1 digit entered
        if (sanitizedValue && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Backspace') {
            // Update the state to remove the digit in the current position
            const newDigits = [...digits];
            newDigits[index] = '';
            setDigits(newDigits);

            // Move to the previous input if current input is empty and it's not the first input
            if (!e.currentTarget.value && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasteData = e.clipboardData.getData('Text').trim();

        if (/^\d{4}$/.test(pasteData)) {
            e.preventDefault();

            const newDigits = pasteData.split('');
            setDigits(newDigits);

            // move focus to the last input
            inputRefs.current[3]?.focus();
        }
    };

    const clearDigits = () => {
        setDigits(['', '', '', '']);
        inputRefs.current[0]?.focus(); // focus the first input after clearing
    };

    return (
        <Wrapper $isMobile={isMobile}>
            <TextWrapper>
                <HeaderText>Verify your email address</HeaderText>
                <SubHeaderText>
                    A four-digit code has been sent to your email
                    name@frontendpro.dev
                    <br />
                    Please enter the code below to verify your email address.
                </SubHeaderText>
            </TextWrapper>
            <DigitsWrapper>
                {digits.map((digit, i) => (
                    <DigitInput
                        value={digit}
                        type='text'
                        maxLength={1}
                        pattern='[0-9]'
                        inputMode='numeric'
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        onPaste={(e) => handlePaste(e)}
                        onChange={(e) => handleInput(e, i)}
                        placeholder='0'
                        $isMobile={isMobile}
                        ref={(el) => (inputRefs.current[i] = el)}
                        key={i}
                    />
                ))}
            </DigitsWrapper>
            <VerifyButton digits={digits} clearDigits={clearDigits} />
        </Wrapper>
    );
};

const Wrapper = styled.div<StyledComponentMobileProp>`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
    width: ${(props) => (props.$isMobile ? '' : '44rem')};
    border-radius: 15px;
    background-color: ${DARK_PURPLE};
    margin: 0 1rem;
    padding: 0 1rem;
`;

const TextWrapper = styled.div``;

const HeaderText = styled.div`
    color: ${LIGHTER_PURPLE};
    text-align: center;
    font-size: xx-large;
`;

const SubHeaderText = styled.div`
    text-align: center;
    color: ${LIGHT_PURPLE};
`;

const DigitsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const DigitInput = styled.input<StyledComponentMobileProp>`
    background-color: ${DARKER_PURPLE};
    border: 1px solid ${LIGHT_PURPLE};

    height: ${(props) => (props.$isMobile ? '4.8rem' : '8rem')};
    width: ${(props) => (props.$isMobile ? '4rem' : '8rem')};

    border-radius: 5px;
    color: ${LIGHTER_PURPLE};
    font-size: ${(props) => (props.$isMobile ? '3.8rem' : '7rem')};
    text-align: center;
    caret-color: transparent;

    &::placeholder {
        color: ${GREY_PURPLE};
    }
`;

export default OtpForm;
