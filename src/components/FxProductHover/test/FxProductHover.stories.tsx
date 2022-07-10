/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FxProductHover from '../FxProductHover';

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
  title: 'ReactComponentLibrary/FxProductHover',
  component: FxProductHover,
} as ComponentMeta<typeof FxProductHover>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof FxProductHover> = (args) => <FxProductHover {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  display: "left",
  background : "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_jungle_9a8795dfca.png",
  image : "http://localhost:1337/uploads/dustygreen_background_jungle_inner_f2ef41988f.jpg",
  position : 1
};
