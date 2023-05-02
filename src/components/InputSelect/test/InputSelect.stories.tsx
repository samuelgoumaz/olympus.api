/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputSelect from '../InputSelect';

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
  title: 'ReactComponentLibrary/InputSelect',
  component: InputSelect,
} as ComponentMeta<typeof InputSelect>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputSelect> = (args) => <InputSelect {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  name: 'myselectid',
  label: 'My Select',
  placeholder: 'Choose Option',
  elements: [
    {
      "id": 26,
      "key": "key",
      "value": "<p>value</p>"
    }
  ]
};
