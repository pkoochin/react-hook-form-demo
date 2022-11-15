import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import { Button } from "@sgi/gravity";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box bg="white" p={8} rounded="xl">
      <Grid templateRows="repeat(1,1fr)" templateColumns="repeat(3,1fr)">
        <GridItem colStart={2}>
          <VStack>
            <Button onClick={() => navigate("/formik")}>Formik Form</Button>
            <Button onClick={() => navigate("/rhfUncontrolled")}>
              React Hook Form - Uncontrolled
            </Button>
            <Button onClick={() => navigate("/rhfControlled")}>
              React Hook Form - Controlled
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
