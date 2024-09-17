import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;

// Destructure the props the Asset component may receive: spinner, src and message.  

// It is now a multi-purpose component that can render any combination of the props that are passed to it.

// L 8: The double ampersand first checks if the prop exists, and if so, it renders the element within the boolean expression.
// ie. if spinner is 'true', then render element Spinner etc.

// For example, if we don’t pass a spinner prop, it’s value will be undefined, and so the spinner component won’t be rendered.