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

export const Default = Template.bind({});
Default.args = {
  debug: false,
  dhl: true,
  ups: true,
  visa: true,
  maestro: true,
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  payment: `<p>Parce que la sécurité de vos données est au cœur de notre préoccupation nous ne collaborons qu'avec des partenaires de confiance.</p>`,
  delivery: `<p>Afin de garantir la réception de vos commandes dans les meilleurs délais, Dusty Green confie ses livraison à des partenaires reconnus.<p>`,
  address: `<p>214 Route de Meyrin<br />1217 Meyrin<br />Switzerland</p>`,
  contact: `<p><a>info@eventsconcept.com</a><br />+41 22 939 17 17<p>`,
  navigation: [<p>Navigation</p>],
  scene: [<p>Scene</p>]
};

export const Debug = Template.bind({});
Debug.args = {
  debug: true,
  dhl: true,
  ups: true,
  visa: true,
  maestro: true,
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  payment: `<p>Parce que la sécurité de vos données est au cœur de notre préoccupation nous ne collaborons qu'avec des partenaires de confiance.</p>`,
  delivery: `<p>Afin de garantir la réception de vos commandes dans les meilleurs délais, Dusty Green confie ses livraison à des partenaires reconnus.<p>`,
  address: `<p>214 Route de Meyrin<br />1217 Meyrin<br />Switzerland</p>`,
  contact: `<p><a>info@eventsconcept.com</a><br />+41 22 939 17 17<p>`,
  navigation: [<p>Navigation</p>],
  scene: [<p>Scene</p>]
};
