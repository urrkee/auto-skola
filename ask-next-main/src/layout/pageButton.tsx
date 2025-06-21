import Link from "next/link";
import React from "react";

type PageButtonProps = {
  name: any;
  href: string;
  className: string;
};

const PageButton: React.FC<PageButtonProps> = ({ name, href, className }) => {
  return (
    <Link href={href} className={className}>
      {name}
    </Link>
  );
};

export default PageButton;
