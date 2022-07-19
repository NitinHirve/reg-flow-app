import { Box, styled } from '@mui/material';
import Account from './components/body/Account';
import TopBar from './components/header/Topbar';
import Footer from './components/footer/Footer';

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
})

function App() {
  return (
    <StyledBox>
      <TopBar />
      <Account />
      <Footer />
    </StyledBox>
  );
}

export default App;
