
import Container from '../containers/Container';
import Screen from '../containers/Screen';
import Header from '../../pages/Header';
import Image from 'next/image';
import Text from '../typography/Text';
import Footer from '../../pages/Footer';
import Title from '../typography/Title';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useAppContext } from '../../providers/AppProvider';
import Enum from '../../enums';
import NavLink from '../buttons/NavLink';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';

const navPages = [
  Enum.Pages.Home,
  Enum.Pages.Explore,
  Enum.Pages.About,
  Enum.Pages.Donate
]

const HeaderFooterLayout = ({ children }) => {
  const router = useRouter();
  let currentPage;

  for (let page in Enum.Pages) {
    if (Enum.Pages[page].url === router.pathname) {
      currentPage = Enum.Pages[page];
    }
  }

  const renderHeaderContent = () => {
    if (currentPage === Enum.Pages.Explore) {
      return <></>;
    }

    return (
      <Header>
        <Header.Title>
          <Container className="relative inline-block">
            <span className="relative">Welcome to&nbsp;</span>
            {/* <Image className="absolute pointer-events-none select-none top-[-42px] left-[-4%]" src="/wizard-hat.png" alt="wizard hat" width={75} height={65}/> */}
          </Container>
          <Container className="relative inline-block">
            <span className="relative z-10 text-primary logo-shadow">Raven</span>
            <Image className="absolute pointer-events-none select-none top-[-25%] left-[60%] logo-image" src="/logo3.png" alt="logo" width={75} height={75}/>
          </Container>
        </Header.Title>

        {/* <Text className="p-1 mb-5 text-center">
          The most comprehensive media, analytics, and social website for&nbsp;
          <span className="underline text-color-3"><Link href="https://www.wizard101.com/">Wizard101.</Link></span>
        </Text> */}
      </Header>
    );
  }

  return (
    <Container className="bg-primary">
      <Head>
        <title>{currentPage.title}</title>
      </Head>
      {/* Page Header */}
      {renderHeaderContent()}

      {/* Page Nav bar */}
      {/* !issue with generating nav links here; component fragment doesn't have a key prop */}
      <nav className="flex flex-wrap justify-center gap-2 p-3 bottom-line bg-secondary">
        {
          navPages.map((page, index) =>
            <>
              <NavLink
              key={uuidv4()}
              url={page.url} 
              currentUrl={router.pathname}>
                {page.name}
              </NavLink>
              {index < navPages.length - 1 && <Text>|</Text>}
            </>
          )
        }
      </nav>
      
      <Container className="min-h-screen">
        {children}
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
    </Container>
  );
};

export default HeaderFooterLayout;