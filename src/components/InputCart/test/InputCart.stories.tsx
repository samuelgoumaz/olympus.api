/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputCart from '../InputCart';

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
  title: 'ReactComponentLibrary/InputCart',
  component: InputCart,
} as ComponentMeta<typeof InputCart>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputCart> = (args) => <InputCart {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Single = Template.bind({});
Single.args = {
  label: 'Cart',
  required: true,
  name: `cart`,
  total: 200,
  currency: "chf",
  cart: [{"id":3,"quantity":6}, {"id":4,"quantity":7}]
};
