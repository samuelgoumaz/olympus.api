/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Articles from '../Articles';

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
  title: 'ReactComponentLibrary/Articles',
  component: Articles,
} as ComponentMeta<typeof Articles>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  render: function (data) {
    return <h1>hello</h1>
  },
  title: `Title`,
  subtitle: `Subtitle`,
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
