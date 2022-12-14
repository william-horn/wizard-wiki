
import Container from '../../containers/Container';
import Image from 'next/image';
import Text from '../../typography/Text';
import Title from '../../typography/Title';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import Enum from '../../../enums';
import Head from 'next/head';
import Navbar from './Navbar';
import { useAppContext } from '../../../providers/AppProvider';
import { useRef, useEffect } from 'react';

const HeaderFooterLayout = ({ children }) => {
  const { currentPage, layoutDiff } = useAppContext();
  const header = useRef(null);

  // Determine if we should transition layout sub-components
  const transitionHeader = layoutDiff('header');

  // Handle layout sub-component transitions between pages
  useEffect(() => {
    /* 
      If header override is false, the current page may not have a header, in which case exit out.
      If header override is true, header will always exist.
    */
    if (!header.current) return;
    /*
      If there is no difference in headers between pages, exit out.
    */
    if (!transitionHeader) return;

    /* 
      From here on, we know there is a difference in header visibility between pages and a transition will take place.
      Start computing header size.
    */
    header.current.style.setProperty(
      '--client-height', 
      header.current.clientHeight + 1 + 'px'
    ); // +1 pixel because of navbar border thickness

    // Modify CSS variables for the transition-header class to use.
    if (currentPage.excludes('header')) {
      header.current.style.setProperty('--header-anim', 'hide-header');
    } else {
      header.current.style.setProperty('--header-anim', 'show-header');
    }

    // Apply the transition class.
    header.current.classList.add('transition-header');
  });
  
  return (
    <Container add="bg-primary">
      <Head>
        <title>{currentPage.title}</title>
      </Head>
      {/* Page Header */}
      {/* Override should be false when we load into a page and it doesn't need a transition. */}
      {/* If there is no last page, override should be false because there is nothing to transition from. */}
      {/* If there is a last page, but the last page and first page both have the same header state, there is no need to transition. */}
      <Header ref={header} override={transitionHeader}>
        <Header.Title>
          <Container add="relative inline-block">
            <span className="relative">Welcome to&nbsp;</span>
            {/* <Image className="absolute pointer-events-none select-none top-[-42px] left-[-4%]" src="/wizard-hat.png" alt="wizard hat" width={75} height={65}/> */}
          </Container>
          <Container add="relative inline-block">
            <span className="relative z-10 text-primary logo-shadow">Raven</span>
            <Image 
              className="absolute pointer-events-none select-none top-[-25%] left-[60%] logo-image" 
              src="/logo3.png" 
              alt="logo" 
              width={75} 
              height={75}
            />
          </Container>
        </Header.Title>

        {/* <Text add="p-1 mb-5 text-center">
          The most comprehensive media, analytics, and social website for&nbsp;
          <span className="underline text-color-3"><Link href="https://www.wizard101.com/">Wizard101.</Link></span>
        </Text> */}
      </Header>

      {/* Page Nav bar */}
      <Navbar/>
      
      <Container add="min-h-screen">
        {children}
      </Container>

      <Footer add="pb-10 top-line">
        <Footer.Title className="p-4 text-center">Reach Out</Footer.Title>
        <Container add="flex flex-wrap items-start justify-between gap-12 p-4 pb-10 lg:justify-center">

          <Container add="p-3 pt-0 left-line">
            <Title add="p-0 text-left" remove="p-2 text-center">Contributors</Title>
            <Text><span className="font-bold">Lead dev: </span>William J. Horn</Text>
          </Container>

          <Container add="p-3 pt-0 left-line">
            <Title add="p-0 text-left" remove="p-2 text-center">Contact</Title>
            <Text><span className="font-bold">Phone:</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">Email:</span> <span className="underline">williamjosephhorn@gmail.com</span></Text>
            <Text><span className="font-bold">Discord:</span> <span className="underline">Equality#6453</span></Text>
            <Text><span className="font-bold">Github:</span> <span className="underline"><Link href="https://github.com/william-horn">https://github.com/william-horn</Link></span></Text>
          </Container>

          <Container add="p-3 pt-0 left-line">
            <Title add="p-0 text-left" remove="p-2 text-center">Social</Title>
            <Text><span className="font-bold">Instagram</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">Twitter</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">Facebook</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">YouTube</span> <span className="underline">(not yet available)</span></Text>
          </Container>

        </Container>

        <Footer.Title className="p-4 text-center">Disclaimer:</Footer.Title>
        <Container add="w-4/5 ml-auto mr-auto">
          <Text add="text-center">
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