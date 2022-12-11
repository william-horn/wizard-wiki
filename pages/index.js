
import Test from '../components/Test';
import Link from 'next/link';
import Image from 'next/image';
import Enum from '../enums';
import { useAppContext } from '../providers/AppProvider';
import BackgroundImage from '../components/BackgroundImage';
import Text from '../components/typography/Text';
import Page from '../components/containers/Page';
import Header from './Header';
import Container from '../components/containers/Container';

const Home = () => {
  return (
    <Page>
      <Header>
        <Header.Title>Welcome to&nbsp;
          <div className="relative inline-block">
            <span className="relative z-10 text-logo logo-shadow">RaVen</span>
            <Image className="absolute pointer-events-none select-none top-[-25%] left-[60%] logo-image" src="/logo2.png" alt="logo" width={75} height={75}/>
          </div>
        </Header.Title>

        <Text className="p-1 mb-4 text-center">
          The most comprehensive media, analytical, and social website for&nbsp;
          <span className="text-[#ff7411] underline"><Link href="https://www.wizard101.com/">Wizard101.</Link></span>
        </Text>
      </Header>

      <nav className="flex justify-center gap-2 p-3 bottom-line">
        <Text className="font-bold underline"><Link href="">Home</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="">About</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="">Donate</Link></Text>
      </nav>
      
      <Container>
        {/* <Text className="p-5 text-7xl">hello</Text> */}
      </Container>
    </Page>
  )
}

export default Home;