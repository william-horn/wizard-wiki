
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
import Title from '../components/typography/Title';
import Footer from './Footer';
import Wizard101 from '../components/typography/Wizard101';
import WikiLink from '../components/typography/WikiLink';
import List from '../components/typography/List';

const Home = () => {
  return (
    <Page className="bg-primary">

      {/* Page Header */}
      <Header>
        <Header.Title>
          <div className="relative inline-block">
            <span className="relative">Welcome to&nbsp;</span>
            <Image className="absolute pointer-events-none select-none top-[-42px] left-[-10px]" src="/wizard-hat.png" alt="wizard hat" width={75} height={65}/>
          </div>
          <div className="relative inline-block">
            <span className="relative z-10 text-logo logo-shadow">RaVen</span>
            <Image className="absolute pointer-events-none select-none top-[-25%] left-[60%] logo-image" src="/logo2.png" alt="logo" width={75} height={75}/>
          </div>
        </Header.Title>

        <Text className="p-1 mb-5 text-center">
          The most comprehensive media, analytical, and social website for&nbsp;
          <span className="text-[#bb32bb] underline"><Link href="https://www.wizard101.com/">Wizard101.</Link></span>
        </Text>
      </Header>

      {/* Page Nav bar */}
      <nav className="flex flex-wrap justify-center gap-2 p-3 bottom-line bg-secondary">
        <Text className="font-bold underline hover:text-nav-link-hover"><Link href="#">Home</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="">Raven</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="">About</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="">Donate</Link></Text>
      </nav>
      
      {/* Page Body */}
      <Container className="w-full p-3 pt-10">
        <Container className="w-1/2 ml-auto mr-auto">

          <Container className="pb-3 mb-16 bottom-line">
            <Title className="text-[#55ebff]">What is Raven?</Title>
            <Text className="mb-5 text-lg font-light leading-8 ml-7">
              Raven is a modern web application that allows people in the <Wizard101/> community contribute to a database of intellectual documentation within the game. 
              This means users may contribute information about legitimately observed commercial features in the game that are not documented in the official <WikiLink>Wizard101 wiki.</WikiLink>
              &nbsp;However, Raven is not intended to replace the official Wizard101 wiki.
            </Text>
            <Container className="flex flex-row justify-end gap-4 mb-3">
              <button className="p-2 font-extrabold text-lg text-base bg-[#2d9361] rounded">
                Get Started
              </button>
              <button className="p-2 font-extrabold text-lg text-base bg-[#bb32bb] rounded">
                Learn more
              </button>
            </Container>
          </Container>
          
          <Container className="pb-3 mb-16 bottom-line">
            <Title className="text-[#55ebff]">Why use Raven?</Title>
            <Text className="mb-5 text-lg font-light leading-8 ml-7">
              The official <WikiLink>Wizard101 Wiki</WikiLink> is great and all, but it has a lot of shortcomings. It's great for providing quick surface-level
              information on boss cheats, item drops, quests, spells, etc. However, they keep the technical side of the game extremely well-hidden. This is where 
              Raven comes in.
            </Text>
            <Text className="mb-5 text-lg font-light leading-8 ml-7">
              Raven aims to take all information that can be <span className="font-bold">legitimately</span> extrapolated from the game, and compile it
              down into one place that is accessible to everyone. Such information may include:
            </Text>
            <List className="mb-5 ml-16">
              <List.Item>Creature drop rates</List.Item>
              <List.Item>Creature Statistics</List.Item>
              <List.Item>Damage Calculations</List.Item>
              <List.Item>Reagent Drop/Spawn Rates</List.Item>
              <List.Item>Pack drop rates</List.Item>
              <Text>etc...</Text>
            </List>
            <Text className="mb-5 text-lg font-light leading-8 ml-7">
              All of these statistics are obtained legitimately through many trials of large sample sizes. We do not cheat, hack, or exploit the game
              in order to get these statistics.
            </Text>
            <Container className="flex flex-row justify-end mb-3">
              <button className="p-2 font-extrabold text-lg text-base bg-[#bb32bb] rounded">
                Learn more
              </button>
            </Container>
          </Container>

          <Container className="pb-3 mb-16 bottom-line">
            <Title className="text-[#55ebff]">What ISN'T Raven?</Title>
            <List className="ml-3">
              <List.Item className="mb-5 text-lg font-light leading-8 ml-7">
                Raven is <span className="font-bold">NOT</span> a cheating, hacking, or exploiting site. We are by the books. Faulty game mechanics in Wizard101
                may be discussed and shared here, but only as a method to help report the issue to legitimate Wizard101 admins.
              </List.Item>
              <List.Item className="mb-5 text-lg font-light leading-8 ml-7">
                We are <span className="font-bold">NOT</span> affiliated with the Wizard101 team or Kingsisle corporation in <span className="font-bold">any way.</span> You
                should not share any of your Wizard101 account details on this website or anywhere else.
              </List.Item>
              <List.Item className="mb-5 text-lg font-light leading-8 ml-7">
                We are <span className="font-bold">NOT</span> a replacement for the official <WikiLink>Wizard101 Wiki</WikiLink>. We may use data from the official wiki, but 
                our goal is only to <span className="font-bold">add</span> new types of information that the original wiki does not document.
              </List.Item>
            </List>
            <Container className="flex flex-row justify-end mb-3">
              <button className="p-2 font-extrabold text-lg text-base bg-[#bb32bb] rounded">
                Learn more
              </button>
            </Container>
          </Container>


        </Container>
      </Container>

      <Footer className="pb-10 top-line">
        <Footer.Title className="p-4 text-center">Reach Out</Footer.Title>
        <Container className="flex flex-wrap items-start justify-center gap-12 p-4 pb-10">

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0">Contributors</Title>
            <Text>William J. Horn</Text>
          </Container>

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0">Contact</Title>
            <Text>Phone: <span className="text-red-700">(not available)</span></Text>
            <Text>Email: <span className="underline">williamjosephhorn@gmail.com</span></Text>
          </Container>

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0">Other Shit</Title>
            <Text>Me</Text>
            <Text>Myself</Text>
          </Container>

        </Container>

        <Footer.Title className="p-4 text-center">Disclaimer:</Footer.Title>
        <Container className="w-4/5 ml-auto mr-auto">
          <Text className="text-center">
            <span className="font-bold">Please note: </span>
            Raven is in no way affiliated with the Wizard101 team or Kingsisle corporation. We are entirely a private and separate entity. All concerns about Wizard101
            or inquiries to Wizard101 leadership should be directed towards actual Wizard101 staff. If you need assistance beyond what a normal player can grant you, then 
            you may send an email to <span className="underline">support@wizard101.com</span> or <span className="underline">help@kingsisle.com</span>, but do not seek our help
            for such assistance. We also do not represent the thoughts, beliefs, strategies, or intentions of Kingsisle in any way.
          </Text>
        </Container>
      </Footer>
    </Page>
  )
}

export default Home;