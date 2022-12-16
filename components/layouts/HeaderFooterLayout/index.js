
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
import HeaderFooterLayoutProvider from '../../../providers/HeaderFooterLayoutProvider';
import { useRef, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Images from '../../../public/images';

const HeaderFooterLayout = ({ children }) => {
  const { currentPage, layoutDiff } = useAppContext();
  const { width: screenWidth } = useWindowDimensions();

  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const footerRef = useRef(null);

  const context = {};

  // Determine if we should transition layout sub-components
  const transitionHeader = layoutDiff('header');

  // Handle layout sub-component transitions between pages
  useEffect(() => {
    const header = headerRef.current;
    const navbar = navbarRef.current;
    const footer = footerRef.current;
    /* 
      If header override is false, the current page may not have a header, in which case exit out.
      If header override is true, header will always exist.
    */
    if (!header) return;
    /*
      If there is no difference in headers between pages, exit out.
    */
    if (!transitionHeader) return;

    /* 
      From here on, we know there is a difference in header visibility between pages and a transition will take place.
      Start computing header size.
    */
      header.style.setProperty(
      '--client-height', 
      header.clientHeight + 1 + 'px'
    ); // +1 pixel because of navbar border thickness

    // Modify CSS variables for the transition-header class to use.
    if (currentPage.excludes('header')) {
      header.style.setProperty('--header-anim-style', 'cubic-bezier(0.34,-0.41, 0.98,-0.36)');
      header.style.setProperty('--header-anim-delay', '0s')
      header.style.setProperty('--header-anim', 'hide-header');
    } else {
      header.style.setProperty('--header-anim-style', 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
      header.style.setProperty('--header-anim-delay', '0s')
      header.style.setProperty('--header-anim', 'show-header');
    }

    // Apply the transition class.
    header.classList.add('transition-header');
  });
  
  return (
    <Container className="header-footer-layout bg-primary">
      <Head>
        <title>{currentPage.title}</title>
      </Head>
      {/* Page Header */}
      {/* Override should be false when we load into a page and it doesn't need a transition. */}
      {/* If there is no last page, override should be false because there is nothing to transition from. */}
      {/* If there is a last page, but the last page and first page both have the same header state, there is no need to transition. */}
      <Header ref={headerRef} override={transitionHeader} className="relative">
        <Container className="absolute w-[657px] h-[600px] left-[70%] top-[-175px] rotate-[25deg] pointer-events-none select-none">
          {screenWidth > 1250 && <Image 
            priority 
            alt="grandmother raven" 
            src={Images.GrandmaRavenImg}
            fill 
            quality={30}
            className="xl:block md:hidden home-image" 
            sizes="(min-width: 1500px) 18vw, 400px"
          />}
        </Container>
        <Header.Title>
          <Container className="relative inline-block">
            <span className="relative">Welcome to&nbsp;</span>
            {/* <Image className="absolute pointer-events-none select-none top-[-42px] left-[-4%]" src="/wizard-hat.png" alt="wizard hat" width={75} height={65}/> */}
          </Container>
          <Container className="relative inline-block">
            <span className="relative z-10 text-primary logo-shadow">Raven</span>
            <Image 
              className="absolute pointer-events-none select-none top-[-25%] left-[60%] logo-image" 
              src={Images.LogoImg}
              alt="logo" 
              width={75} 
              height={75}
            />
          </Container>
        </Header.Title>

        {/* <Text className="p-1 mb-5 text-center">
          The most comprehensive media, analytics, and social website for&nbsp;
          <span className="underline text-color-3"><Link href="https://www.wizard101.com/">Wizard101.</Link></span>
        </Text> */}
      </Header>

      {/* Page Nav bar */}
      <Navbar ref={navbarRef}/>
      
      <HeaderFooterLayoutProvider value={context}>
        <Container className="relative min-h-screen layout-frame">
          {children}
        </Container>
      </HeaderFooterLayoutProvider>

      <Footer className="pb-10 top-line" ref={footerRef}>
        <Footer.Title className="p-4 text-center">Reach Out</Footer.Title>
        <Container className="flex flex-wrap items-start justify-between gap-12 p-4 pb-10 lg:justify-center">

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0 text-left" remove="p-2 text-center">Contributors</Title>
            <Text><span className="font-bold">Lead dev: </span>William J. Horn</Text>
          </Container>

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0 text-left" remove="p-2 text-center">Contact</Title>
            <Text><span className="font-bold">Phone:</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">Email:</span> <span className="underline">williamjosephhorn@gmail.com</span></Text>
            <Text><span className="font-bold">Discord:</span> <span className="underline">Equality#6453</span></Text>
            <Text><span className="font-bold">Github:</span> <span className="underline"><Link href="https://github.com/william-horn">https://github.com/william-horn</Link></span></Text>
          </Container>

          <Container className="p-3 pt-0 left-line">
            <Title className="p-0 text-left" remove="p-2 text-center">Social</Title>
            <Text><span className="font-bold">Instagram</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">Twitter</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">Facebook</span> <span className="underline">(not yet available)</span></Text>
            <Text><span className="font-bold">YouTube</span> <span className="underline">(not yet available)</span></Text>
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