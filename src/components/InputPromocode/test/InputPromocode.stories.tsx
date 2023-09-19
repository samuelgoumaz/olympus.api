/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputPromocode from '../InputPromocode';

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
  title: 'ReactComponentLibrary/InputPromocode',
  component: InputPromocode,
} as ComponentMeta<typeof InputPromocode>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputPromocode> = (args) => <InputPromocode {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Promocode',
  name: 'promocode',
  total: 100,
  discount: {"codeId":1,"code":"SAMSAM","amount": 40,"percent": 20,"delivery": 0}
};
