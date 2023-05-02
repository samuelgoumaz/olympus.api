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
  image: `http://0.0.0.0:1337/uploads/doctype_1300x1080_ateliertt_b9d5a44a9e.jpg`,
  display: `one`,
};

export const Double = Template.bind({});
Double.args = {
  alt: `alt title`,
  image: `http://0.0.0.0:1337/uploads/doctype_1300x1080_ateliertt_b9d5a44a9e.jpg`,
  display: `double`,
};

export const Quadruple = Template.bind({});
Quadruple.args = {
  alt: `alt title`,
  image: `http://0.0.0.0:1337/uploads/doctype_1300x1080_ateliertt_b9d5a44a9e.jpg`,
  display: `quadruple`,
};

export const Triple = Template.bind({});
Triple.args = {
  alt: `alt title`,
  image: `http://0.0.0.0:1337/uploads/doctype_1300x1080_ateliertt_b9d5a44a9e.jpg`,
  display: `triple`,
};
