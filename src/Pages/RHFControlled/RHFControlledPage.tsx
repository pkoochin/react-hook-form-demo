import { Box, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Typography, useToast } from "@sgi/gravity";
import { Controller, useForm } from "react-hook-form";
import demoValidationSchema from "../../Validation/ValidationSchema";

let renderCount = 0;
const defaultValues = {
  firstName: "",
  lastName: "",
};

const RHFControlledPage = () => {
  const { showToast } = useToast();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: defaultValues,
    mode: "onBlur",
    resolver: yupResolver(demoValidationSchema),
  });

  const onSubmitHandler = (data: any) => {
    showToast({
      title: "Submitted Data",
      description: (
        <ul>
          <li>First Name: {getValues("firstName")}</li>
          <li>Last Name: {getValues("lastName")}</li>
        </ul>
      ),
    });
    console.log("Submitting in React Hook Form controlled: ", data);
  };

  console.log("Render Count: ", ++renderCount);

  return (
    <Box bg="white" p={8} rounded="xl">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography variant="h2">React Hook Form - Controlled</Typography>
        <VStack>
          <Controller
            name="firstName"
            control={control}
            render={({ field: { onChange, onBlur, name, value } }) => {
              return (
                <Input
                  name={name}
                  label="First Name"
                  isRequired
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={errors.firstName?.message?.toString()}
                />
              );
            }}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field: { onChange, onBlur, name, value } }) => {
              return (
                <Input
                  name={name}
                  label="Last Name"
                  isRequired
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={errors.lastName?.message?.toString()}
                />
              );
            }}
          />

          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RHFControlledPage;
