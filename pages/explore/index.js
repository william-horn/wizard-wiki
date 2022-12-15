
import Page from "../../components/containers/Page";
import Container from "../../components/containers/Container";
import Link from "next/link";
import Image from "next/image";
import Title from "../../components/typography/Title";
import Text from "../../components/typography/Text";
import Header from "../../components/layouts/HeaderFooterLayout/Header";
import { useHeaderFooterLayoutContext } from "../../providers/HeaderFooterLayoutProvider";
import { useEffect, useState, useRef } from 'react';
import { useAppContext } from "../../providers/AppProvider";
import Navbar from "../../components/layouts/HeaderFooterLayout/Navbar";
import Button from "../../components/buttons/Button";
import Icons from '../../lib/helpers/icons';

const Explore = function() {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    console.log('inside explore');
  });

  return (
    <>
      <Container className="flex flex-col h-screen">
        <Navbar ref={navbarRef} override/>
        <Container className="flex h-full">

          {/* Menu */}
          <Container ref={menuRef} className="w-[12%] h-full sticky top-[20px]">
            <Container className="relative right-[100%] menu-slide-in bg-[#1f242a] p-5 h-full">
              <Title className="mx-3 mb-3 tracking-wider shadows-font bottom-line">Menu</Title>
              <Container className="flex flex-col">
                <Button className="group-hover:underline" containerClassName="group hover:bg-[#333e4a]" leftIcon={Icons.ProfileIcon}>My Profile</Button>
                <Button className="group-hover:underline" containerClassName="group hover:bg-[#333e4a]" leftIcon={Icons.SearchIcon}>Search</Button>
                <Button className="group-hover:underline" containerClassName="group hover:bg-[#333e4a]" leftIcon={Icons.FindPersonIcon}>Find User</Button>
                <Button className="group-hover:underline" containerClassName="group hover:bg-[#333e4a]" leftIcon={Icons.UploadIcon}>Upload</Button>
                <Button className="group-hover:underline" containerClassName="group hover:bg-[#333e4a]" leftIcon={Icons.LoginIcon}>Login</Button>
              </Container>
            </Container>
          </Container>


          {/* Page Content */}
          <Container className="w-[75%] rounded fade-in-slow m-5">
            <Title className="mx-3 tracking-wider text-left shadows-font bottom-line mb-7" remove="text-center">Dashboard</Title>
            {/* <Container className="w-[200px] h-[200px] bg-black"></Container> */}
          </Container>

        </Container>
      </Container>
    </>
  );
};

export default Explore;

