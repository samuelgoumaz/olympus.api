/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../Card';

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
  title: 'ReactComponentLibrary/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Grid = Template.bind({});
Grid.args = {
  title: `Title`,
  subtitle: `subtitle`,
  image: 'http://localhost:1337/uploads/dusty_green_cbd_shop_heretics_bones_powder_wallpaper_414dc90005.jpg?updated_at=2022-11-24T15:09:27.979Z',
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `Card-slug`,
  display: `grid`,
  fx: [<><h1>background</h1></>]
};

export const Row = Template.bind({});
Row.args = {
  title: `Title`,
  subtitle: `subtitle`,
  image: 'http://localhost:1337/uploads/dusty_green_cbd_shop_heretics_bones_powder_wallpaper_414dc90005.jpg?updated_at=2022-11-24T15:09:27.979Z',
  body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
  slug: `Card-slug`,
  display: `row`,
  fx: [<><h1>background</h1></>]
};
