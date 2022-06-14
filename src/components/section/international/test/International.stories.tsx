/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import International from '../International';

/*
# Imports
# More on default export :
https://storybook.js.org/docs/react/writing-stories/introduction#default-export
*/
export default {
  title: 'ReactComponentLibrary/International',
  component: International,
} as ComponentMeta<typeof International>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof International> = (args) => <International {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Hello world!',
};

export const Matisa = Template.bind({});
Matisa.args = {
  flag: 'http://localhost:1337/uploads/flag_ece967b2ed.jpg?updated_at=2022-05-25T09:06:24.804Z',
  image: 'http://localhost:1337/uploads/matisa_example_56f04af908.jpg',
  title: '<strong>Matisa.</strong>France',
  subtitle: '<strong>+33 386 95 83 35</strong>',
  introduction: 'Située à SENS, au nord de la Bourgogne, MATISA.FRANCE assure la vente, la mise en service, la formation, le dépannage et l’entretien de tous les équipements ferroviaires exploités en France, Benelux et pays d’Afrique francophone, soit un peu plus de 120 unités.',
  body: `<p>MATISA.FRANCE met à votre service 3000 m2 d’atelier avec quatre voies couvertes dont deux avec fosses, un important stock de pièces de rechange pour une livraison sous 24 heures et 19 techniciens, sédentaires ou itinérants.</p><p>Référant depuis plus de 15 années dans la réalisation des TVM 430 pour les machines ferroviaires et le montage des ATESS, MATISA.FRANCE a créé en 2017 la marque ITA Safety, dédié à l’ingénierie et l’installations des équipements de sécurité ferroviaire embarqués et ainsi ajouter à nos produits le KVB, la GSM-R et l’ETCS.</p><p>MATISA.FRANCE, fondée en 1946, est une filiale à 100% de MATISA Matériel Industriel SA.</p>`,
  address: `MATISA FRANCE Z.I.<br />Les Sablons 9,<br />rue de l’Industrie 89100 Sens`,
  contact: `T +33 386 95 83 35<br />F +33 386 95 36 94<br /><a href="mailto:matisa@matisa.fr">email</a>`,
  services: {
    0: {
      "id": 1,
      "title": "Vente et services clients",
      "subtitle": "Service subtitle",
      "image": "http://localhost:1337/uploads/icon_f760933911.svg",
    }
  },

};
