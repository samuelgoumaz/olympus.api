/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputEmail from '../InputEmail';

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
  title: 'ReactComponentLibrary/InputEmail',
  component: InputEmail,
} as ComponentMeta<typeof InputEmail>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputEmail> = (args) => <InputEmail {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  name: 'myemail',
  label: 'my Email',
  placeholder: 'email',
  required: true
};
