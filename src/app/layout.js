import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import AuthProvider from 'src/components/AuthProvider';

import 'src/styles/globals.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col justify-start py-10">
          <main className="flex w-full flex-1 shrink-0 flex-col items-center justify-start px-8 text-center sm:px-20">
            <h1 className="mb-12 text-5xl font-bold sm:text-6xl">
              Next.js with <span className="font-black text-green-400">Supabase</span>
            </h1>
            <div className="flex flex-1 flex-col justify-center">
                <div className="card">
                  <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
                </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
