import React from 'react';
import { AuthProvider } from 'src/components/AuthProvider';
import createClient from 'src/lib/supabase-server';
// import { Noto } from 'next/font/google';
import 'src/styles/globals.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    //[NOTE] this is where logo/header can go - root layout on every page
    <html lang="en">
      <body className="bg-yellow-200">
        <div className="flex min-h-screen">
          <main className="flex w-full flex-1 shrink-0 flex-col text-center">
            <h1 className="text-m mb-12 grid grid-cols-3 border-b-2 border-black bg-yellow-200 py-2.5 sm:text-2xl">
              <div className="ml-2 text-left">hello dear</div>

              <a className="font-bold" href="/">
                Khajistan Archive
              </a>

              <a className="mr-2 text-right" href="/profile">
                Profile
              </a>
            </h1>
            <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
