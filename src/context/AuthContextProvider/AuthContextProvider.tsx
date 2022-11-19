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
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
