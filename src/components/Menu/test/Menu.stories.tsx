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
  menu: [
    {
        "id": 15,
        "name": "Terms and conditions",
        "url": null,
        "page": {
            "id": 9,
            "title": "Terms and Conditions",
            "subtitle": "Dusty Green",
            "slug": "terms-and-conditions-dusty-green",
            "createdAt": "2022-07-19T14:36:38.639Z",
            "updatedAt": "2022-11-25T18:36:33.735Z",
            "publishedAt": "2022-07-19T14:36:44.302Z",
            "locale": "en"
        }
    },
    {
        "id": 16,
        "name": "Confidentiality",
        "url": null,
        "page": {
            "id": 10,
            "title": "Confidentiality",
            "subtitle": "Dusty Green",
            "slug": "confidentiality-dusty-green",
            "createdAt": "2022-07-19T18:45:03.927Z",
            "updatedAt": "2023-02-06T22:27:51.113Z",
            "publishedAt": "2022-07-19T18:45:26.722Z",
            "locale": "en"
        }
    }
]
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

export const Line = Template.bind({});
Line.args = {
  display: "line",
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
