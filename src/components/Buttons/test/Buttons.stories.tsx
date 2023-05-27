/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Buttons from '../Buttons';

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
  title: 'ReactComponentLibrary/Buttons',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  elements: [{
      "id": 4,
      "slug": "hybride",
      "name": "Hybride",
    },
    {
      "id": 5,
      "slug": "indica-sativa",
      "name": "Indica Sativa",
    },
    {
      "id": 6,
      "slug": "vaporisation",
      "name": "Vaporisation",
    },
    {
      "id": 7,
      "slug": "infusion",
      "name": "Infusion",
    },
    {
      "id": 8,
      "slug": "cuisine",
      "name": "Cuisine",
    },
    {
      "id": 9,
      "slug": "indoor",
      "name": "Indoor",
  }]
};
