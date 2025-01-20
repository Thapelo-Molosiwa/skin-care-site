import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
