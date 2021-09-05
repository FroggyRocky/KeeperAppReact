import React from "react";

export default function Footer(props) {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer>
      <p>{year} by Danila</p>
    </footer>
  );
}
