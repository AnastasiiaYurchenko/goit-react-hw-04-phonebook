import { Formik } from 'formik';
import {
  FormField,
  Form,
  Button,
  Field,
  ErrorMessage,
} from './ContactsForm.styled';
import { FormWrapper } from './ContactsForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import 'yup-phone-lite';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  number: Yup.string().phone('UA').required('Required field'),
});

export const ContactsForm = ({ onSave }) => (
  <FormWrapper>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, actions) => {
        // console.log(values);
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" placeholder="Jane Petrenko" />
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  </FormWrapper>
);
