import { Box, VStack } from "@chakra-ui/react";
import { Button, Input, Typography, useToast } from "@sgi/gravity";
import { useFormik } from "formik";
import demoValidationSchema from "../../Validation/ValidationSchema";

let renderCount = 0;
const defaultValues = {
  firstName: "",
  lastName: "",
};

const FormikPage = () => {
  const { showToast } = useToast();
  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: (data: any) => {
      showToast({
        title: "Submitted Data",
        description: (
          <ul>
            <li>First Name: {formik.values.firstName}</li>
            <li>Last Name: {formik.values.lastName}</li>
          </ul>
        ),
      });
      console.log("Submitting in Formik: ", data);
    },
    validationSchema: demoValidationSchema,
    enableReinitialize: true,
  });

  console.log("Render Count: ", ++renderCount);

  return (
    <Box bg="white" p={8} rounded="xl">
      <form onSubmit={formik.handleSubmit}>
        <VStack>
          <Typography variant="h2">Formik</Typography>
          <Input
            isRequired
            id="firstName"
            label="First Name"
            name="firstName"
            value={formik.values.firstName}
            error={
              formik.touched.firstName ? formik.errors.firstName : undefined
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            isRequired
            label="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName ? formik.errors.lastName : undefined}
          />

          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default FormikPage;
