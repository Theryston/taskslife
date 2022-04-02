import type { NextPage } from "next";
import { signIn, useSession, signOut } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!session ? (
          <button onClick={() => signIn()}>Login</button>
        ) : (
          <button onClick={() => signOut()}>Logout</button>
        )}
      </main>
    </div>
  );
};

export default Home;