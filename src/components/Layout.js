import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next.js with Supabase Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 text-center sm:px-20">
        <h1 className="text-5xl font-bold sm:text-6xl">
          Next.js with <span className="font-black text-green-400">Supabase</span>
        </h1>
        <div className="inline-flex flex-col w-full max-w-sm mt-8 space-y-8">
          {children}
        </div>
      </main>
    </div>
  );
}
