/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Policy from '../Policy';

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
  title: 'ReactComponentLibrary/Policy',
  component: Policy,
} as ComponentMeta<typeof Policy>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Policy> = (args) => <Policy {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  position: 2,
  children: [<h1>hello</h1>],
  services: [<ul>
    <li>
      <input type="checkbox" />
      <label>Google Analytics</label>
    </li>
    <li>
      <input type="checkbox" />
      <label>Pixel Meta</label>
    </li>
  </ul>],
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: false,
  scene: false,
};

export const DefaultDebug = Template.bind({});
DefaultDebug.args = {
  position: 2,
  debug: true,
  children: [<h1>hello</h1>],
  services: [<ul>
    <li>
      <input type="checkbox" />
      <label>Google Analytics</label>
    </li>
    <li>
      <input type="checkbox" />
      <label>Pixel Meta</label>
    </li>
  </ul>],
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: false,
  scene: false,
};

export const Custom = Template.bind({});
Custom.args = {
  position: 2,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: [<blockquote>[Add html into Fx]</blockquote>],
  children: [<blockquote>[Add html instead of body]</blockquote>],
  scene: [<blockquote>[Add html under body]</blockquote>],
};

export const CustomDebug = Template.bind({});
CustomDebug.args = {
  position: 2,
  debug: true,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  fx: [<blockquote>[Add html into Fx]</blockquote>],
  children: [<blockquote>[Add html instead of body]</blockquote>],
  scene: [<blockquote>[Add html under body]</blockquote>],
};
