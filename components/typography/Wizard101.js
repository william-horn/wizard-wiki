
import Link from "next/link";

const Wizard101 = ({ link }) => {
  const getRenderedText = () => {
    if (link) {
      return <span className="font-bold underline text-color-3"><Link href="https://www.wizard101.com">Wizard101</Link></span>
    } else {
      return <span className="font-bold text-color-3">Wizard101</span>
    }
  } 

  return getRenderedText();
};

export default Wizard101;