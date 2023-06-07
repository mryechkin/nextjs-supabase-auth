import SignIn from '@/components/SignIn';
import SearchResults from '@/components/SearchResults';
// import SearchResult from '@/components/SearchResult';

export default function Home() {
  return (
    <div className="card bg-yellow-200 drop-shadow-none">
      <SignIn />
      <SearchResults />
    </div>
  );
}
