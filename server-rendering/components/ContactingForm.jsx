import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const SendMessage = Yup.object().shape({
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

function ContactingForm() {
    return (
        <Formik
            initialValues={{
                name : '',
                email: '',
                desc: '',
            }}

            validationSchema={ SendMessage }

            onSubmit = {(values, { setSubmitting }) => {(
                setTimeout(() => {
                    console.log('Putted: ', values)
                }, 500))
            }}
        >
            {
                ({ values, touched, errors, isValid,
                    handleBlur, isSubmitting,
                    handleChange, handleSubmit }) => (
                        <Form autoComplete="off" onSubmit={ handleSubmit }>
                            <label htmlFor="name">Name</label>
                            <Field
                                id="name"
                                name="name"
                                value={ values.name }
                                onBlur={ handleBlur }
                                placeholder="Your name"
                                onChange={ handleChange }
                                className={errors.name && touched.name && "error"}
                            />
                            {
                                errors.name && touched.name && (
                                    <div className="input-feedback">
                                        {errors.name}
                                    </div>
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                onBlur={ handleBlur }
                                value={ values.email }
                                placeholder="Your email"
                                onChange={ handleChange }
                                className={errors.email && touched.email && "error"}
                            />
                            {
                                errors.email && touched.email && (
                                    <div className="input-feedback">
                                        {errors.email}
                                    </div>
                                )
                            }

                            <label htmlFor="desc">Tell me about your project</label>
                            <Field
                                id="desc"
                                as='textarea'
                                name="desc"
                                value={ values.desc }
                                className={errors.desc && touched.desc && "error"}
                                placeholder="Describe your problem or future project."
                            />
                            {
                                errors.desc && touched.desc && (
                                    <div className="input-feedback">
                                        {errors.desc}
                                    </div>
                                )
                            }

                            <button type="submit" className="button foreground center medium-space-top">Send message</button>
                        </Form>
                )
            }

        </Formik>
    )
}

export default ContactingForm