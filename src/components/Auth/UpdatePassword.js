'use client';

import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import React from 'react';
import supabase from 'src/lib/supabase-browser';
import * as Yup from 'yup';

const UpdatePasswordSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
});

const UpdatePassword = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  async function updatePassword(formData) {
    const { data, error } = await supabase.auth.updateUser({
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="card">
      <h2 className="w-full text-center">Update Password</h2>
      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={UpdatePasswordSchema}
        onSubmit={updatePassword}
      >
        {({ errors, touched }) => (
          <Form className="column w-full">
            <label htmlFor="email">New Password</label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}
            <button className="button-inverse w-full" type="submit">
              Update Password
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
    </div>
  );
};

export default UpdatePassword;
