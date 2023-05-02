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
      "image": "http://localhost:1337/uploads/branding_doctype_backend_monogram_positive_06cb043b27.svg?updated_at=2023-03-23T13:08:33.417Z",
    },
    {
      "id": 2,
      "title": "ETD",
      "image": "http://localhost:1337/uploads/branding_doctype_backend_monogram_positive_06cb043b27.svg?updated_at=2023-03-23T13:08:33.417Z",
    },
    {
      "id": 3,
      "title": "ETD",
      "image": "http://localhost:1337/uploads/branding_doctype_backend_monogram_positive_06cb043b27.svg?updated_at=2023-03-23T13:08:33.417Z",
    }]
};
