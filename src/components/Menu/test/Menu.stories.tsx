/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from '../Menu';

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
  title: 'ReactComponentLibrary/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Error = Template.bind({});
Error.args = {
  display: `sasd`,
  menu: `sdfasdfasdf`
};

export const Default = Template.bind({});
Default.args = {
  display: null,
  menu: [{
      "id": 1,
      "name": "Home",
      "url": "#home",
      "page": {
          "data": null
      }
  },
  {
      "id": 2,
      "name": "Showreel",
      "url": "#showreel",
      "page": {
          "data": null
      }
  },
  {
      "id": 3,
      "name": "Case studies",
      "url": "#casestudies",
      "page": {
          "data": null
      }
  },
  {
      "id": 4,
      "name": "Clients",
      "url": "#client",
      "page": {
          "data": null
      }
  },
  {
      "id": 5,
      "name": "Contact",
      "url": "#contact",
      "page": {
          "data": null
      }
  }]
};

export const Inline = Template.bind({});
Inline.args = {
  display: "inline",
  menu: [{
      "id": 1,
      "name": "Home",
      "url": "#home",
      "page": {
          "data": null
      }
  },
  {
      "id": 2,
      "name": "Showreel",
      "url": "#showreel",
      "page": {
          "data": null
      }
  },
  {
      "id": 3,
      "name": "Case studies",
      "url": "#casestudies",
      "page": {
          "data": null
      }
  },
  {
      "id": 4,
      "name": "Clients",
      "url": "#client",
      "page": {
          "data": null
      }
  },
  {
      "id": 5,
      "name": "Contact",
      "url": "#contact",
      "page": {
          "data": null
      }
  }]
};

export const List = Template.bind({});
List.args = {
  display: "list",
  menu: [{
      "id": 1,
      "name": "Home",
      "url": "#home",
      "page": {
          "data": null
      }
  },
  {
      "id": 2,
      "name": "Showreel",
      "url": "#showreel",
      "page": {
          "data": null
      }
  },
  {
      "id": 3,
      "name": "Case studies",
      "url": "#casestudies",
      "page": {
          "data": null
      }
  },
  {
      "id": 4,
      "name": "Clients",
      "url": "#client",
      "page": {
          "data": null
      }
  },
  {
      "id": 5,
      "name": "Contact",
      "url": "#contact",
      "page": {
          "data": null
      }
  }]
};
