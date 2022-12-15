
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
    <Container>

      <Container add="p-10 flex justify-evenly">


        <Container add="w-[15%] bg-secondary rounded h-fit pb-3">
          <Title add="tracking-wider shadows-font bottom-line mx-3 mb-3">Menu</Title>
          <Container add="flex flex-col">
            <button className="p-2 mx-5 my-2 text-xl font-extrabold rounded-br-[20px] rounded-tl-[20px] text-white bg-[#18263d] shadow-[3px_3px_0_rgb(0,0,0)] text-shadow-md">Search</button>
            <button className="p-2 mx-5 my-2 text-xl font-extrabold rounded-br-[20px] rounded-tl-[20px] text-white bg-[#18263d] shadow-[3px_3px_0_rgb(0,0,0)] text-shadow-md">Post</button>
            <button className="p-2 mx-5 my-2 text-xl font-extrabold rounded-br-[20px] rounded-tl-[20px] text-white bg-[#18263d] shadow-[3px_3px_0_rgb(0,0,0)] text-shadow-md">Start Drop Session</button>
            <button className="p-2 mx-5 my-2 text-xl font-extrabold rounded-br-[20px] rounded-tl-[20px] text-white bg-[#18263d] shadow-[3px_3px_0_rgb(0,0,0)] text-shadow-md">My Profile</button>
            <button className="p-2 mx-5 my-2 text-xl font-extrabold rounded-br-[20px] rounded-tl-[20px] text-white bg-[#18263d] shadow-[3px_3px_0_rgb(0,0,0)] text-shadow-md">Find User</button>
            <button className="p-2 mx-5 my-2 text-xl font-extrabold rounded-br-[20px] rounded-tl-[20px] text-white bg-[#18263d] shadow-[3px_3px_0_rgb(0,0,0)] text-shadow-md">Login</button>
          </Container>
        </Container>

        <Container add="w-[75%] bg-secondary rounded fade-in-slow">
          <Title add="tracking-wider text-left bottom-line mx-3 mb-7" remove="text-center">Dashboard</Title>
        </Container>

      </Container>

    </Container>
  );
};

export default Explore;

