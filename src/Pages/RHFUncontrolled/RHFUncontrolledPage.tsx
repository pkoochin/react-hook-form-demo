import { VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@sgi/gravity";
import { useForm } from "react-hook-form";
import demoValidationSchema from "../../Validation/ValidationSchema";

let renderCount = 0;

const RHFUncontrolledPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(demoValidationSchema),
  });
  const onSubmitHandler = (data: any, e: any) => {
    e.preventDefault();

    console.log("Submitting in React Hook Form uncontrolled: ", data);
  };

  console.log("Render Count: ", ++renderCount);

  return (
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
  );
};

export default RHFUncontrolledPage;
