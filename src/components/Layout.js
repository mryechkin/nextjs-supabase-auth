import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next.js with Supabase Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-8 text-center sm:px-20">
        <h1 className="text-5xl font-bold sm:text-6xl">
          Next.js with <span className="font-black text-green-400">Supabase</span>
        </h1>
        <div className="mt-8 inline-flex w-full max-w-sm flex-col space-y-8">
          {children}
        </div>
      </main>
    </div>
  );
}
