/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggler from '../Toggler';
import Menu from '../../Menu';

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
  title: 'ReactComponentLibrary/Toggler',
  component: Toggler,
} as ComponentMeta<typeof Toggler>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Toggler> = (args) => <Toggler {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  icon: 'menu',
  display: 'aasdfasdf',
};

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
  icon: 'menu',
  label: 'menu',
  display: 'fullscreen',
  children: [<Menu
    display="inline"
    menu={[{
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
    }]}
  />]
};

export const Cart = Template.bind({});
Cart.args = {
  icon: 'local_mall',
  label: 'cart',
  display: 'aside',
};

export const Toggle = Template.bind({});
Toggle.args = {
  icon: 'view_week',
  close: 'view_stream',
};
