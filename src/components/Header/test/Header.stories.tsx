/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../Header';
import Button from '../../Button';

/*
# Images
*/
import _imageDefaultLeftBlack from "../assets/example_left-black.svg";
import _imageDefaultLeftWhite from "../assets/example_left-white.svg";
import _imageDefaultMiddleBlack from "../assets/example_middle-black.svg";
import _imageDefaultMiddleWhite from "../assets/example_middle-white.svg";

/*
# Imports
# More on default export :
https://storybook.js.org/docs/react/writing-stories/introduction#default-export
*/
export default {
  title: 'ReactComponentLibrary/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  debug: false,
  left: [
    <Button
      mode={`header`}
      icon={`menu`}
    />
  ],
  middle: [
    <img
      className={`branding`}
      width={`auto`}
      height={`100%`}
      src="http://localhost:1337/uploads/mirador_branding_2aecbc3bfc.svg"
    />
  ],
  right: [
    <Button
      mode={`header`}
      icon={`cart`}
    />
  ]
};

export const DefaultDebug = Template.bind({});
DefaultDebug.args = {
  debug: true,
  left: [
    <Button
      mode={`header`}
      icon={`menu`}
    />
  ],
  middle: [
    <img
      className={`branding`}
      width={`auto`}
      height={`100%`}
      src="http://localhost:1337/uploads/mirador_branding_2aecbc3bfc.svg"
    />
  ],
  right: [
    <Button
      mode={`header`}
      icon={`cart`}
    />
  ]
};
