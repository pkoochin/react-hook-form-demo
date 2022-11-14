import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import FormikPage from "./Pages/Formik/FormikPage";
import HomePage from "./Pages/Home/HomePage";
import RHFUncontrolledPage from "./Pages/RHFUncontrolled/RHFUncontrolledPage";

export const App = () => {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formik" element={<FormikPage />} />
        <Route path="/rhfUncontrolled" element={<RHFUncontrolledPage />} />
      </Routes>
    </Flex>
  );
};

export default App;
