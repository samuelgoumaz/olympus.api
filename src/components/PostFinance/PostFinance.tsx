/*
# Imports
*/
'use strict';
import React, { useRef, useEffect, useState } from "react";
import { PostFinanceCheckout } from 'postfinancecheckout';
import "./PostFinance.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface PostFinanceProps {
  position: number;
  spaceId: number | null;
  userId: number | null;
  apiSecret: string | null;
  children: JSX.Element | JSX.Element[];
}

/*
# Class Components
*/
/*const PostFinance: React.FC<PostFinanceProps> = ({
  left_positive,
  left_negative,
  middle_positive,
  middle_negative,
  fx_aside,
  fx_negative,
  fx_top,
  fx_pinned,
  PostFinance,
  subPostFinance,
  children
}) => (
*/

const PostFinance: React.FC<PostFinanceProps> = ({
  position,
  spaceId,
  userId,
  apiSecret,
  children
}: PostFinanceProps) => {
  return (
    <section
      className={`
        postfinance-component
      `}
    >
      <h1>hello</h1>
    </section>
  )
}
/*
# Export
*/
export default PostFinance;
