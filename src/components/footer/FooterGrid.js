import React from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";

import Logo from "assets/images/FooterImages/footerlogo.svg";
import Map from "assets/images/FooterImages/map.png";

import { ReactComponent as Phone } from "assets/svg/Social/phone.svg";
import { ReactComponent as Gmail } from "assets/svg/Social/gmail.svg";
import { ReactComponent as Insta } from "assets/svg/Social/instagram.svg";
import { ReactComponent as Twitter } from "assets/svg/Social/twitter.svg";
import { ReactComponent as Github } from "assets/svg/Social/github.svg";
import { ReactComponent as Youtube } from "assets/svg/Social/youtube.svg";
import { ReactComponent as Linkedin } from "assets/svg/Social/linkedin.svg";

const BigContainer = tw.div`p-12 bg-white`;
const Container = tw.div`sm:px-4 2xl:px-0 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center`;
const Section = tw.div`flex flex-col w-full md:w-auto	 items-center text-lg`;
const Para = tw.p`text-gray-600 leading-snug text-center text-base `;
const Heading = tw.h1`text-2xl text-gray-600 font-medium mb-4 md:mb-14  `;
const FlexCon = tw.div`flex flex-col`;
const InnCon = tw.a`flex items-center pb-4`;
const SocialLink = styled.a`
  ${tw` p-1 shadow rounded-full bg-white hocus:shadow-lg mr-4 last:mr-0`}
  svg {
    ${tw`w-6 h-6`}
  }
`;

const FooterGrid = () => {
  return (
    <BigContainer>
      <Container className=" border-b-2 pb-12 border-gray-300">
        <Section className="max-w-sm ">
          <img src={Logo} className=" mb-4 md:mb-12 " alt="GDSC_LOGO" />
          <Para className="text-base font-poppins ">
            We are here at GDSC VIT to bridge the gap between your emerging
            Ideas and the changing Reality. Let's Connect, Learn and Grow
            together to emerge as the Best!
            <br /> <br />
            Built with love by <b> Web Team GDSC_VIT </b>
          </Para>
        </Section>
        <Section className="mt-20 md:mt-auto">
          <Heading>Get In Touch</Heading>
          <FlexCon>
            <InnCon>
              <Phone className="w-6 mr-4 text-blue-core" />
              <Para>+91 0123 456 789</Para>
            </InnCon>
            <InnCon
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:gdsc@vit.edu.in"
            >
              <Gmail className="w-6 mr-6" />
              <Para> gdsc@vit.edu.in</Para>
            </InnCon>
            <InnCon>
              <Phone className="w-6 mr-4 text-blue-core" />
              <Para>+91 0123 456 789</Para>
            </InnCon>
            <InnCon
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:gdsc@vit.edu.in"
            >
              <Gmail className="w-6 mr-6" />
              <Para> gdsc@vit.edu.in</Para>
            </InnCon>
          </FlexCon>
        </Section>
        <Section className=" md:col-span-3 lg:col-auto mt-20 md:mt-24 lg:mt-auto">
          <Para className="pt-2 mb-4 md:mb-14 text-xl font-medium md:text-base md:font-normal ">
            <b>Find Us :</b> Vidyalankar Institute of Technology
          </Para>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://goo.gl/maps/xUjH9cS7SBo9UQ2E7"
          >
            <img src={Map} alt="Map" className="max-h-44" />
          </a>
        </Section>
      </Container>
      <Container className="place-items-center ">
        <Para className=" text-lg">2021 Google DSC VIT Mumbai</Para>
        <Section className="lg:-mt-8 md:mt-12 mt-20 md:order-3 lg:order-2 md:col-span-3 lg:col-auto">
          <Para className=" mb-2">Lets Get Social</Para>
          <div className="flex ">
            <SocialLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/gdsc-vit-mumbai/"
            >
              <Linkedin />
            </SocialLink>
            <SocialLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UCl93weektPDXfHC_sklxnrg?sub_confirmation=1"
            >
              <Youtube />
            </SocialLink>
            <SocialLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/GoogleDscVit"
            >
              <Github />
            </SocialLink>
            <SocialLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/gdsc_vit"
            >
              <Twitter />
            </SocialLink>
            <SocialLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/gdsc.vit/"
            >
              <Insta />
            </SocialLink>
          </div>
        </Section>
        <Para className="md:order-2  text-lg lg:order-3 mt-20 md:mt-auto">
          Community GuideLine
        </Para>
      </Container>
    </BigContainer>
  );
};

export default FooterGrid;
