import Head from "next/head";
import styles from "./Buyers.module.css";
import BuyerCard from "@/components/BuyerCard.js";
import Link from "next/link";

export default function Buyers({ buyers }) {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>

        <div className={styles.content}>
          {buyers.length === 0 ? (
            <p>No buyers found</p>
          ) : (
            buyers.map((buyer) => <BuyerCard key={buyer.id} {...buyer} />)
          )}
        </div>
        <Link href="contact/contact">Go to Contact Page</Link>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { estateType, minSize } = context.query;

  // Check if estateType and minSize are provided
  if (!estateType || !minSize) {
    return {
      notFound: true, // This will return a 404 page
    };
  }

  // Check if estateType is one of the allowed values
  const allowedestateTypes = ["1", "2", "3", "4", "5", "6", "8", "9"];
  if (!allowedestateTypes.includes(estateType)) {
    return {
      notFound: true,
    };
  }

  // Check if minSize is a number
  if (isNaN(minSize)) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    `http://localhost:3001/api/find-buyers?estateType=${estateType}&minSize=${minSize}`
  );

  // Add a check for the response status
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  const filteredBuyers = data.filter(
    (buyer) => buyer.estateType === estateType && buyer.minSize <= minSize
  );

  return {
    props: {
      buyers: filteredBuyers,
    },
  };
}
