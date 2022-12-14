
import Page from "../../components/containers/Page";
import Container from "../../components/containers/Container";
import Link from "next/link";
import Image from "next/image";
import Text from "../../components/typography/Text";
import Header from "../../components/layouts/HeaderFooterLayout/Header";
import Navbar from '../../components/layouts/HeaderFooterLayout/Navbar';
import { useEffect, useState, useRef } from 'react';
import { useAppContext } from "../../providers/AppProvider";

const Explore = function() {
  const { currentPage, lastPage } = useAppContext();
  const header = useRef(null);

  useEffect(() => {
    header.current.style.setProperty('--client-height', header.current.clientHeight + 'px');
    header.current.classList.add('collapse-header');
  });

  return (
    <>
      <Header ref={header} override add="overflow-hidden">
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
      <Navbar override/>
      <Text>Hello, world!</Text>
    </>
  );
};

export default Explore;

