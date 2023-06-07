'use client';

export default function NextEntry(props) {
  let nextId = Number(props.entryId) + 1;

  let nextUrl = '' + Number(nextId);

  async function handleSignOut() {
    const { error } = await signOut();

    if (error) {
      console.error('ERROR signing out:', error);
    }
  }

  return (
    <a
      href={nextUrl}
      className="m-2 border-2 border-black border-black p-1 hover:bg-sky-500"
    >
      NEXT ▶
    </a>
  );
}
