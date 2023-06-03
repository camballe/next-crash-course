import Nav from "./Nav";
import Meta from "./Meta";
import React from "react";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
