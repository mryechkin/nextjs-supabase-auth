import Link from 'next/link';
import ADMINS from '../../../constants/admins'
import { redirect } from 'next/navigation';
import { addLeadingZeros } from '@/lib/utils';

import SignOut from 'src/components/SignOut';
import createClient from 'src/lib/supabase-server';

export default async function Entry(props) {
  const resource_url = 'https://qojysegeddztsxdmhjfb.supabase.co/storage/v1/object/public/khajistan-digital-archive/'
  console.log('propz', props.params.id);
  let databaseValue = addLeadingZeros(props.params.id);
  console.log('db val', databaseValue);
  const supabase = createClient();
  // const router = useRouter();
  // console.log('ROUTER', router)

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!(user && ADMINS.includes(user.email))) {
    redirect('/');
  } else if (user && ADMINS.includes(user.email)) {
    console.log('user is admin: ', user.email)
  }

  const { data, error } = await supabase
    .from('digital_archive')
    .select()
    .eq('id', databaseValue)
    .limit(1)

  let string = '';
  let resource = '';

  if (error) {
    string = 'error: ' + JSON.stringify(error)
  } else if (data.length === 0) {
    string = 'entry not found'
  } else {
    string = JSON.stringify(data, null, 4);
    resource = data[0].resource_endpoint;
  }

  let media_tag;

  if (data[0]?.resource_type === 'video') {
    media_tag = <div><video controls><source src={resource_url + resource}></source></video></div>
  } else if (data[0]?.resource_type === 'image') {
    media_tag = <div><img src={resource_url + resource} width="500px"></img></div>
  } 

  
  

  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect('/');
  // }

  return (
    // <div className="card">
    //   <h2>User Profile</h2>
    //   <code className="highlight">{user.email}</code>
    //   <div className="heading">Last Signed In:</div>
    //   <code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
    //   <Link className="button" href="/">
    //     Go Home
    //   </Link>
    //   <SignOut />
    // </div>
    <div>
    <div>{string}</div>
    <div>{resource_url + resource}</div>
    <div>{media_tag}</div>
    </div>

  );
}


// export async function getServerSideProps(context) {
//   const param = context.query
//   // No-op since getStaticPaths needs getStaticProps to be called.
//   return { props: param }
// }
