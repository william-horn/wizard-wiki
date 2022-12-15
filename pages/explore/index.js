
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
    <Container add="h-full">

      <Container add="p-10 flex justify-evenly h-full">


        <Container add="w-[15%] bg-secondary rounded-[15px]">
          <Title add="tracking-wider" className="tracking-">Menu</Title>
          <Container add="flex flex-col">
            <button className="p-2 mb-3 font-bold rounded bg-color-6 text-color-5">Search</button>
            <button className="p-2 mb-3 font-bold rounded bg-color-6 text-color-5">Post</button>
            <button className="p-2 mb-3 font-bold rounded bg-color-6 text-color-5">Start Drop Session</button>
            <button className="p-2 mb-3 font-bold rounded bg-color-6 text-color-5">My Profile</button>
            <button className="p-2 mb-3 font-bold rounded bg-color-6 text-color-5">Find User</button>
            <button className="p-2 mb-3 font-bold rounded bg-color-6 text-color-5">Login</button>
          </Container>
        </Container>

        <Container add="w-[75%] bg-secondary rounded-[15px]">
          <Title add="tracking-wider" className="tracking-">Menu</Title>
        </Container>

      </Container>

    </Container>
  );
};

export default Explore;

