/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from '../Title';

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
  title: 'ReactComponentLibrary/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
  title: 'My Title',
  subtitle: 'My Subtitle',
};

export const DayTitle = Template.bind({});
DayTitle.args = {
  title: 'Lundi',
  display: 'day'
};

export const MonthTitle = Template.bind({});
DayTitle.args = {
  title: 'Décembre',
  display: 'month'
};

export const YearTitle = Template.bind({});
YearTitle.args = {
  title: '2004',
  display: 'year'
};
