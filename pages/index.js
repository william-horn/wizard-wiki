
import Test from '../components/Test';
import Link from 'next/link';
import Image from 'next/image';
import Enum from '../enums';
import { useAppContext } from '../providers/AppProvider';
import BackgroundImage from '../components/BackgroundImage';
import Text from '../components/typography/Text';
import Page from '../components/containers/Page';
import Container from '../components/containers/Container';
import Title from '../components/typography/Title';
import Wizard101 from '../components/typography/Wizard101';
import WikiLink from '../components/typography/WikiLink';
import List from '../components/typography/List';
import WizardBannerImg from '../public/wiz-pic-2.png';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { isClient } from '../lib/helpers/machineType';
import { useEffect, useRef } from 'react';

const Home = () => {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <>
      {/* <BackgroundImage src="/wiz-pic-1.png"/> */}

      <Container add="w-full h-full p-5 pt-10">
        <Container add="ml-auto mr-auto xl:w-1/2 md:w-3/4 sm:w-full">

          <Container add="relative pb-3 mb-16 bottom-line">
            <Container add="absolute w-[230px] h-[472px] right-[100%]">
              {screenWidth > 1280 && <Image 
                priority 
                alt="wizard picture" 
                src={WizardBannerImg} 
                fill 
                className="pointer-events-none select-none xl:block md:hidden" 
                sizes="(min-width: 1280px) 33vw,
                (min-width: 1528px) 25vw,
                (min-width: 1870px) 20vw,
                0vw"
              />}
            </Container>

            <Title add="text-color-5 md:text-left" remove="text-white">What is Raven?</Title>
            <Text add="mb-5 ml-0 text-lg font-light leading-8 md:ml-7 text-left">
              <span className="font-bold">Raven is a modern <Wizard101 link/> website that grants the community access to information that you mostly won't find anywhere else.</span> 
              &nbsp;We primarily focus on calculating drop rate percentages for mobs, packs, etc. but anything in Wizard101 that is RNG-based we can provide 
              a probability for. We also have categories where users can post <span className="font-bold">any</span> 
              &nbsp;interesting discovery they've made in the game that is worth sharing, whether technical or not.
            </Text>
            <Text add="mb-5 text-lg font-light leading-8 ml-0 md:ml-7">
              Raven is like a combination of social media and wikipedia exclusively for <Wizard101/>!
            </Text>
            <Container add="flex flex-row justify-end mb-3">
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-color-4 hover:bg-[#35a66e] hover:px-4 mr-4">
                <Link href={Enum.Pages.Explore.url}>Explore!</Link>
              </button>
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                <Link href={Enum.Pages.About.url}>Learn more</Link>
              </button>
            </Container>
          </Container>
          
          <Container add="pb-3 mb-16 bottom-line">
            <Title add="text-color-5 md:text-left" remove="text-white">Why use Raven?</Title>
            <Text add="mb-5 text-lg font-light leading-8 ml-7">
              The official <WikiLink>Wizard101 Wiki</WikiLink> is great and all, but it has a lot of shortcomings. It's great for providing quick surface-level
              information on boss cheats, item drops, quests, spells, etc. However, they keep the technical side of the game extremely hidden away. This is where 
              Raven comes in.
            </Text>
            <Text add="text-lg font-light leading-8 mb-9 ml-7">
              Raven aims to take all information that can be <span className="font-bold">legitimately</span> extrapolated from the game, and compile it
              down into one place that is accessible to everyone. Such information may include:
            </Text>
            <List add="mb-6 ml-16">
              <List.Item>Creature drop rates</List.Item>
              <List.Item>Advanced Creature Stats <span className="text-sm font-bold">(critical, pip chance, etc...)</span></List.Item>
              <List.Item>Damage Calculations</List.Item>
              <List.Item>Reagent Drop/Spawn Rates</List.Item>
              <List.Item>Pack drop rates</List.Item>
              <Text>etc...</Text>
            </List>

            <Container add="flex flex-wrap p-4 pl-10 pr-10 mb-3 justify-evenly">
              <Container add="relative min-w-[125px] w-[25%] h-[100px] m-5">
                <Image 
                  alt="game packs" 
                  src="/wiz-packs.png" 
                  fill 
                  className="object-cover rounded-[20px]"
                  sizes="(min-width: 500px) 33vw,
                  (min-width: 700px) 25vw,
                  (min-width: 1000px) 20vw,
                  (min-width: 1400px) 15vw,
                  (min-width: 1800px) 12vw,
                  (min-width: 1920px) 10vw,
                  50vw"
                />
              </Container>
              <Container add="relative min-w-[125px] w-[25%] h-[100px] m-5">
                <Image 
                  alt="spell critical" 
                  src="/critical-shot.png" 
                  fill 
                  className="object-cover rounded-[20px]"
                  sizes="(min-width: 500px) 33vw,
                  (min-width: 700px) 25vw,
                  (min-width: 1000px) 20vw,
                  (min-width: 1400px) 15vw,
                  (min-width: 1800px) 12vw,
                  (min-width: 1920px) 5vw,
                  50vw"
                />
              </Container>
              <Container add="relative min-w-[125px] w-[25%] h-[100px] m-5">
                <Image 
                  alt="wizard101 dungeon" 
                  src="/dungeon-pic-1.jpg" 
                  fill 
                  className="object-cover rounded-[20px]"
                  sizes="(min-width: 500px) 33vw,
                  (min-width: 700px) 25vw,
                  (min-width: 1000px) 20vw,
                  (min-width: 1400px) 15vw,
                  (min-width: 1800px) 12vw,
                  (min-width: 1920px) 5vw,
                  50vw"
                />
              </Container>
            </Container>

            <Text add="mb-5 leading-8 text-md ml-7">
              All of these statistics are obtained legitimately through many trials of large sample sizes. We do not cheat, hack, or exploit the game
              in order to get these statistics.
            </Text>
            <Container add="flex flex-row justify-end mb-3">
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                Learn more
              </button>
            </Container>
          </Container>

          <Container add="pb-3 mb-16 bottom-line">
            <Title add="text-color-5 md:text-left" remove="text-white">What ISN'T Raven?</Title>
            <List add="ml-3">
              <List.Item add="mb-5 text-lg font-light leading-8 ml-7">
                Raven is <span className="font-bold">NOT</span> a cheating, hacking, or exploiting site. We are by the books. Faulty game mechanics in Wizard101
                may be discussed and shared here, but only as a method to help report the issue to legitimate Wizard101 admins.
              </List.Item>
              <List.Item add="mb-5 text-lg font-light leading-8 ml-7">
                We are <span className="font-bold">NOT</span> affiliated with the Wizard101 team or Kingsisle corporation in <span className="font-bold">any way.</span> You
                should not share any of your Wizard101 account details on this website or anywhere else.
              </List.Item>
              <List.Item add="mb-5 text-lg font-light leading-8 ml-7">
                We are <span className="font-bold">NOT</span> a replacement for the official <WikiLink>Wizard101 Wiki</WikiLink>. We may use data from the official wiki, but 
                our goal is only to <span className="font-bold">add</span> new types of information that the original wiki does not document.
              </List.Item>
            </List>
            <Container add="flex flex-row justify-end mb-3">
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                Learn more
              </button>
            </Container>
          </Container>

          <Container add="pb-3 mb-16 bottom-line">
            <Title add="text-color-5 md:text-left" remove="text-white">FAQ</Title>

            <Container add="left-line">
              <Text add="mb-5 text-lg font-bold leading-8 ml-7">
                <span className="text-color-3">Q. </span>
                Why can't I find any information on what I'm looking for?
              </Text>
              <Text add="mb-10 text-lg font-light leading-8 ml-7">
                <span className="font-bold text-color-4">A. </span>
                This website is still really new and we're working hard to populate it with accurate information which may take a long time to get. Just stay tuned!
              </Text>
            </Container>

            <Container add="left-line">
              <Text add="mb-5 text-lg font-bold leading-8 ml-7">
                <span className="text-color-3">Q. </span>
                Why aren't some links working?
              </Text>
              <Text add="mb-10 text-lg font-light leading-8 ml-7">
                <span className="font-bold text-color-4">A. </span>
                As of 12/12/2022, there are no working links on this home page because the pages have not been created yet.
              </Text>
            </Container>

            <Container add="left-line">
              <Text add="mb-5 text-lg font-bold leading-8 ml-7">
                <span className="text-color-3">Q. </span>
                Who created this site?
              </Text>
              <Text add="mb-10 text-lg font-light leading-8 ml-7">
                <span className="font-bold text-color-4">A. </span>
                Just me - an ordinary Wizard101 player. As of now I am the only person working this website, so progress may be slow.
              </Text>
            </Container>

            <Container add="left-line">
              <Text add="mb-5 text-lg font-bold leading-8 ml-7">
                <span className="text-color-3">Q. </span>
                Can I contribute to the development of this site?
              </Text>
              <Text add="mb-10 text-lg font-light leading-8 ml-7">
                <span className="font-bold text-color-4">A. </span>
                YES. Please do. If you have any experience with web design, programming, front-end/back-end, or graphic design, don't hesitate to reach out to me.
                Your help would be very much appreciated.
              </Text>
            </Container>

            <Container add="flex flex-row justify-end mb-3">
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                Learn more
              </button>
            </Container>
          </Container>


        </Container>

      </Container>
    </>
  )
}

Home.displayName = "Home";
export default Home;