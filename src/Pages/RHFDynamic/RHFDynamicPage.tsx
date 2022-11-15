import { Box, HStack, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Typography } from "@sgi/gravity";
import { useFieldArray, useForm } from "react-hook-form";
import demoValidationSchema from "../../Validation/ValidationSchema";

let renderCount = 0;
const defaultValues = {
  firstName: "",
  lastName: "",
  nickNames: [{ name: "" }],
};

const RHFDynamicPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onBlur",
    resolver: yupResolver(demoValidationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "nickNames",
  });

  const onSubmitHandler = (data: any) => {
    console.log("Submitting in React Hook Form uncontrolled: ", data);
  };

  console.log("Render Count: ", ++renderCount);

  return (
    <Box bg="white" p={8} rounded="xl">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography variant="h2">React Hook Form - Dynamic</Typography>
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

          {fields.map((field, index) => (
            <HStack key={`${field.name}.index`}>
              <Input
                label="Nickname"
                {...register(`nickNames.${index}.name`)}
                error={
                  errors.nickNames
                    ? errors.nickNames[index]?.name?.message?.toString()
                    : ""
                }
              />
              <Button type="button" onClick={() => remove(index)}>
                -
              </Button>
            </HStack>
          ))}
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              append({ name: "" });
            }}
          >
            + NickName
          </Button>

          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RHFDynamicPage;
