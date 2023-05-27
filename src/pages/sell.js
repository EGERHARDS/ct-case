import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Hello MMD</h1>
    
        <div className={styles.content}>
          <h2>Basic form example</h2>
          <p>
            This is simple example of how you could submit a form to another
            page in Next.js, without using a custom <code>submit</code> function
            (e.g. without JavaScript). It is unstyled and unfinished. You can
            use this as base, or implement your own solution.
          </p>
          <p>
            Make sure to read the guide on{" "}
            <a
              href="https://nextjs.org/docs/guides/building-forms"
              target="_blank"
            >
              building forms in Next.js
            </a>
          </p>
          <form action="/buyers" method="GET" className={styles.form}>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" required />
            </label>
            <label>
              <span className={styles.label}>Type of Property</span>
              <select name="estateType" required>
                <option value="">Select a type</option>
                <option value="1">Villa</option>
                <option value="2">Villalejlighed</option>
                <option value="3">Rækkehus</option>
                <option value="4">Ejerlejlighed</option>
                <option value="5">Fritidshus</option>
                <option value="6">Fritidsgrund</option>
                <option value="8">Andelsbolig</option>
                <option value="9">Landejendom</option>
              </select>
            </label>
            <label>
              <span className={styles.label}>Number of Bedrooms</span>
              <select name="bedrooms" required>
                <option value="">Select number of bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </label>
            <label>
              <span className={styles.label}>Size of property</span>
              <input name="minSize" required />
            </label>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
