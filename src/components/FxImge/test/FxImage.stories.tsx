/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FxImage from '../FxImage';

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
  title: 'ReactComponentLibrary/FxImage',
  component: FxImage,
} as ComponentMeta<typeof FxImage>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof FxImage> = (args) => <FxImage {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  position : 1,
  image : "http://atelierharfang.ch/static/255b499f40a35be6b2056ac79a5d62fe/35ece/a600fda355ec3220104bd66760ab41b7.jpg",
  opacity : 1,
  mixBlendMode : "normal",
};
