import styled from 'styled-components';

interface OtpDialogProps {
    isMobile: boolean;
}

const OtpDialog = ({ isMobile }: OtpDialogProps) => {
    const mobile = isMobile.toString();

    return <Wrapper $mobile={mobile}>hello world</Wrapper>;
};

interface StyledComponentProps {
    $mobile: string;
}

const Wrapper = styled.div<StyledComponentProps>`
    height: 8rem;
    width: ${(props) => (props.$mobile === 'true' ? '' : '44rem')};

    border-radius: 15px;
    background-color: #262b42;
    color: #b2b9d8;
`;

export default OtpDialog;

// light purple: #7582ac
// greyed out: #2f3650
