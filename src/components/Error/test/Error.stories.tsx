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

export const Inline = Template.bind({});
Inline.args = {
  debug: false,
  position: 1,
  display: 'inline',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  children: []
};

export const InlineDebug = Template.bind({});
InlineDebug.args = {
  debug: true,
  position: 1,
  display: 'inline',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  children: [<p>my content</p>]
};

export const Cover = Template.bind({});
Cover.args = {
  debug: false,
  position: 1,
  display: 'cover',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  body: 'Lorem Ipsum',
  children: [<p>my content</p>]
};

export const CoverDebug = Template.bind({});
CoverDebug.args = {
  debug: true,
  position: 1,
  display: 'cover',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  body: 'Lorem Ipsum',
  children: [<p>my content</p>]
};

export const Page = Template.bind({});
Page.args = {
  debug: false,
  position: 1,
  display: 'page',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  body: 'Lorem Ipsum',
  children: [<p>my content</p>]
};

export const PageDebug = Template.bind({});
PageDebug.args = {
  debug: true,
  position: 1,
  display: 'page',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  body: 'Lorem Ipsum',
  children: [<p>my content</p>]
};

export const Log = Template.bind({});
Log.args = {
  debug: false,
  position: 1,
  display: 'log',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  children: [<p>my content</p>]
};

export const LogDebug = Template.bind({});
LogDebug.args = {
  debug: true,
  position: 1,
  display: 'log',
  icon: 'install',
  error: '500',
  title: 'My install title',
  subtitle: 'My install subtitle',
  children: [<p>my content</p>]
};