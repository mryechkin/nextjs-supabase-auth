import { Auth } from '@supabase/ui';
import Link from 'next/link';

import Layout from '@/components/Layout';
import { useAuth, VIEWS } from '@/lib/auth';
import { supabase } from '@/lib/client';

export default function Home() {
  const { user, view, signOut } = useAuth();

  if (view === VIEWS.UPDATE_PASSWORD) {
    return (
      <Layout>
        <Auth.UpdatePassword supabaseClient={supabase} />
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
      {!user && <Auth view={view} supabaseClient={supabase} />}
    </Layout>
  );
}
