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
      <body className="h-screen bg-yellow-400">
        <div className="flex min-h-screen">
          <main className="flex w-full flex-1 shrink-0 flex-col text-center">
            <h1 className="sticky top-0 z-50 w-full text-mp grid grid-cols-7 border-b-2 border-black bg-yellow-400 py-2.5 sm:text-2xl">
              <div className="sticky top-0 ml-2 text-left">hi dear</div>
              <a className="mr-2 text-right" href="/profile">
                Profile
              </a>

              <a className="font-bold font-display hover:underline" href="/">
                Home
              </a>

              <a className="font-bold font-display hover:underline" href="/archive">
                Archive
              </a>
              <a className="font-bold font-display hover:underline" href="/madrassa">
                Madrassa
              </a>
              <a className="font-bold font-display hover:underline" href="/blog">
                Blog
              </a>
              <a className="font-bold font-display hover:underline" href="/radio">
                Radio
              </a>
            </h1>
            <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
