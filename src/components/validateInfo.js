export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Full name is required";
  } else if (
    !values.username.split(" ") ||
    !/[a-zA-Z]+\s+[a-zA-Z]+/g.test(values.username)
  ) {
    errors.username = "Missing last name";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password is too short";
  }

  if (!values.password2) {
    errors.password2 = "Please confirm your password";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
