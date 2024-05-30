/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Video from '../Video';

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
  title: 'ReactComponentLibrary/Video',
  component: Video,
} as ComponentMeta<typeof Video>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  fullscreen: false,
  controls: [<h1>controls</h1>],
  header: [<h1>header</h1>],
  children: [<h1>video</h1>]
};

export const Debug = Template.bind({});
Debug.args = {
  debug: true,
  fullscreen: false,
  controls: [<h1>controls</h1>],
  header: [<h1>header</h1>],
  children: [<h1>video</h1>]
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  debug: true,
  fullscreen: true,
  controls: [<h1>controls</h1>],
  header: [<h1>header</h1>],
  children: [<h1>video</h1>]
};
