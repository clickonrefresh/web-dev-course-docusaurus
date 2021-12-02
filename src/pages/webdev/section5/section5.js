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

        <h3>Forms Demo</h3>

        <form action="/regsinbaka">
          <input type="text" placeholder="just text like name" />
          <input type="password" placeholder="password" />
          <input type="email" placeholder="email" />
          <input type="currency" placeholder="currency" />
          <table>
            <input type="checkbox" />
            <input type="color" />
            <input type="date" />
            <input type="datetime-local" />
            <input type="file" />
            <input type="image" alt="image" placeholder="image" />
            <input type="number" placeholder="numbers only" />
            <input type="radio" />
            <input type="range" />

            <input type="search" placeholder="search" />
            <input type="submit" />
            <input type="url" placeholder="url" />
            <input type="reset" />
          </table>
          <h4>
            You want the regsinbaka? All input type in this form fall under the
            form action of "/regsinbaka"
          </h4>
        </form>
        <p className={styles.foot}>
          OMG I added the className config by myself that pushed the text in
          slightly from the left Im so clever!
        </p>
      </div>
    </Layout>
  );
}
