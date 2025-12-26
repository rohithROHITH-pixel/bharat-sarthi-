'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useAuth } from '../provider';

interface UserState {
  user: User | null;
  loading: boolean;
  claims: {
    admin?: boolean;
    loaded: boolean;
  };
}

const UserContext = createContext<UserState>({
  user: null,
  loading: true,
  claims: { loaded: false },
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const [state, setState] = useState<UserState>({
    user: null,
    loading: true,
    claims: { loaded: false },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      let claims = { loaded: true };
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        claims = { ...claims, ...tokenResult.claims };
      }
      setState({ user, loading: false, claims });
    });

    return () => unsubscribe();
  }, [auth]);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  return useContext(UserContext);
};
