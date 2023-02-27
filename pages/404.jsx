import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function NotFound() {
  const timeout = 15;

  const [counter, setCounter] = useState(timeout);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, timeout * 1000);
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <Head>
        <title>Next MJ | 404</title>
        <meta name="description" content="Next MJ | 404" />
        <meta name="keywords" content="Next MJ | 404" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoMJ.png" />
      </Head>
      <div className="not-found">
        <h1>Oooops..</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the <Link href={'/'}>Homepage</Link>, or you will be
          redirected in {counter} seconds.
        </p>
      </div>
    </>
  );
}

export default NotFound;
