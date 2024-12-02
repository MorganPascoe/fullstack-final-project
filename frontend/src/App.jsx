import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";



function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("blue.100", "blue.900")}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>

  );
}

export default App