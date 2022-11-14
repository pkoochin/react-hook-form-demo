import { VStack } from "@chakra-ui/react";
import { Button, Input } from "@sgi/gravity";
import { useFormik } from "formik";
import demoValidationSchema from "../../Validation/ValidationSchema";

let renderCount = 0;
const FormikPage = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "" },
    onSubmit: (data: any) => {
      console.log("Submitting in Formik: ", data);
    },
    validationSchema: demoValidationSchema,
    enableReinitialize: true,
  });

  console.log("Render Count: ", ++renderCount);

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack>
        <Input
          isRequired
          id="firstName"
          label="First Name"
          name="firstName"
          value={formik.values.firstName}
          error={formik.touched.firstName ? formik.errors.firstName : undefined}
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
  );
};

export default FormikPage;
