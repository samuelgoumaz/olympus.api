/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputSubmitPayment from '../InputSubmitPayment';

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
  title: 'ReactComponentLibrary/InputSubmitPayment',
  component: InputSubmitPayment,
} as ComponentMeta<typeof InputSubmitPayment>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputSubmitPayment> = (args) => <InputSubmitPayment {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Postfinance',
  name: 'amount',
  cards: 'postfinance_card,twint_card',
  onValidate: function (data) {
    console.log("onValidate > ", true, data);
    return true;
  },
  onSubmit: function () {
    console.log("onSubmit > ", false);
    return false;
  },
  children: [<h1>hello</h1>]
};
