/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputTotal from '../InputTotal';

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
  title: 'ReactComponentLibrary/InputTotal',
  component: InputTotal,
} as ComponentMeta<typeof InputTotal>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputTotal> = (args) => <InputTotal {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Single = Template.bind({});
Single.args = {
  label: 'My Label',
  name: 'My Label',
  total: 20.457,
  currency: 'chf',
  required: true
};
