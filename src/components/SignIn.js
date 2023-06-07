'use client';

import Link from 'next/link';

import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
//import SearchResults from '@/components/SearchResults';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();
  

  if (initial) {
    return <div className="h-72 bg-yellow-200 drop-shadow-none">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div className="bg-yellow-200 drop-shadow-none">
        <code className="highlight">{user.role}</code>
        <Link className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" href="/profile">
          Go to Profile
        </Link>
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={signOut}>
          Sign Out
        </button>
      </div>
    );
  }

  return <Auth view={view} />;
}