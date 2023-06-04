import { AuthProvider } from 'src/components/AuthProvider';
import createClient from 'src/lib/supabase-server';
import { Noto } from 'next/font/google';

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
      <body>
        <div className="flex min-h-screen flex-col py-2">
          <main className="flex w-full flex-1 shrink-0 flex-col  px-8 text-center sm:px-20">
            <h1 className="mb-12 text-5xl font-bold sm:text-6xl">
              Khajistan Archive
            </h1>
            <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
