import '@/styles/globals.css';
import { useRouter } from 'next/router';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const noSidebarRoutes = ['/Login'];

  return (
    <>
      {noSidebarRoutes.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      )}
    </>
  );
}
