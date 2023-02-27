import Head from 'next/head';

//first: it tells how many HTML pages need to be made based on our data from server
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false, //if user enter id that does not exists, send him to 404 page
  };
}

//second: for each item runs this to fetch data for every single item, and pass it down to component
export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { ninja: data },
  };
}

function Details({ ninja }) {
  return (
    <>
      <Head>
        <title>Next MJ | Details</title>
        <meta name="description" content="Next MJ | Details" />
        <meta name="keywords" content="Next MJ | Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoMJ.png" />
      </Head>
      <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </div>
    </>
  );
}

export default Details;
