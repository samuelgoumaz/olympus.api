/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Playlist from '../Playlist';

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
  title: 'ReactComponentLibrary/Playlist',
  component: Playlist,
} as ComponentMeta<typeof Playlist>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Playlist> = (args) => <Playlist {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  position: 2,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: false,
  children: false,
  scene: false,
  time: `00:00`,
  timeline: [<input type="range" min="0" max="100" />],
  image: [<img src="https://images.unsplash.com/photo-1661340041153-7a6738564808?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100px" height="100px" />],
  title: `Audio title`,
  description: `Audio description`
};

export const DefaultDebug = Template.bind({});
DefaultDebug.args = {
  position: 2,
  debug: true,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: false,
  children: false,
  scene: false,
  time: `00:00`,
  timeline: [<input type="range" min="0" max="100" />],
  image: [<img src="https://images.unsplash.com/photo-1661340041153-7a6738564808?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100px" height="100px" />],
  title: `Audio title`,
  description: `Audio description`
};

export const Custom = Template.bind({});
Custom.args = {
  position: 2,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: [<blockquote>[Add html into Fx]</blockquote>],
  children: [<blockquote>[Add html instead of body]</blockquote>],
  scene: [<blockquote>[Add html under body]</blockquote>],
  time: `00:00`,
  timeline: [<input type="range" min="0" max="100" />],
  image: [<img src="https://images.unsplash.com/photo-1661340041153-7a6738564808?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100px" height="100px" />],
  title: `Audio title`,
  description: `Audio description`
};

export const CustomDebug = Template.bind({});
CustomDebug.args = {
  position: 2,
  debug: true,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: [<blockquote>[Add html into Fx]</blockquote>],
  children: [<blockquote>[Add html instead of body]</blockquote>],
  scene: [<blockquote>[Add html under body]</blockquote>],
  time: `00:00`,
  timeline: [<input type="range" min="0" max="100" />],
  image: [<img src="https://images.unsplash.com/photo-1661340041153-7a6738564808?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100px" height="100px" />],
  title: `Audio title`,
  description: `Audio description`
};
