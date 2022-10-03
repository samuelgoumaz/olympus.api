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

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Hello world!',
  left_positive: _imageDefaultLeftBlack,
  left_negative: _imageDefaultLeftWhite,
  middle_positive: _imageDefaultMiddleBlack,
  middle_negative: _imageDefaultMiddleWhite,
};

export const Weedonist = Template.bind({});
Weedonist.args = {
  title: 'The<strong>Weedonist</strong>',
  left_positive: 'http://localhost:1337/uploads/branding_85acfc9546.svg',
  left_negative: 'http://localhost:1337/uploads/branding_negative_6cc77d4e42.svg?updated_at=2022-05-23T17:43:41.259Z',
};

export const Dustygreen = Template.bind({});
Dustygreen.args = {
  title: ``,
  left: [
    <img
      className={`branding`}
      width={`auto`}
      height={`100%`}
      src="http://localhost:1337/uploads/branding_dustygreen_9a91db1cc6.png"
    />
  ],
  right: [
    <Button
      mode={`header`}
      icon={`cart`}
    />
  ]
};

export const EventsConcept = Template.bind({});
EventsConcept.args = {
  title: '',
  left_positive: 'http://localhost:1337/uploads/eventsconcept_logotype_9e1a701ea0.svg',
  left_negative: 'http://localhost:1337/uploads/eventsconcept_logotype_9e1a701ea0.svg',
  middle_positive: 'http://localhost:1337/uploads/eventsconcept_branding_6a3daad5bb.svg',
  middle_negative: 'http://localhost:1337/uploads/eventsconcept_branding_6a3daad5bb.svg',
};
