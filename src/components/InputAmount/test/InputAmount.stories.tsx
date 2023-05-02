/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputAmount from '../InputAmount';

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
  title: 'ReactComponentLibrary/InputAmount',
  component: InputAmount,
} as ComponentMeta<typeof InputAmount>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputAmount> = (args) => <InputAmount {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  name: 'myamount',
  label: 'My Amount',
  placeholder: 'Choose formule',
  currency: 'chf',
  quantity: {
    "min": 1,
    "max": 15,
    "default": 2
  },
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    }
  ]
};
