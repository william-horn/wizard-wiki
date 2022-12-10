
import Test from '../components/Test';
import Link from 'next/link';
import Image from 'next/image';
import Enum from '../enums';
import { useAppContext } from '../providers/AppProvider';

const Home = () => {
  const { theme, setTheme } = useAppContext();

  const onButtonClick = () => {
    setTheme(Enum.Themes.Test.value);
    console.log('the current theme is: ', theme);
  }

  return (
    <>
      {/* <Image alt="test image" src="/test.png" width={100} height={200}/> */}
      <button onClick={onButtonClick} >Hey Click Me</button>
      <Link href="https://www.youtube.com">Some link</Link>
      <Test/>
    </>
  )
}

export default Home;