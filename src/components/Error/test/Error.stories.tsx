/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error from '../Error';

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
  title: 'ReactComponentLibrary/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  state: null,
  title: 'My Title',
  subtitle: 'My Subtitle',
};


export const Cover = Template.bind({});
Cover.args = {
  state: 'cover',
  title: 'My Title',
  subtitle: 'My Subtitle',
};