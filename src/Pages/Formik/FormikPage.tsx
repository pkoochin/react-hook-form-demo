import { VStack } from "@chakra-ui/react";
import { Button, FormControl, Input } from "@sgi/gravity";
import { useFormik } from "formik";
import demoValidationSchema from "../../Validation/ValidationSchema";

const FormikPage = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "" },
    onSubmit: () => {
      console.log("Submitting in Formik");
    },
    validationSchema: demoValidationSchema,
    enableReinitialize: true,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <VStack>
          <FormControl name="firstName">
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
          </FormControl>
          <Input
            isRequired
            label="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName ? formik.errors.lastName : undefined}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default FormikPage;
