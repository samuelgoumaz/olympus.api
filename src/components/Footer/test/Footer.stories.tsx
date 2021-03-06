/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../Footer';

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
  title: 'ReactComponentLibrary/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  facebook: `#`,
  instagram: `#`,
  linkedin: `#`,
  mail: `info@eventsconcept.com`,
  tel: `+41 22 939 17 17`,
  address: `214 Route de Meyrin<br />1217 Meyrin<br />Switzerland`
};
