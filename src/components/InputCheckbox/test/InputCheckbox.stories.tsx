/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputCheckbox from '../InputCheckbox';

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
  title: 'ReactComponentLibrary/InputCheckbox',
  component: InputCheckbox,
} as ComponentMeta<typeof InputCheckbox>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputCheckbox> = (args) => <InputCheckbox {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  title: 'Hello world!',
  elements: [
    {
      "id": 26,
      "key": "key",
      "value": "<p>value</p>"
    }
  ]
};
