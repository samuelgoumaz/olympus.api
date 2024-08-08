/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoadingScreen from '../LoadingScreen';

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
  title: 'ReactComponentLibrary/LoadingScreen',
  component: LoadingScreen,
} as ComponentMeta<typeof LoadingScreen>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof LoadingScreen> = (args) => <LoadingScreen {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  debug: false,
  image: "https://www.mirador.ch/themes/segment/assets/mirador-branding.svg"
};

export const DefaultDebug = Template.bind({});
DefaultDebug.args = {
  debug: true
};