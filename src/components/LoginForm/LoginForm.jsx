import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { MainForm, StyledField, StyledLabel, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <MainForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <StyledField type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledField type="password" name="password" />
      </StyledLabel>
      <Btn type="submit">Log In</Btn>
    </MainForm>
  );
};
