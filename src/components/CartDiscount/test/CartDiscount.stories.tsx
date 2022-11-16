/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartDiscount from '../CartDiscount';

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
  title: 'ReactComponentLibrary/CartDiscount',
  component: CartDiscount,
} as ComponentMeta<typeof CartDiscount>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof CartDiscount> = (args) => <CartDiscount {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  total: 50,
  promocode: {
    code: "SAMSAM",
    discount: {
      amountValueOnTotal: -50,
      percentValueOnTotal: 55,
      deliveryValueOnTotal: false,
      exclude: {
        delivery: false,
        promotionPrice: false
      }
    },
    date_expiration: null,
    counter_limit: null,
    counter: null
  }
};
