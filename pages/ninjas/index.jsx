import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Ninjas.module.css';

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
}

function Ninjas({ ninjas }) {
  return (
    <>
      <Head>
        <title>Next MJ | Listing</title>
        <meta name="description" content="Next MJ | Listing" />
        <meta name="keywords" content="Next MJ | Listing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoMJ.png" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <h3 className={styles.single}>{ninja.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Ninjas;
