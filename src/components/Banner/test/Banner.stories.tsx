/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Banner from '../Banner';

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
  title: 'ReactComponentLibrary/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const BannerDebug = Template.bind({});
BannerDebug.args = {
  debug: true,
  scrollTo: true,
  title: 'My Banner title',
  subtitle: 'My Banner subtitle',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: [<h1>Fx elements</h1>],
  scene: [<h1>Scene elements</h1>],
  children: [<h1>Children elements</h1>],
  align: "center"
};

export const FullscreenDebug = Template.bind({});
FullscreenDebug.args = {
  debug: true,
  scrollTo: true,
  display: 'fullscreen',
  title: 'My Banner title',
  subtitle: 'My Banner subtitle',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: [<h1>Fx elements</h1>],
  scene: [<h1>Scene elements</h1>],
  children: [<h1>Children elements</h1>],
  align: "center"
};
