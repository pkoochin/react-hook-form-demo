import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import FormikPage from "./Pages/Formik/FormikPage";
import HomePage from "./Pages/Home/HomePage";
import RHFControlledPage from "./Pages/RHFControlled/RHFControlledPage";
import RHFUncontrolledPage from "./Pages/RHFUncontrolled/RHFUncontrolledPage";

export const App = () => {
  return (
    <Flex bg="gray.50" align="center" justify="center" h="100vh">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formik" element={<FormikPage />} />
        <Route path="/rhfUncontrolled" element={<RHFUncontrolledPage />} />
        <Route path="/rhfControlled" element={<RHFControlledPage />} />
      </Routes>
    </Flex>
  );
};

export default App;
