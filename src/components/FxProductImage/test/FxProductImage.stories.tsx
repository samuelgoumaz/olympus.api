/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FxProductImage from '../FxProductImage';

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
  title: 'ReactComponentLibrary/FxProductImage',
  component: FxProductImage,
} as ComponentMeta<typeof FxProductImage>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof FxProductImage> = (args) => <FxProductImage {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Right = Template.bind({});
Right.args = {
  image : "http://localhost:1337/uploads/dustygreen_background_jungle_inner_f2ef41988f.jpg",
  cover: false,
  position : 1,
  align: `right`
};

export const Left = Template.bind({});
Left.args = {
  image : "http://localhost:1337/uploads/dustygreen_background_jungle_inner_d59c3397ad.jpg",
  cover: false,
  position : 1,
  align: `left`
};

export const Middle = Template.bind({});
Middle.args = {
  image : "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_jungle_9a8795dfca.png",
  cover: false,
  position : 1,
  align: `center`
};

export const Package = Template.bind({});
Package.args = {
  image : "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_jungle_9a8795dfca.png",
  cover: false,
  position : 1,
  align: `none`
};
