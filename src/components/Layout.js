import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Next.js with Supabase Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center px-8 w-full text-center sm:px-20">
        <h1 className="text-5xl font-bold sm:text-6xl">
          Next.js with <span className="text-green-400 font-black">Supabase</span>
        </h1>
        <div className="inline-flex flex-col mt-8 w-full max-w-sm space-y-8">
          {children}
        </div>
      </main>
    </div>
  );
}
