import React from 'react'
import { Formik, Form } from 'formik'
import Controls from './Contols'
import * as Yup from 'yup'

function SendingMessage () {
  const initialValues = {
      name : '',
      email: '',
      desc: '',
  }

  const SendMessage = Yup.object({
      name: Yup.string()
              .min(2, 'Name should have at least 2 symbols')
              .max(60, 'Name must not exceed more than 60 symbols')
              .required('Required to fill'),

      email: Yup.string()
              .email('Please enter a valid email address')
              .required('Required to fill'),

      txt: Yup.string()
              .min(10, 'Field should have at least 10 symbols')
              .required('Required to fill')
  })

  const onSubmit = values => {
      console.log('Form data: ', values)
      console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SendMessage}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <Controls
              control='input'
              type='input'
              label='Name'
              name='name'
            />

            <Controls
              control='input'
              type='email'
              label='Email'
              name='email'
            />

            <Controls
              control='textarea'
              label='Description'
              name='description'
            />
          <button type='submit' className="button foreground center medium-space-top" disabled={!formik.isValid}>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default SendingMessage