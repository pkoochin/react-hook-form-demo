import * as Yup from 'yup';

export const demoValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required()
      .min(2, "First name is too short")
      .max(50, "First name is too long"),
    lastName: Yup.string()
      .required()
      .min(2, "Last name is too short")
      .max(50, "Last name is too long"),
    nickNames: Yup.array().of(
      Yup.object().shape({
        name:Yup.string()       
        .min(2, "Nickname is too short")
        .max(8, "Nickname is too long")
    }))
  });


export default demoValidationSchema;
