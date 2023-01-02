'use client';

import { useEffect } from 'react';

import { useAuth, VIEWS } from 'src/components/AuthProvider';

import ResetPassword from './ResetPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UpdatePassword from './UpdatePassword';

const Auth = ({ view: initialView }) => {
  let { view } = useAuth();

  console.log('Auth:initialView', initialView);

  useEffect(() => {
    console.log('Auth:view changed', view);
  }, [view]);

  console.log('Auth:view', view);

  if (initialView) {
    view = initialView;
  }

  switch (view) {
    case VIEWS.UPDATE_PASSWORD:
      return <UpdatePassword />;
    case VIEWS.FORGOTTEN_PASSWORD:
      return <ResetPassword />;
    case VIEWS.SIGN_UP:
      return <SignUp />;
    default:
      return <SignIn />;
  }
};

export default Auth;
