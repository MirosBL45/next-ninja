import Head from 'next/head';

function Meta({ title, keywords, description }) {
  return (
    <Head>
      {/* <title>Next MJ | Home</title> */}
      <title>{title}</title>
      {/* <meta name="description" content="Next MJ | Home" /> */}
      <meta name="description" content={description} />
      {/* <meta name="keywords" content="Next MJ | Home" /> */}
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/logoMJ.png" />
      <link rel="shortcut icon" href="/logoMJ.png" type="image/x-icon" />
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Next MJ | Home',
  keywords: 'Next MJ | Home',
  description: 'Next MJ | Home',
};

export default Meta;
