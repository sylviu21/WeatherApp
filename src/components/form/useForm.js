import { useState, useEffect } from 'react';

const useForm = (callback, verifyUser, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleClick = e => {
    const { name } = e.target;
    setErrors({
        ...errors,
        [name]: ''})
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    verifyUser(values);
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleClick, handleSubmit, values, errors };
};

export default useForm;
