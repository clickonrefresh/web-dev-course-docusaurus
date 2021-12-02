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
              <th className={styles.th} rowspan="2">
                Animal
              </th>
              <th className={styles.th} colspan="2">
                Average Mass [kg (lb)]
              </th>
              <th className={styles.th} rowspan="2">
                Flighted
              </th>
              <th className={styles.th} rowspan="2">
                Extinct
              </th>
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
        <br />
        <table>
          <thead>
            <tr>
              <th>Subscription</th>
              <th>Price</th>
              <th>Support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free</td>
              <td>Free</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Personal</td>
              <td>$9.99</td>
              <td>Weekdays</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>$49.99</td>
              <td>24/7</td>
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
