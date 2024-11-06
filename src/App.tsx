import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OtpDialog from './OtpDialog';

const App = () => {
    const [isMobile, setisMobile] = useState<boolean>(false);

    useEffect(() => {
        const detectMobile = () => {
            const mobileThreshold = 768; // Threshold for isMobile devices (adjust as needed)

            setisMobile(window.innerWidth < mobileThreshold);
        };

        // Function to check if the window is resized
        const handleResize = () => {
            detectMobile();
        };

        detectMobile();

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Wrapper>
            <OtpDialog isMobile={isMobile} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1b2036;
`;

export default App;
