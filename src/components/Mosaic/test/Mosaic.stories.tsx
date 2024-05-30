/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Mosaic from '../Mosaic';

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
  title: 'ReactComponentLibrary/Mosaic',
  component: Mosaic,
} as ComponentMeta<typeof Mosaic>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Mosaic> = (args) => <Mosaic {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const One = Template.bind({});
One.args = {
  alt: `alt title`,
  image: `https://plus.unsplash.com/premium_photo-1675724711188-7b39232974af?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  display: `one`,
};

export const Double = Template.bind({});
Double.args = {
  alt: `alt title`,
  image: `https://plus.unsplash.com/premium_photo-1675724711188-7b39232974af?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  display: `double`,
};

export const Quadruple = Template.bind({});
Quadruple.args = {
  alt: `alt title`,
  image: `https://plus.unsplash.com/premium_photo-1675724711188-7b39232974af?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  display: `quadruple`,
};

export const Triple = Template.bind({});
Triple.args = {
  alt: `alt title`,
  image: `https://plus.unsplash.com/premium_photo-1675724711188-7b39232974af?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  display: `triple`,
};
