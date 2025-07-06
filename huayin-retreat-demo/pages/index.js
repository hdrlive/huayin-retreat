import Head from 'next/head';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Huayin Spring – Private Retreat Circle</title>
      </Head>
      <main>
        <h1 className="title">Huayin Spring – Private Retreat Circle</h1>
        <p className="description">Willkommen bei unserem exklusiven Gesundheitsprogramm.</p>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Nachricht" />
          <button type="submit">Absenden</button>
        </form>
      </main>
    </div>
  );
}

