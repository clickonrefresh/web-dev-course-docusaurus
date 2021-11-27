import React from "react";
import Layout from "@theme/Layout";
import styles from './custom.module.css';

export default function MyReactPage() {
  return (
    <Layout>
      <div className={styles.cont}>
      <h1>Heaviest Birds Table</h1>
      <table className={styles.table}>
        <tr>
          <th className={styles.th}>Animal</th>
          <th className={styles.th}>Average Mass [kg (lb)]</th>
          <th className={styles.th}>Maximmum Mass [kg (lb)]</th>
          <th className={styles.th}>Flighted</th>
          <th className={styles.th}>Pooped</th>
        </tr>
        <tr>
        <td>Ostrich</td>
        <td>104(230)</td>
        <td>156.8(346)</td>
        <td>No</td>
        <td>No</td>
        </tr>
        <tr>
        <td>Somali Ostrich</td>
        <td>90(200)</td>
        <td></td>
        <td>No</td>
        <td>No</td>
        </tr>
        <tr>
        <td>Wild Turkey</td>
        <td>13.5(29.8)</td>
        <td>39 (86)</td>
        <td>Yes</td>
        <td>No</td>
        </tr>
      </table>

      <p>OMG I added the className config by myself that pushed the text in slightly from the left Im so clever!</p>
      </div>
    </Layout>
  );
}
