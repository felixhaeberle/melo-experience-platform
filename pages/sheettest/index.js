import Head from 'next/head';
import { getEmojiList } from '../../lib/api';

export default function IndexPage({ emojis }) {

  return (
    <>
      <Head>
        <title>Sheet Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div>
        {emojis.map(emoji=><li>{emoji.elem}</li>)}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const emojis = await getEmojiList();
  console.log(emojis.slice(1, emojis.length))
  return {
    props: {
      emojis: emojis.slice(1, emojis.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}