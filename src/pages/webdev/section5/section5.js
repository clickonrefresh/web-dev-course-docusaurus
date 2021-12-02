import React from "react";
import Layout from "@theme/Layout";
import styles from "./custom.module.css";

export default function MyReactPage() {
  return (
    <Layout>
      <div className={styles.cont}>
        <h1>Heaviest Birds Table</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Animal</th>
              <th className={styles.th}>Average Mass [kg (lb)]</th>
              <th className={styles.th}>Flighted</th>
            </tr>
            <tr>
              <th className={styles.th}>kg</th>
              <th className={styles.th}>lb</th>
            </tr>
          </thead>
          <tbody>
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
              <td>N/A</td>
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
          </tbody>
        </table>

        <p className={styles.foot}>
          OMG I added the className config by myself that pushed the text in
          slightly from the left Im so clever!
        </p>
      </div>
    </Layout>
  );
}
