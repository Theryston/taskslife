import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

const Layout: NextPage<IProps> = ({
  children,
  title = "Taskslife - What have you done in your life? 😕",
  description = "Share your life goals with everyone in the world.",
  image = "https://taskslife.vercel.app/images/logo.png",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <Body>
        <Container> {children} </Container>
      </Body>
    </>
  );
};

export const Body = styled.body`
  display: flex;
`;

export const Container = styled.div``;

export default Layout;
