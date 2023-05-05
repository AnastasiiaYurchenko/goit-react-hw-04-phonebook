import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FieldInput,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const FormWrapper = styled.div`
  width: 500px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FormField = styled.label`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FieldInput)`
  margin-bottom: 10px;
  padding: 5px 8px;
  border-radius: 4px;
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 5px 8px;
  margin-bottom: 8px;

  :active {
    background-color: lightblue;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 16px;
  color: red;
`;
