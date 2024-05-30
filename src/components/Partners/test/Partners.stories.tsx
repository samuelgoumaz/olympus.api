/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Partners from '../Partners';

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
  title: 'ReactComponentLibrary/Partners',
  component: Partners,
} as ComponentMeta<typeof Partners>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Partners> = (args) => <Partners {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  elements: [{
      "id": 1,
      "title": "ETD",
      "image": "https://backend.tellingdeath.ch/uploads/fns_10213dbddb.png",
    },
    {
      "id": 2,
      "title": "ETD",
      "image": "https://backend.tellingdeath.ch/uploads/fns_10213dbddb.png",
    },
    {
      "id": 3,
      "title": "ETD",
      "image": "https://backend.tellingdeath.ch/uploads/fns_10213dbddb.png",
    }]
};
