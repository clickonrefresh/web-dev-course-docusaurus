import React from "react";
import Layout from "@theme/Layout";
import styles from "./custom.module.css";
// import  "../../../../static/img/docusaurus.png"

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

        <h3>Forms Input types Demo</h3>
    
        <form action="/regsinbaka" className={styles.tbody} colspan="10">
          <p>
          <label for="username" >Enter a username</label>
          <input id="username" type="text" placeholder="just text like name" />
          </p>
          <p>
          <label for="password">Choose a password</label>
          <input id="password" type="password" placeholder="password" />
          </p>

          <p>
          <label for="email">Enter your email address</label>
          <input id="email" type="email" placeholder="email" />
          </p>
          <p>
          <label for="currency">Select your currency</label>
          <input id="currency" type="currency" placeholder="currency" />
          </p>

          <br />
          <p>
            <label for="checkbox">Checkbox</label>
            <input id="checkbox" type="checkbox" />
            </p>
            <p>
            <label for="color">Color</label>
            <input id="color" type="color" />
            </p>
            <p>
            <label for="date">Date</label>
            <input id="date" type="date" />
            </p>
            <p>
            <label for="datetime-local">datetime-local</label>
            <input id="datetime-local" type="datetime-local" />
            </p>
            <p>
            <label for="file">File</label>
            <input id="file" type="file" />
            </p>
            <p>
            <label for="img">Image</label>
            <input id="img" type="image" alt="image" placeholder="image" src="static/img/docusaurus.png"/>
            </p>
            <p>
            <label for="numbers">Numbers</label>
            <input id="numbers" type="number" placeholder="numbers only" />
            </p>
            <p>
            <label for="radio">Radio Button</label>
            <input id="radio" type="radio" />
            </p>
            <p>
            <label for="range">Range Slider</label>
            <input id="range" type="range" />
            </p>
            <p>
            <label for="search">Search</label>
            <input id="search" type="search" placeholder="search" />
            </p>
            <p>
            <label for="submit">Submit</label>
            <input id="submit" type="submit" />
            </p>
            <p>
            <label for="url">URL</label>
            <input id="url" type="url" placeholder="url" />
            </p>
            <p>
            <label for="reset">Reset - resets all form actions in the form div</label>
            <input id="reset" type="reset" />
            </p>


            <p>
              <label>you can also nest inputs inside labels, but more common not to.
                <input type="button" placeholder="button" />
              </label>
            </p>
          <h4>
            form 'action'="/path" is the path of the request
          </h4>
        </form>

        <h3>Form Labels</h3>
        <form action="/labels">
          <div class="preference">
            <label for="cheese">Do you like cheese?</label>
            <input type="checkbox" name="cheese" id="cheese" />
          </div>
          <div class="preference">
            <label for="peas">What about peas?</label>
            <input type="range" name="peas" id="peas" />
          </div>
          <div class="preference">
            <label for="ofthese">All 3 of these have id's?</label>
            <input type="checkbox" name="ofthese" id="ofthese" />
          </div>
        </form>

        <p className={styles.foot}>
          This is a footer div!
        </p>
      </div>
    </Layout>
  );
}
