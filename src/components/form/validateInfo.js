import userEvent from "@testing-library/user-event";

import {userdb} from './../../userdb'

export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  } else if (values.email !== userdb.email) {
    errors.email = 'emailul introdus este gresit';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password !== userdb.password) {
    errors.password = 'Parola introdusa este gresita';
  }

  return errors;
}