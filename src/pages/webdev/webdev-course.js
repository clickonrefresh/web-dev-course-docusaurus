import "./styles.css"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>

      <body>
      {/* <img
      // src="https://images.unsplash.com/photo-1583642037383-861ac716c3f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      // alt="Logo"
      // label="Clickonrefresh"
      // width="100%"
      // height="100%"
      // background-position="absolute"


    /> */}
        <div>
          <h1>Make Your Selection</h1>
          <h2>Monty Python Shenanigans</h2>

          <ol>
            <li>
              <a href="section3/stoning.html">
                Section 3:
                <span>
                  Monty Python The Life of Brian - Scene 4, The Stoning
                </span>
              </a>
            </li>
            <li>
              <a href="section3/sceana-ix.html">
                Section 3:
                <span>
                  Monty Python The Life of Brian - Scene 9, Brian Learns To
                  Conjugate
                </span>
              </a>
            </li>
            <li>
              <a href="section4/emmet.html">
                Section 4:
                <span>Emmet in VSCode</span>
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2>Dont Panic!</h2>
          <ul>
            <h3>
              <li>Projects & Portfolio</li>
            </h3>
            <ul>
              <li>
                <a href="https://clickonrefresh.github.io">
                  {" "}
                  Clickonrefresh 3D
                </a>
              </li>
              <li>
                <a href="https://clickonrefresh.github.io/clickonodoo/">
                  ClickonOdoo - Odoo CE customised, dockerized and automated
                </a>
              </li>
            </ul>

            <h3>
              <li>Profile</li>
            </h3>
            <ul>
              <li>
                <a href="https://linkedin.com/in/clickonrefresh">
                  Linkedin - Clickonrefresh
                </a>
              </li>
            </ul>
          </ul>

        </div>
      </body>

    </Layout>
  );
}
