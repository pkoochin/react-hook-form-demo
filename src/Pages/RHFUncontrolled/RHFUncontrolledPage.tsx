import { Box, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@sgi/gravity";
import { useForm } from "react-hook-form";
import demoValidationSchema from "../../Validation/ValidationSchema";

let renderCount = 0;
const defaultValues = {
  firstName: "",
  lastName: "",
};

const RHFUncontrolledPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onBlur",
    resolver: yupResolver(demoValidationSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log("Submitting in React Hook Form uncontrolled: ", data);
  };

  console.log("Render Count: ", ++renderCount);

  return (
    <Box bg="white" p={8} rounded="xl">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <VStack>
          <Input
            {...register("firstName")}
            label="First Name"
            isRequired
            error={errors.firstName?.message?.toString()}
          />

          <Input
            {...register("lastName")}
            label="Last Name"
            isRequired
            error={errors.lastName?.message?.toString()}
          />
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RHFUncontrolledPage;
