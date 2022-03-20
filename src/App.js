import React from "react";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Header/Header";
import GridSystem from "./PlayGround/GridSystem";
import ProductContainer from "./components/Products/ProductContainer";
import LearnDataGrid from "./PlayGround/LearnDataGrid";
import MobileCategory from "./components/Products/MobileCategory";
import { Box } from "@mui/system";
import CustomButton from "./customize mui/components/CustomButton";
import StyledPaper from './mui-styled/components/StyledPaper';

const App = () => {
  return (
    <Box sx={{ mb: 8}}>
      <Nav />
      <Header />
      {/* <GridSystem /> */}
      {/* <LearnDataGrid /> */}
      <Box sx={{display:{xs: "none", lg: "block"}}}>
        <ProductContainer />
      </Box>
      <Box sx={{display: {xs: "block", lg: "none"}, margin: "2rem"}} >
        <MobileCategory />
      </Box>
      <CustomButton />
      <StyledPaper />
    </Box>
  );
};

export default App;
