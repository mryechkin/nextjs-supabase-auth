'use client';

export default function PrevEntry(props) {

  let prevId = Number(props.entryId) - 1;

  let prevUrl = '' + Number(prevId);

  async function handleSignOut() {
    const { error } = await signOut();

    if (error) {
      console.error('ERROR signing out:', error);
    }
  }

  return (
    <a href={prevUrl} className="border-black hover:bg-sky-500 p-1 m-2 mb-10 border-2 border-black">◀ PREV</a>
  );
}