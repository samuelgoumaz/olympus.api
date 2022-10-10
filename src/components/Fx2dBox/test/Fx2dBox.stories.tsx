/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Fx2dBox from '../Fx2dBox';

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
  title: 'ReactComponentLibrary/Fx2dBox',
  component: Fx2dBox,
} as ComponentMeta<typeof Fx2dBox>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Fx2dBox> = (args) => <Fx2dBox {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  position : 1,
  up : "http://localhost:1337/uploads/large_weedonist_products_upper_example_12e56dcb4a_493241a93f.png?updated_at=2022-10-09T02:03:18.149Z",
  outer : "http://localhost:1337/uploads/large_weedonist_products_outer_example_7213632ac5_f32335282c.png?updated_at=2022-10-09T02:03:30.349Z",
  inner : "http://localhost:1337/uploads/large_weedonist_products_bottom_example_24f5ae3f70_12a2a00b19.png?updated_at=2022-10-09T02:03:40.139Z",
  content : "http://localhost:1337/uploads/weedonist_cbd_switzerland_stardawg_74b8b9ba69.png?updated_at=2022-10-07T14:34:34.077Z",
  cover: false
};
