import { useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';

function Profile() {

  let { user, isLoading } = useAuth0();
  useEffect(() => {
    console.log('CURRENT USER', user);
  }, [isLoading]);

  return (
    <>
      <h2>{user.email}</h2>
      <img src={user.picture} alt="This is a user gravatar image"/>
    </>
  )
}

export default Profile