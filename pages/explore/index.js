
import Page from "../../components/containers/Page";
import Container from "../../components/containers/Container";
import Link from "next/link";
import Image from "next/image";
import List from '../../components/typography/List';
import Title from "../../components/typography/Title";
import Text from "../../components/typography/Text";
import Header from "../../components/layouts/HeaderFooterLayout/Header";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useHeaderFooterLayoutContext } from "../../providers/HeaderFooterLayoutProvider";
import { useEffect, useState, useRef } from 'react';
import { useAppContext } from "../../providers/AppProvider";
import Navbar from "../../components/layouts/HeaderFooterLayout/Navbar";
import Button from "../../components/buttons/Button";
import Icons from '../../public/icons';
import Images from "../../public/images";

const Explore = function() {
  const { screenWidth } = useWindowDimensions();
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const screen_md = screenWidth > 768;

  return (
    <Container className="flex flex-col w-full h-screen page-body">
      <Navbar ref={navbarRef} className="animate-nav-explore-theme card-shadow" override/>
      <Container className={"flex w-full h-full page-content flex-col md:flex-row"}>

        {/* Menu */}
        <Container ref={menuRef} className={"menu-bar md:min-w-[215px] md:shadow-[none] card-shadow min-w-full md:h-full h-fit sticky top-[20px]"}>
          <Container className={"relative right-[100%] md:m-0 mx-10 md:p-5 p-0 h-full md:card-shadow shadow-[none] menu-slide-in"}>
            <Container className="absolute flex flex-col justify-center w-full h-full pointer-events-none cursor md:hidden">
              <Image alt="icon" src={Icons.ArrowLeftIcon} width={24} height={24} className="absolute right-[100%] filter invert"/>
              <Image alt="icon" src={Icons.ArrowLeftIcon} width={24} height={24} className="absolute left-[100%] filter invert rotate-180"/>
            </Container>
            <Title className="hidden mb-3 ml-3 tracking-wider text-left md:block" remove="text-center">Menu</Title>
            <Container className="flex flex-row justify-start overflow-x-auto md:flex-col md:flex-nowrap md:justify-start">
              <Link href="/profile" className="min-w-fit"><Button containerClassName="group hover:bg-[#333e4a] md:mx-2 mx-0" containerRemove="mx-2" leftIcon={Icons.ProfileIcon}>My Profile</Button></Link>
              <Button containerClassName="group hover:bg-[#333e4a] md:mx-2 mx-0" containerRemove="mx-2" leftIcon={Icons.SearchIcon}>Search</Button>
              <Button containerClassName="group hover:bg-[#333e4a] md:mx-2 mx-0" containerRemove="mx-2" leftIcon={Icons.FindPersonIcon}>Find User</Button>
              <Button containerClassName="group hover:bg-[#333e4a] md:mx-2 mx-0" containerRemove="mx-2" leftIcon={Icons.UploadIcon}>Upload</Button>
              <Button containerClassName="group hover:bg-[#333e4a] md:mx-2 mx-0" containerRemove="mx-2" leftIcon={Icons.SettingsIcon}>Settings</Button>
              <Button containerClassName="group hover:bg-[#333e4a] md:mx-2 mx-0" containerRemove="mx-2" leftIcon={Icons.LoginIcon}>Login</Button>
            </Container>
          </Container>
        </Container>


        {/* Page Content */}
        <Container className="flex flex-col flex-[1] m-5 rounded dashboard-frame">
          <Title className="mb-3 text-3xl tracking-wider text-left opacity-0 animate-fade-in-first" remove="text-center text-2xl">Dashboard</Title>

          {/* Page below title frame */}
          <Container className="relative h-full dashboard-content">

            {/* Scroll frame */}
            <Container className="absolute w-full h-full overflow-y-auto dashboard-scroll-frame">

              {/* First section */}
              <Container className="flex w-full h-full">
                <Container className="flex flex-col flex-[2.5] m-3 mr-5">

                  {/* News */}
                  <Container className="flex-[1.5] opacity-0 shadow-[0_0_15px_black] rounded-[15px] relative animate-fade-in-second">
                    <Title className="text-left" remove="text-center">News</Title>
                    <Container className="flex p-3">
                      <Container className="relative flex-[0.3] h-[150px] rounded-[15px] overflow-hidden card-shadow mr-3">
                        <Image alt="news banner" src={Images.NewsBannerImg} sizes="20vw" className="absolute object-cover object-center w-[300px] h-auto" fill/>
                      </Container>
                      <Container>
                        <Text>Testing</Text>
                        <List className="ml-6">
                          <List.Item>New stuff coming soon</List.Item>
                          <List.Item>It's going to be exciting</List.Item>
                          <List.Item>This is where updates will be posted</List.Item>
                          <List.Item>Jellyfish Broccoli</List.Item>
                        </List>
                      </Container>
                    </Container>
                    <Container>
                      <Title>Another thing</Title>
                    </Container>
                  </Container>

                  {/* Recent Posts */}
                  <Container className="flex-1 mt-5 opacity-0 shadow-[0_0_15px_black] rounded-[15px] relative animate-fade-in-fourth">
                    <Title className="text-left" remove="text-center">Recent Posts</Title>
                  </Container>
                </Container>
                
                {/* Popular Posts */}
                <Container className="flex flex-col flex-1 mt-3 mb-3 mr-3 opacity-0 shadow-[0_0_15px_black] rounded-[15px] relative animate-fade-in-third">
                  <Title>Popular Posts</Title>
                  <Container className="h-full p-4 overflow-y-auto">

                    {/* Single post example */}
                    <Container className="w-full rounded-[15px] p-3 flex flex-col hover:bg-[#262b32] transition-colors group cursor-pointer">
                      <Container className="flex justify-between mb-3">
                        <Title className="text-lg text-left text-[#9bd5ff] font-extrabold group-hover:underline" remove="text-2xl text-center p-2 mb-3 text-white">Just a test post</Title>
                        <Text className=" text-[#5f666e] font-light">12/16/2022</Text>
                      </Container>
                      <Container className="flex h-full">
                        <Container className="relative w-[85px] h-[85px] rounded-[50%] overflow-hidden">
                          <Image alt="upload pic" src={Images.TestPicImg} fill sizes="100px" className="object-cover"/>
                        </Container>
                      </Container>
                    </Container>


                  </Container>
                </Container>
              </Container>


            </Container>
          </Container>
          {/* <Container className="w-[200px] h-[200px] bg-black"></Container> */}
        </Container>

      </Container>
    </Container>
  );
};

export default Explore;

