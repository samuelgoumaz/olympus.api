/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import "./Post.scss";

/*
title={el.title ? el.title : el.attributes.title ? el.attributes.title : ``}
body={el.teaser ? el.teaser : el.attributes.teaser ? el.attributes.teaser : ``}
video={el.video ? el.video.data.attributes : el.attributes.video ? el.attributes.video.data.attributes : ``}
cover={el.cover ? el.cover.data.attributes : el.attributes.cover ? el.attributes.cover.data.attributes : ``}
slug={el.slug ? el.slug : el.attributes.slug ? el.attributes.slug : ``}
display={`grid`}
*/

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/
*/
export interface PostProps {
  title: string | null;
  body: string | null;
  video: string | null;
  cover: string | null;
  slug: string | null;
  display: string | null;
}



/*
# Class Components
*/
/*const Post: React.FC<PostProps> = ({
  left_positive,
  left_negative,
  middle_positive,
  middle_negative,
  fx_aside,
  fx_negative,
  fx_top,
  fx_pinned,
  title,
  subtitle,
  children
}) => (
*/
const Post = ({
  title,
  body,
  video,
  cover,
  slug,
  display
}: PostProps) => (
  <div
    className={`
      post-component
      ${video && !body ? `post-video-component` : ``}
      ${cover && !video && !body ? `post-cover-component` : ``}
      ${!video && !cover && body ? `post-text-component` : ``}
    `}
  >
    <div className={`post-inner`}>

      {video && cover ? <div className={`post-video`}>
        <video playinline="true" preload="true" width="100%" height="100%" poster={cover} controls>
          <source src={video} type="video/mp4" />
        </video>
      </div> : ``}

      {cover && !video ? <div className={`post-image`}>
        <img src={cover} width="100%" />
      </div> : ``}

      {title && <div className={`post-title`}>
        <h6>{title}</h6>
      </div>}

      {body && <div className={`body`} dangerouslySetInnerHTML={{ __html: body }} />}

    </div>
  </div>
);

/*
# Export
*/
export default Post;
