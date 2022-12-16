
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
import useWindowDimensions from '../hooks/useWindowDimensions';
import { isClient } from '../lib/helpers/machineType';
import { useEffect, useRef } from 'react';
import Images from '../public/images';

const Home = () => {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <Container className="w-full h-full p-5 pt-10">
      <Container className="ml-auto mr-auto xl:w-1/2 md:w-3/4 sm:w-full">

        <Container className="relative pb-3 mb-16 bottom-line">
          <Container className="absolute w-[230px] h-[472px] right-[100%]">
            {screenWidth > 1250 && <Image 
              priority 
              alt="wizard picture" 
              src={Images.WizardBannerImg}
              fill 
              className="pointer-events-none select-none xl:block md:hidden home-image" 
              sizes="(min-width: 1280px) 15vw,
              (min-width: 1528px) 15vw,
              (min-width: 1870px) 10vw,
              0vw"
            />}
          </Container>

          <Title className="text-color-5 md:text-left shadows-font" remove="text-white">What is Raven?</Title>
          
          <Text className="mb-5 ml-0 text-lg font-light leading-8 text-left md:ml-7">
            <span className="font-bold">Raven is a modern app for <Wizard101 link/> players, which is designed to make technical information about the game more accessible.</span> 
            &nbsp;We primarily focus on calculating drop rate percentages for mobs, packs, etc, but anything in the game that is deducible we try to provide data for. We also have areas where users can post <span className="font-bold">any</span> 
            &nbsp;interesting discovery they've made in the game that is worth sharing (technical or not).
          </Text>

          <Text className="mb-5 ml-0 text-lg font-light leading-8 md:ml-7">
            Raven is like a combination of social media and wikipedia exclusively for <Wizard101/>!
          </Text>

          <Container className="flex flex-row justify-end mb-3">
            <Link href={Enum.Pages.Explore.url}>
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-color-4 hover:bg-[#35a66e] hover:px-4 mr-4">
                Explore!
              </button>
            </Link>
            <Link href={Enum.Pages.About.url}>
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                Learn more
              </button>
            </Link>
          </Container>
        </Container>
        
        <Container className="relative pb-3 mb-16 bottom-line">
          {/* <Container className="absolute w-[557px] h-[500px] left-[75%] top-[-150px] rotate-[25deg] pointer-events-none select-none">
            {screenWidth > 1280 && <Image 
              priority 
              alt="grandmother raven" 
              src={GrandmaRavenImg} 
              fill 
              className="opacity-30 xl:block md:hidden home-image" 
              sizes="(min-width: 1280px) 33vw,
              (min-width: 1528px) 25vw,
              (min-width: 1870px) 20vw,
              0vw"
            />}
          </Container> */}
          <Container className="relative">
            <Title className="text-color-5 md:text-left shadows-font" remove="text-white">Why use Raven?</Title>

            <Text className="mb-5 ml-0 text-lg font-light leading-8 md:ml-7">
              The official <WikiLink>Wizard101 Wiki</WikiLink> is great and all, but it has a lot of shortcomings. It's great for providing quick surface-level
              information on boss cheats, item drops, quests, spells, etc. However, they keep the technical side of the game extremely hidden away. This is where 
              Raven comes in.
            </Text>

            <Text className="ml-0 text-lg font-light leading-8 mb-9 md:ml-7">
              Raven aims to take all information that can be <span className="font-bold">legitimately</span> extrapolated from the game, and compile it
              down into one place that is accessible to everyone. Such information may include:
            </Text>

            <List className="mb-6 ml-8 md:ml-16">
              <List.Item className="text-yellow-400">Creature drop rates</List.Item>
              <List.Item className="text-yellow-400">Advanced Creature Stats <span className="text-sm font-bold text-[#6e6e6e]">(critical, pip chance, etc...)</span></List.Item>
              <List.Item className="text-yellow-400">Damage Calculations</List.Item>
              <List.Item className="text-yellow-400">Reagent Drop/Spawn Rates</List.Item>
              <List.Item className="text-yellow-400">Pack drop rates</List.Item>
              <Text>etc...</Text>
            </List>
          </Container>

          <Container className="flex flex-wrap p-4 pl-10 pr-10 mb-3 justify-evenly">
            <Container className="relative min-w-[125px] w-[25%] h-[100px] m-5">
              <Image 
                alt="game packs" 
                src={Images.WizPacksImg}
                fill 
                quality={30}
                className="object-cover rounded-[20px]"
                sizes="200px"
              />
            </Container>
            <Container className="relative min-w-[125px] w-[25%] h-[100px] m-5">
              <Image 
                alt="spell critical" 
                src={Images.CriticalShotImg}
                quality={30}
                fill 
                className="object-cover rounded-[20px]"
                sizes="200px"
              />
            </Container>
            <Container className="relative min-w-[125px] w-[25%] h-[100px] m-5">
              <Image 
                alt="wizard101 dungeon" 
                src={Images.DungeonImg}
                quality={30}
                fill 
                className="object-cover rounded-[20px]"
                sizes="329px"
              />
            </Container>
          </Container>

          <Text className="mb-5 ml-0 leading-8 text-md md:ml-7">
            All of these statistics are obtained legitimately through many trials of large sample sizes. We do not cheat, hack, or exploit the game
            in order to get these statistics.
          </Text>
          <Container className="flex flex-row justify-end mb-3">
            <Link href={Enum.Pages.About.url}>
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                Learn more
              </button>
            </Link>
          </Container>
        </Container>

        <Container className="pb-3 mb-16 bottom-line">
          <Title className="text-color-5 md:text-left shadows-font" remove="text-white">What ISN'T Raven?</Title>

          <List className="ml-0 md:ml-3">
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
            <Link href={Enum.Pages.About.url}>
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                Learn more
              </button>
            </Link>
          </Container>
        </Container>

        <Container className="pb-3 mb-16 bottom-line">
          <Title className="text-color-5 md:text-left shadows-font" remove="text-white">FAQ</Title>

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
            <Link href={Enum.Pages.About.url}>
              <button className="p-2 text-base text-lg font-extrabold transition-all rounded bg-secondary hover:px-4">
                Learn more
              </button>
            </Link>
          </Container>
        </Container>

      </Container>
    </Container>
  )
}

export default Home;