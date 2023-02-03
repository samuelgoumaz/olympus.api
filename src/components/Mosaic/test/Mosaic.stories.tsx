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
  image: `http://0.0.0.0:1337/uploads/dusty_green_std_wallpaper_c0401ca5f1.jpg?updated_at=2023-01-28T23:41:13.265Z`,
  display: `one`,
};

export const Double = Template.bind({});
Double.args = {
  alt: `alt title`,
  image: `http://0.0.0.0:1337/uploads/dusty_green_std_wallpaper_c0401ca5f1.jpg?updated_at=2023-01-28T23:41:13.265Z`,
  display: `double`,
};
