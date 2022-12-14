
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
  // const { currentPage, lastPage } = useAppContext();

  return (
    <>
      <Text add="text-yellow-500">Hello, world! Explore</Text>
    </>
  );
};

export default Explore;

