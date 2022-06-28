/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FxProductCard from '../FxProductCard';

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
  title: 'ReactComponentLibrary/FxProductCard',
  component: FxProductCard,
} as ComponentMeta<typeof FxProductCard>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof FxProductCard> = (args) => <FxProductCard {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  display: "left",
  background : "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_jungle_9a8795dfca.png",
  image : "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_jungle_9a8795dfca.png",
  position : 1
};
