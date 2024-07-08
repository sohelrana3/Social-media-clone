import * as Yup from "yup";

export const singUpValid = Yup.object({
  fname: Yup.string().min(3).max(15).required("Please Enter your FristName"),
  lname: Yup.string().min(3).max(15).required("Please Enter your lname"),
  email: Yup.string().min(3).max(30).required("Please Enter valid eamil "),
  password: Yup.string().min(3).max(15).required("Please Enter password "),
  gender: Yup.string().min(3).max(15).required("Please Enter gender "),
  byear: Yup.string().required("Please Enter Year "),
  bmonth: Yup.string().required("Please Enter Month "),
  bday: Yup.string().required("Please Enter day "),
});
