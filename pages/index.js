
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
          <Container className="relative inline-block">
            <span className="relative">Welcome to&nbsp;</span>
            {/* <Image className="absolute pointer-events-none select-none top-[-42px] left-[-4%]" src="/wizard-hat.png" alt="wizard hat" width={75} height={65}/> */}
          </Container>
          <Container className="relative inline-block">
            <span className="relative z-10 text-primary logo-shadow">RaVen</span>
            <Image className="absolute pointer-events-none select-none top-[-25%] left-[60%] logo-image" src="/logo2.png" alt="logo" width={75} height={75}/>
          </Container>
        </Header.Title>

        {/* <Text className="p-1 mb-5 text-center">
          The most comprehensive media, analytics, and social website for&nbsp;
          <span className="underline text-color-3"><Link href="https://www.wizard101.com/">Wizard101.</Link></span>
        </Text> */}
      </Header>

      {/* Page Nav bar */}
      <nav className="flex flex-wrap justify-center gap-2 p-3 bottom-line bg-secondary">
        <Text className="font-bold underline"><Link href="/">Home</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="/dashboard">Raven</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="/about">About</Link></Text>
        <Text>|</Text>
        <Text className="font-bold underline"><Link href="/donate">Donate</Link></Text>
      </nav>
      
      {/* Page Body */}
      <Container>
        {/* <BackgroundImage src="/wiz-pic-1.png"/> */}

        <Container className="w-full h-full p-3 pt-10">
          <Container className="ml-auto mr-auto xl:w-1/2 md:w-3/4 sm:w-full">

            <Container className="relative pb-3 mb-16 bottom-line">
              <Image src="/wiz-pic-2.png" width={221} height={514} className="absolute right-[100%] select-none pointer-events-none xl:block md:hidden"/>

              <Title className="text-color-5">What is Raven?</Title>
              <Text className="mb-5 text-lg font-light leading-8 ml-7">
                <span className="font-bold">Raven is a modern web application that grants the <Wizard101 link/> community access to information that you mostly won't find anywhere else.</span> 
                &nbsp;We primarily focus on documenting useful information such as drop rate percentages for mobs, packs, etc, but we also have sub-threads where users can post <span className="font-bold">any</span> 
                &nbsp;interesting discovery they've made in the game that is worth sharing.
              </Text>
              <Text className="mb-5 text-lg font-light leading-8 ml-7">
                Raven is like a combination of social media and wikipedia exclusively for <Wizard101/>!
              </Text>
              <Container className="flex flex-row justify-end gap-4 mb-3">
                <button className="p-2 text-base text-lg font-extrabold rounded bg-color-4 animate-bounce">
                  <Link href="/dashboard">Explore!</Link>
                </button>
                <button className="p-2 text-base text-lg font-extrabold rounded bg-color-3">
                  Learn more
                </button>
              </Container>
            </Container>
            
            <Container className="pb-3 mb-16 bottom-line">
              <Title className="text-color-5">Why use Raven?</Title>
              <Text className="mb-5 text-lg font-light leading-8 ml-7">
                The official <WikiLink>Wizard101 Wiki</WikiLink> is great and all, but it has a lot of shortcomings. It's great for providing quick surface-level
                information on boss cheats, item drops, quests, spells, etc. However, they keep the technical side of the game extremely hidden away. This is where 
                Raven comes in.
              </Text>
              <Text className="mb-5 text-lg font-light leading-8 ml-7">
                Raven aims to take all information that can be <span className="font-bold">legitimately</span> extrapolated from the game, and compile it
                down into one place that is accessible to everyone. Such information may include:
              </Text>
              <List className="mb-10 ml-16">
                <List.Item>Creature drop rates</List.Item>
                <List.Item>Creature Statistics</List.Item>
                <List.Item>Damage Calculations</List.Item>
                <List.Item>Reagent Drop/Spawn Rates</List.Item>
                <List.Item>Pack drop rates</List.Item>
                <Text>etc...</Text>
              </List>

              <Container className="flex flex-wrap p-4 pl-10 pr-10 mb-10 justify-evenly">
                <Container className="relative min-w-[125px] w-[25%] h-[100px] m-5">
                  <Image src="/wiz-packs.png" fill className="object-cover rounded-[20px]"/>
                </Container>
                <Container className="relative min-w-[125px] w-[25%] h-[100px] m-5">
                  <Image src="/critical-shot.png" fill className="object-cover rounded-[20px]"/>
                </Container>
                <Container className="relative min-w-[125px] w-[25%] h-[100px] m-5">
                  <Image src="/dungeon-pic-1.jpg" fill className="object-cover rounded-[20px]"/>
                </Container>
              </Container>

              <Text className="mb-5 leading-8 text-md ml-7">
                All of these statistics are obtained legitimately through many trials of large sample sizes. We do not cheat, hack, or exploit the game
                in order to get these statistics.
              </Text>
              <Container className="flex flex-row justify-end mb-3">
                <button className="p-2 text-base text-lg font-extrabold rounded bg-color-3">
                  Learn more
                </button>
              </Container>
            </Container>

            <Container className="pb-3 mb-16 bottom-line">
              <Title className="text-color-5">What ISN'T Raven?</Title>
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
                <button className="p-2 text-base text-lg font-extrabold rounded bg-color-3">
                  Learn more
                </button>
              </Container>
            </Container>

            <Container className="pb-3 mb-16 bottom-line">
              <Title className="text-color-5">FAQ</Title>

              <Container className="left-line">
                <Text className="mb-5 text-lg font-bold leading-8 ml-7">
                  <span className="text-color-3">Q. </span>
                  Why can't I find any information on what I'm looking for?
                </Text>
                <Text className="mb-10 text-lg font-light leading-8 ml-7">
                  <span className="font-bold text-color-4">A. </span>
                  This website is still really new and we're working hard to populate it with accurate information which may take a long time to get. Just stay tuned!
                </Text>
              </Container>

              <Container className="left-line">
                <Text className="mb-5 text-lg font-bold leading-8 ml-7">
                  <span className="text-color-3">Q. </span>
                  Why aren't some links working?
                </Text>
                <Text className="mb-10 text-lg font-light leading-8 ml-7">
                  <span className="font-bold text-color-4">A. </span>
                  As of 12/12/2022, there are no working links on this home page because the pages have not been created yet.
                </Text>
              </Container>

              <Container className="left-line">
                <Text className="mb-5 text-lg font-bold leading-8 ml-7">
                  <span className="text-color-3">Q. </span>
                  Who created this site?
                </Text>
                <Text className="mb-10 text-lg font-light leading-8 ml-7">
                  <span className="font-bold text-color-4">A. </span>
                  Just me - an ordinary Wizard101 player. As of now I am the only person working this website, so progress may be slow.
                </Text>
              </Container>

              <Container className="left-line">
                <Text className="mb-5 text-lg font-bold leading-8 ml-7">
                  <span className="text-color-3">Q. </span>
                  Can I contribute to the development of this site?
                </Text>
                <Text className="mb-10 text-lg font-light leading-8 ml-7">
                  <span className="font-bold text-color-4">A. </span>
                  YES. Please do. If you have any experience with web design, programming, front-end/back-end, or graphic design, don't hesitate to reach out to me.
                  Your help would be very much appreciated.
                </Text>
              </Container>

              <Container className="flex flex-row justify-end mb-3">
                <button className="p-2 text-base text-lg font-extrabold rounded bg-color-3">
                  Learn more
                </button>
              </Container>
            </Container>


          </Container>

        </Container>
      </Container>

      <Footer className="pb-10 top-line">
        <Footer.Title className="p-4 text-center">Reach Out</Footer.Title>
        <Container className="flex flex-wrap items-start justify-start gap-12 p-4 pb-10 sm:justify-between md:justify-center lg:justify-center xl:justify-center">

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0">Contributors</Title>
            <Text><span className="font-bold">Lead dev: </span>William J. Horn</Text>
          </Container>

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0">Contact</Title>
            <Text><span className="font-bold">Phone:</span> <span className="underline">(not available)</span></Text>
            <Text><span className="font-bold">Email:</span> <span className="underline">williamjosephhorn@gmail.com</span></Text>
            <Text><span className="font-bold">Discord:</span> <span className="underline">Equality#6453</span></Text>
            <Text><span className="font-bold">Github:</span> <span className="underline"><Link href="https://github.com/william-horn">https://github.com/william-horn</Link></span></Text>
          </Container>

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0">Coming soon</Title>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </Container>

        </Container>

        <Footer.Title className="p-4 text-center">Disclaimer:</Footer.Title>
        <Container className="w-4/5 ml-auto mr-auto">
          <Text className="text-center">
            <span className="font-bold">Please note: </span>
            Raven is in no way affiliated with the Wizard101 team or Kingsisle corporation. We are entirely a private and separate entity. All concerns about Wizard101
            or inquiries to Wizard101 leadership should be directed towards actual Wizard101 staff. If you need assistance beyond what a normal player can grant you, then 
            you may send an email to <span className="underline">support@wizard101.com</span> or <span className="underline">help@kingsisle.com</span>, but do not seek our help
            for such assistance. We also do not represent the thoughts, beliefs, strategies, ideals, or intentions of Kingsisle in any way.
          </Text>
        </Container>
      </Footer>
    </Page>
  )
}

Home.displayName = "Home";
export default Home;