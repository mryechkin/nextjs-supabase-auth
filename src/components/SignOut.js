'use client';

import { useAuth } from './AuthProvider';

export default function SignOut() {
  const { signOut } = useAuth();

  async function handleSignOut() {
    const { error } = await signOut();

    if (error) {
      console.error('ERROR signing out:', error);
    }
  }

  return (
    <button
      type="button"
      className="mb-2 mr-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
