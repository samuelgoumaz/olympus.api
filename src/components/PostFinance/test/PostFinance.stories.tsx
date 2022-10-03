/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostFinance from '../PostFinance';

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
  title: 'ReactComponentLibrary/PostFinance',
  component: PostFinance,
} as ComponentMeta<typeof PostFinance>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof PostFinance> = (args) => <PostFinance {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  spaceId: 29921,
  userId: 58616,
  apiSecret: 'qiP+jkZobNpk6flPqIKRv7jB0VT/0gI2BRkEpOC5HGs=',
};
