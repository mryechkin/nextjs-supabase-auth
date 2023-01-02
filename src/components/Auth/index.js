'use client';

import { useAuth, VIEWS } from 'src/components/AuthProvider';

import ResetPassword from './ResetPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UpdatePassword from './UpdatePassword';

const Auth = ({ view: initialView }) => {
  let { view } = useAuth();

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
