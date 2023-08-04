import RootLayout from '@/layouts/RootLayout';
import '@/styles/globals.css';
import { createContext, useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export const PcBuilderContext = createContext();
export const AuthContext = createContext();

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [components, setComponents] = useState([]);
  const [auth, setAuth] = useState({});
  return (
    <SessionProvider session={session}>
      <AuthContext.Provider value={[auth, setAuth]}>
        <PcBuilderContext.Provider value={[components, setComponents]}>
          <Toaster />
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </PcBuilderContext.Provider>
      </AuthContext.Provider>
    </SessionProvider>
  );
}
