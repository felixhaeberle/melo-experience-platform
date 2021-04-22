import Head from 'next/head';
import { getMeloList } from '../../lib/api';

export default function IndexPage({ interactions }) {

  return (
    <>
      <Head>
        <title>Sheet Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div>
        {interactions.map(interaction=><li>{interaction.name}</li>)}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const interactions = await getMeloList();
  return {
    props: {
      interactions: interactions.slice(1, interactions.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}