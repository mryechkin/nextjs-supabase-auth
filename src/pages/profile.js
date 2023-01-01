import Link from 'next/link';

import Layout from '@/components/Layout';
import { supabase } from '@/lib/client';

export default function Profile({ user }) {
  return (
    <Layout>
      <h2>User Profile</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">Last Signed In:</div>
      <code className="highlight">{new Date(user.last_sign_in_at).toLocaleString()}</code>
      <Link className="button" href="/">
        Go Home
      </Link>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // eslint-disable-next-line no-console
    console.log('Please login.');
    return { props: {}, redirect: { destination: '/', permanent: false } };
  }

  return { props: { user } };
}
