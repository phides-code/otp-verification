import { useContext } from 'react';
import styled from 'styled-components';
import { MobileContext, StyledComponentMobileProp } from './MobileContext';
import { DARKER_PURPLE, GREY_PURPLE, LIGHTER_PURPLE } from './theme';

const OtpForm = () => {
    const inputFields = Array(4).fill(0);
    const { isMobile } = useContext(MobileContext);

    return (
        <Wrapper>
            {inputFields.map((_, i) => (
                <DigitInput
                    type='text'
                    maxLength={1}
                    pattern='[0-9]'
                    inputMode='numeric'
                    onInput={(e) =>
                        (e.currentTarget.value = e.currentTarget.value.replace(
                            /[^0-9]/g,
                            ''
                        ))
                    }
                    placeholder='0'
                    $isMobile={isMobile}
                    key={i}
                />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin-top: 3rem;
    width: 100%;
    justify-content: space-evenly;
`;

const DigitInput = styled.input<StyledComponentMobileProp>`
    background-color: ${DARKER_PURPLE};
    border: 1px solid ${LIGHTER_PURPLE};

    height: ${(props) => (props.$isMobile ? '4.8rem' : '8rem')};
    width: ${(props) => (props.$isMobile ? '4rem' : '8rem')};

    border-radius: 5px;
    color: ${LIGHTER_PURPLE};
    font-size: ${(props) => (props.$isMobile ? '3.8rem' : '7rem')};
    text-align: center;

    &::placeholder {
        color: ${GREY_PURPLE};
    }
`;

export default OtpForm;
