/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FxProductParallax from '../FxProductParallax';

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
  title: 'ReactComponentLibrary/FxProductParallax',
  component: FxProductParallax,
} as ComponentMeta<typeof FxProductParallax>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof FxProductParallax> = (args) => <FxProductParallax {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  image : "http://localhost:1337/uploads/default_dustygreen_product_0f2dd80285.png",
  position : 1
};
