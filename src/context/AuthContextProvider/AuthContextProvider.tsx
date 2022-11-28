import React, { ReactNode, useState } from 'react';
export interface AuthContextProviderInterface {}

export interface AppAuthInterface {
  children: ReactNode;
}

export interface AppContextValue {
  user: any;
}

export const AuthContext = React.createContext<any | null>(null);

const AuthContextProvider: React.FC<AppAuthInterface> = props => {
  const localStorageUser = JSON.parse(localStorage.getItem('userData')!);
  const [user, setUser] = useState<any>(localStorageUser ?? null);

  const setUserGobal = (user: any) => {
    localStorage.setItem('userData', JSON.stringify(user));
    setUser(user);
  }

  return (
    <AuthContext.Provider value={[user, setUserGobal]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
