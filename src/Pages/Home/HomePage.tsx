import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import { Button } from "@sgi/gravity";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box bg="white" p={8} rounded="xl">
      <Grid templateRows="repeat(2,1fr)" templateColumns="repeat(3,1fr)">
        <GridItem colSpan={3} justifySelf="center" p={8}>
          <Heading>Which form do you want to use?</Heading>
        </GridItem>
        <GridItem colStart={2}>
          <HStack>
            <Button onClick={() => navigate("/formik")}>Formik Form</Button>
            <Button onClick={() => navigate("/rhf")}>React Hook Form</Button>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
