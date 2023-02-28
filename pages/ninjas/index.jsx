import Meta from '@/components/Meta';
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
      <Meta
        title="Next MJ | Listing"
        keywords="Next MJ | Listing"
        description="Next MJ | Listing"
      />
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
