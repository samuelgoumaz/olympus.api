/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../Dropdown';

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
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const InputDefaultWithList = Template.bind({});
InputDefaultWithList.args = {
  display: `input`,
  onHandler: false,
  children: [<ul>
    <li>line 1</li>
    <li>line 2</li>
    <li>line 3</li>
  </ul>],
};

export const InputDefaultWithIcon = Template.bind({});
InputDefaultWithIcon.args = {
  display: `input`,
  icon: `home`,
  onHandler: false,
  children: [<div>hello</div>],
};

export const InputDefaultWithOnlyIcon = Template.bind({});
InputDefaultWithOnlyIcon.args = {
  display: `input`,
  icon: `home`,
  current: false,
  onHandler: false,
  children: [<div>hello</div>],
};


export const InputDefaultWithLabel = Template.bind({});
InputDefaultWithLabel.args = {
  display: `input`,
  icon: `home`,
  label: `Hello`,
  onHandler: false,
  children: [<ul>
    <li>line 1</li>
    <li>line 2</li>
    <li>line 3</li>
  </ul>],
};