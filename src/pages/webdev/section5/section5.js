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
          <button>
            Got to the regsinbaka. regsinbaka is a placeholder name for the
            button url associated with this form
          </button>
          <p>
            <label for="username">Enter a username</label>
            <input
              id="username"
              type="text"
              placeholder="just text like name"
              name="username"
            />
          </p>
          <p>
            <label for="password">Choose a password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              name="password"
            />
          </p>

          <p>
            <label for="email">Enter your email address</label>
            <input id="email" type="email" placeholder="email" name="email" />
          </p>
          <p>
            <label for="currency">Select your currency</label>
            <input
              id="currency"
              type="currency"
              placeholder="currency"
              name="currency"
            />
          </p>

          <br />
          <p>
            <label for="checkbox">Checkbox</label>
            <input id="checkbox" type="checkbox" />
          </p>
          <p>
            <label for="color">Color</label>
            <input id="color" type="color" name="color" />
          </p>
          <p>
            <label for="date">Date</label>
            <input id="date" type="date" name="date" />
          </p>
          <p>
            <label for="datetime-local">datetime-local</label>
            <input
              id="datetime-local"
              type="datetime-local"
              name="datetime-local"
            />
          </p>
          <p>
            <label for="file">File</label>
            <input id="file" type="file" />
          </p>
          <p>
            <label for="img">Image</label>
            <input
              id="img"
              type="image"
              alt="image"
              placeholder="image"
              src="static/img/docusaurus.png"
            />
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
            <label for="reset">
              Reset - resets all form actions in the form div
            </label>
            <input id="reset" type="reset" />
          </p>

          <p>
            <label>
              you can also nest inputs inside labels, but more common not to.
              <input type="button" placeholder="button" />
            </label>
          </p>
          <h4>form 'action'="/path" is the path of the request</h4>
        </form>

        <h3>Form Labels</h3>
        <form action="/labels">
          <div class="preference">
            <label for="cheese">Do you like cheese?</label>
            <input type="checkbox" name="cheese" id="cheese" />
            <button type="button">
              This buttons attribute is set to button, so that it does not by
              default act as a submit button in a form
            </button>
          </div>
          <div class="preference">
            <label for="peas">What about peas?</label>
            <input type="range" name="peas" id="peas" />
          </div>
          <div class="preference">
            <label for="ofthese">All 3 of these have id's?</label>
            <input type="checkbox" name="ofthese" id="ofthese" />
            <input type="submit" value="SubMITT QUUEEEEEEEEEEERy" />
            {/* <!-- this button doesnt submit the form /bc of the "type" attribute --> */}

            <button type="button">Regular button(wont submit)</button>

            {/* <!-- This button submits the form --> */}

            <button>Submit!</button>

            {/* <!-- So does this one --> */}

            <input type="submit" value="click me!"></input>
          </div>
        </form>
        <button>
          Outside of the form element a button has no default function of submit
          anymore
        </button>

        <div className={styles.cont}>
          <h1>The Name Attribute</h1>
          <form action="/login" className={styles.tbody} colspan="10">
            <button>
              the name attribute is what defines the html element being used or
              called. be precise in the naming or servers can misidentify your
              tags. The current method of fetching data is using a standard getr
              request, this is why we see the name an dpassword being passed
              into the url
            </button>
            <p>
              <label for="username">Enter a username</label>
              <input
                id="username"
                type="text"
                placeholder="just text like name"
                name="username"
              />
            </p>
            <p>
              <label for="password">Choose a password</label>
              <input id="password" type="password" placeholder="password" />
            </p>
          </form>
        </div>
        <div>
          <form action="https://www.youtube.com/results">
            <input type="text" name="search_query" />
            <button>Search Youtube</button>
          </form>
          <form action="https://www.google.com/search">
            <input type="text" name="q" />
            <button>Search Google</button>
          </form>
          <form action="https://www.reddit.com/search">
            <input type="text" name="q" />
            <button>Reddit Search</button>
          </form>
          <form action="https://www.google.com/search">
            <input type="text" name="q" />
            <button>Jeffrey and the scrotes</button>
          </form>
        </div>
        <p className={styles.foot}>This is a footer div!</p>
      </div>
    </Layout>
  );
}
