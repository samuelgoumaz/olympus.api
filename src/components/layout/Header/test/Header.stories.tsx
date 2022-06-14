/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../Header';

/*
# Images
*/
import _imageDefaultLeftBlack from "../assets/example_left-black.svg";
import _imageDefaultLeftWhite from "../assets/example_left-white.svg";
import _imageDefaultMiddleBlack from "../assets/example_middle-black.svg";
import _imageDefaultMiddleWhite from "../assets/example_middle-white.svg";

/*
# Imports
# More on default export :
https://storybook.js.org/docs/react/writing-stories/introduction#default-export
*/
export default {
  title: 'ReactComponentLibrary/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Hello world!',
  left_positive: _imageDefaultLeftBlack,
  left_negative: _imageDefaultLeftWhite,
  middle_positive: _imageDefaultMiddleBlack,
  middle_negative: _imageDefaultMiddleWhite,
};

export const Weedonist = Template.bind({});
Weedonist.args = {
  title: 'The<strong>Weedonist</strong>',
  left_positive: 'http://localhost:1337/uploads/branding_85acfc9546.svg',
  left_negative: 'http://localhost:1337/uploads/branding_negative_6cc77d4e42.svg?updated_at=2022-05-23T17:43:41.259Z',
};
