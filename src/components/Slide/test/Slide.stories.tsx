/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slide from '../Slide';

/*
# Images
*/
//import _imageDefaultLeftBlack from "../assets/example_left-black.svg";

/*
# Imports
# More on default export :
https://storybook.js.org/docs/react/writing-stories/introduction#default-export
*/
export default {
  title: 'ReactComponentLibrary/Slide',
  component: Slide,
} as ComponentMeta<typeof Slide>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Slide> = (args) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      position: "relative"
    }}
  >
    <Slide {...args} />
  </div>
);

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Video = Template.bind({});
Video.args = {
  title: 'Hello world!',
  video: 'http://localhost:1337/uploads/jungle_f81e4b0ef9.mp4?updated_at=2023-01-29T13:48:51.911Z',
  cover: 'http://localhost:1337/uploads/dusty_green_cbd_shop_heretics_bones_powder_wallpaper_414dc90005.jpg?updated_at=2022-11-24T15:09:27.979Z',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export const Image = Template.bind({});
Image.args = {
  title: 'Hello world!',
  cover: 'http://localhost:1337/uploads/dusty_green_cbd_shop_heretics_bones_powder_wallpaper_414dc90005.jpg?updated_at=2022-11-24T15:09:27.979Z',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};
