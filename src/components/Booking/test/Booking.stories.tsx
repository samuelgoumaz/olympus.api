/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Booking from '../Booking';

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
  title: 'ReactComponentLibrary/Booking',
  component: Booking,
} as ComponentMeta<typeof Booking>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Booking> = (args) => <Booking {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  position: 2,
  fx: false,
  children: false,
};

export const DefaultDebug = Template.bind({});
DefaultDebug.args = {
  position: 2,
  debug: true,
  fx: false,
  children: false,
};

export const Widget = Template.bind({});
Default.args = {
  position: 2,
  display: "widget",
  fx: false,
  children: false,
};

export const WidgetDebug = Template.bind({});
WidgetDebug.args = {
  position: 2,
  display: "widget",
  debug: true,
  fx: false,
  children: false,
};

export const Aside = Template.bind({});
Default.args = {
  position: 2,
  display: "aside",
  fx: false,
  children: false,
};

export const AsideDebug = Template.bind({});
WidgetDebug.args = {
  position: 2,
  display: "aside",
  debug: true,
  fx: false,
  children: false,
};
