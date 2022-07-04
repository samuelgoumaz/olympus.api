/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FxVideo from '../FxVideo';

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
  title: 'ReactComponentLibrary/FxVideo',
  component: FxVideo,
} as ComponentMeta<typeof FxVideo>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof FxVideo> = (args) => <FxVideo {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  position : 1,
  cover : "http://localhost:1337/uploads/Capture_d_ecran_2022_06_30_a_17_17_30_81c662e349.jpg",
  video : "http://localhost:1337/uploads/dustygreen_video_v2_720c534d8c.mp4",
  opacity : 1,
  mixBlendMode : "normal",
};
