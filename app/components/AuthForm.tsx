'use client';

import * as React from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { useRouter } from 'next/navigation';

export const AuhtForm = (): JSX.Element => {
  const router = useRouter();
  const [view, setView] = React.useState('sign-in');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (view === 'create-account') {
      const res = await fetch(`/api/user/create`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const err = await res.json();
        console.log('err', err);
      } else {
        router.push('/dashboard');
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <form onSubmit={onSubmit} className='flex flex-col'>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type={'email'}
          name={'email'}
          placeholder={'Enter Email'}
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type={'password'}
          name={'password'}
          placeholder={'Enter Password'}
        />
        <Button
          displayText={view === 'sign-in' ? 'Sign In' : 'Create Account'}
        />
      </form>
      {view === 'sign-in' ? (
        <p className='mt-2 text-center text-white'>
          Not registered?
          <span
            onClick={() => setView('create-account')}
            className='cursor-pointer'
          >
            {' '}
            Create Account
          </span>
        </p>
      ) : (
        <p className='mt-2 text-center text-white'>
          Already registered?
          <span onClick={() => setView('sign-in')} className='cursor-pointer'>
            {' '}
            Sign In
          </span>
        </p>
      )}
    </div>
  );
};
