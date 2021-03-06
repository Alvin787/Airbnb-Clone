import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Airbnb Clone</h1>
        <h1 className={styles.title}>
          <Link href="/listings">See all listings</Link>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Alvin787"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Alvin
        </a>
      </footer>
    </div>
  );
};

export default Home;
