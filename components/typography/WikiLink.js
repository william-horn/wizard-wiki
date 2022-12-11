import Link from "next/link";

const WikiLink = ({ children }) => {
  return (
    <span className="underline">
      <Link href="https://www.wizard101central.com/wiki/Wizard101_Wiki">{children}</Link>
    </span>
  );
};

export default WikiLink;