import Link from 'next/link';

import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
import Layout from 'src/components/Layout';

export default function Home() {
  const { user, view, signOut } = useAuth();

  if (view === VIEWS.UPDATE_PASSWORD) {
    return (
      <Layout>
        <Auth view={view} />
      </Layout>
    );
  }

  return (
    <Layout>
      {user && (
        <>
          <h2>Welcome!</h2>
          <code className="highlight">{user.role}</code>
          <Link className="button" href="/profile">
            Go to Profile
          </Link>
          <button type="button" className="button" onClick={signOut}>
            Sign Out
          </button>
        </>
      )}
      {!user && <Auth view={view} />}
    </Layout>
  );
}
