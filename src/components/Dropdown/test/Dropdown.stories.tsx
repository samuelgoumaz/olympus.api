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

export const Input = Template.bind({});
Input.args = {
  display: `input`,
  children: [<div>line 1</div>, <div>line 2</div>, <div>line 3</div>],
};

export const Ui = Template.bind({});
Ui.args = {
  display: `ui`,
  children: [<div>line 1</div>, <div>line 2</div>, <div>line 3</div>],
};
