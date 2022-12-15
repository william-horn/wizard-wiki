
import Page from "../../components/containers/Page";
import Container from "../../components/containers/Container";
import Link from "next/link";
import Image from "next/image";
import Title from "../../components/typography/Title";
import Text from "../../components/typography/Text";
import Header from "../../components/layouts/HeaderFooterLayout/Header";
import Navbar from '../../components/layouts/HeaderFooterLayout/Navbar';
import { useEffect, useState, useRef } from 'react';
import { useAppContext } from "../../providers/AppProvider";

const Explore = function() {
  // const { currentPage, lastPage } = useAppContext();

  return (
    <Container add="w-full h-full absolute">

      {/* Menu */}
      <Container add="w-[12%] h-fit pb-3">
        <Container>
          <Title add="tracking-wider shadows-font bottom-line mx-3 mb-3">Menu</Title>
          <Container add="flex flex-col">
            <button className="p-2 mx-5 my-2 text-xl rounded text-white bg-[#333e4a] shadow-[3px_3px_3px_rgb(0,0,0)] text-shadow-md">Search</button>
            <button className="p-2 mx-5 my-2 text-xl rounded text-white bg-[#333e4a] shadow-[3px_3px_3px_rgb(0,0,0)] text-shadow-md">Post</button>
            <button className="p-2 mx-5 my-2 text-xl rounded text-white bg-[#333e4a] shadow-[3px_3px_3px_rgb(0,0,0)] text-shadow-md">Start Drop Session</button>
            <button className="p-2 mx-5 my-2 text-xl rounded text-white bg-[#333e4a] shadow-[3px_3px_3px_rgb(0,0,0)] text-shadow-md">My Profile</button>
            <button className="p-2 mx-5 my-2 text-xl rounded text-white bg-[#333e4a] shadow-[3px_3px_3px_rgb(0,0,0)] text-shadow-md">Find User</button>
            <button className="p-2 mx-5 my-2 text-xl rounded text-white bg-[#333e4a] shadow-[3px_3px_3px_rgb(0,0,0)] text-shadow-md">Login</button>
          </Container>
        </Container>
      </Container>


      {/* Page Content */}
      <Container add="w-[75%] rounded fade-in-slow m-5 inline-block">
        <Title add="tracking-wider shadows-font text-left bottom-line mx-3 mb-7" remove="text-center">Dashboard</Title>
      </Container>



    </Container>
  );
};

export default Explore;

