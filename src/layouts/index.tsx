import { NextPage } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const Layout: NextPage<IProps> = ({
  children,
  title = "Taskslife - What have you done in your life? 😕",
  description = "Share your life goals with everyone in the world.",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
      </Head>
      <body>
        <div> {children} </div>
      </body>
    </>
  );
};