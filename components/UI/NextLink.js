import React from "react";
import Link from "next/link";

const NextLink = ({ className, style, href, hrefAs, children }) => (
  <Link href={href} as={hrefAs}>
    <a className={className} style={{ ...style }}>
      {children}
    </a>
  </Link>
);
export default NextLink;
