import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNUP } from '../../graphql-client/mutations/index';
import { Routes } from '../../../src/utils/routes';

interface UserProps {
  name: string;
}

const Signup = (): JSX.Element => {
  const [signupName, setSignupName] = useState('');
  const [signupMutation] = useMutation(SIGNUP, {
    onCompleted: () => console.log('signup completed!'),
  });
  
  const addMutation = (): void =>{
     const URL = `${window.location.origin}${Routes.POST.route}`;
     window.open(URL, '_self');
  }

  return (
      <div>
          <form
            onSubmit={(e): void => {
              e.preventDefault();
              if (signupName !== '') {
                signupMutation({ variables: { input: signupName } });
                addMutation();
              } 
            }}
          >
            <label>
              Author name:
              <input type="text" 
                name="name" 
                value={signupName} 
                onChange={(e) =>
                  setSignupName(e.target.value)
                }
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        {/* )} */}
      </div>
  );
};

export default Signup;
