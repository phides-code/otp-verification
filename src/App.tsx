import styled from 'styled-components';
import OtpDialog from './OtpDialog';
import { MobileProvider } from './MobileContext';
import { DARKER_PURPLE } from './theme';

const App = () => (
    <Wrapper>
        <MobileProvider>
            <OtpDialog />
        </MobileProvider>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: ${DARKER_PURPLE};
`;

export default App;
