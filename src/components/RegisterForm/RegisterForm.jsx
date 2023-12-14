import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { MainForm, StyledLabel, StyledField, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <MainForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Username
        <StyledField type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledField type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledField type="password" name="password" />
      </StyledLabel>
      <Btn type="submit">Register</Btn>
    </MainForm>
  );
};
