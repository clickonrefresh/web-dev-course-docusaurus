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
          <h1>Web Development Bootcamp</h1>
          <h2><a href="https://udemy.com/course/the-web-developer-bootcamp">Full Stack Web Dev Course on Udemy</a></h2>
          <h2><a href="/webdev/webdev-course">Full Stack Web Dev Course JS Pages</a></h2>
          <h2><a href="/webdev/webdev-course-notes">Full Stack Web Dev Course MD Pages</a></h2>
          <h2><a href="/docs/web-dev-course/homepage">Full Stack Web Dev Course Notes Section</a></h2>

          <ol>
            <li>
              <a href="section3/stoning">
                Section 3:
                <span>
                  Monty Python The Life of Brian - Scene 4, The Stoning
                </span>
              </a>
            </li>
            <li>
              <a href="section3/sceana-ix">
                Section 3:
                <span>
                  Monty Python The Life of Brian - Scene 9, Brian Learns To
                  Conjugate
                </span>
              </a>
            </li>
            <li>
              <a href="section4/emmet">
                Section 4:
                <span>Emmet in VSCode</span>
              </a>
            </li>
            <li>
              <a href="section5/">
                Section 5:
                <span>HTML Tables & Forms</span>
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
