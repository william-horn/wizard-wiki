
import Link from 'next/link';
import Image from 'next/image';
import Enum from '../enums';
// import { useAppContext } from '../providers/AppProvider';
import BackgroundImage from '../components/BackgroundImage';
import Text from '../components/typography/Text';
import Page from '../components/containers/Page';
import Container from '../components/containers/Container';
import Title from '../components/typography/Title';
import Wizard101 from '../components/typography/Wizard101';
import WikiLink from '../components/typography/WikiLink';
import List from '../components/typography/List';
import WizardBannerImg from '../public/wiz-pic-2.png';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { isClient } from '../lib/helpers/machineType';
import { useEffect, useRef } from 'react';

const HomeTest = () => {
  const { width: screenWidth } = useWindowDimensions();
  return (
    <div>
      <p className='text-red-700'>testing</p>
      <p className='text-white'>width: {screenWidth}</p>
      <p className="text-white">Hello world!</p>
    </div>
  );
}

export default HomeTest;