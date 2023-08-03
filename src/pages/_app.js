import RootLayout from '@/layouts/RootLayout';
import '@/styles/globals.css';
import { createContext, useState } from 'react';

export const PcBuilderContext = createContext();

export default function App({ Component, pageProps }) {
  const [components, setComponents] = useState([]);
  return (
    <SessionProvider session={session}>
      <PcBuilderContext.Provider value={[components, setComponents]}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </PcBuilderContext.Provider>
    </SessionProvider>
  );
}
