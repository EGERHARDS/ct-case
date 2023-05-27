import styles from 'src/pages/buyers/Buyers.module.css'; // Import styles

export default function BuyerCard({
  id,
  maxPrice,
  minSize,
  adults,
  children,
  description,
  estateType,
  takeoverDate,
}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.id}>ID: {id}</h2>
      <p className={styles.maxPrice}>Maximum Price: {maxPrice}</p>
      <p className={styles.minSize}>Minimum Size: {minSize}</p>
      <p className={styles.adults}>Adults: {adults}</p>
      <p className={styles.children}>Children: {children}</p>
      <p className={styles.description}>Description: {description}</p>
      <p className={styles.estateType}>Estate Type: {estateType}</p>
      <p className={styles.takeoverDate}>Takeover Date: {takeoverDate}</p>
      <button className={styles.chooseButton} onClick={() => alert(`You chose buyer with ID: ${id}`)}>
        Choose this buyer
      </button>
    </div>
  );
}
