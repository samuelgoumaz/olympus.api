/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Event from '../Event';

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
  title: 'ReactComponentLibrary/Event',
  component: Event,
} as ComponentMeta<typeof Event>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const ColsDebug = Template.bind({});
ColsDebug.args = {
  debug: true,
  position: 2,
  display: `cols`,
  mode: `allday`,
  locale: "en",
  title: "Atelier Bricolage",
  subtitle: "Event title",
  slug: "atelier-bricolage",
  dateStart: "2023-06-07",
  dateEnd: "2023-06-07",
  timeStart: "14:00",
  timeEnd: "17:00",
  images: null,
  children: [<h1>hello</h1>],
  body: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">On vous accueille dans un endroit spécialement aménagé pour les bricolages : dans la Salle Bricolo de Sports 5 (entre le vétérinaire Jutzeler et l’Amalgame) à Yverdon-les-Bains.</span></p>",
  theme: null,
  tags: [
    {
      id: 9,
      name: "La salle Bricolo",
      slug: "la-salle-bricolo",
      createdAt: "2023-06-07T08:28:56.160Z",
      updatedAt: "2023-06-07T08:28:59.455Z",
      publishedAt: "2023-06-07T08:28:59.454Z",
      locale: "en",
      children: [],
      parent: {
        id: 14,
        name: "Salles",
        slug: "tag",
        createdAt: "2023-06-07T08:31:52.190Z",
        updatedAt: "2023-06-07T08:31:52.889Z",
        publishedAt: "2023-06-07T08:31:52.887Z",
        locale: "en"
      }
    },
    {
      id: 16,
      name: "Activités",
      slug: "activites",
      createdAt: "2023-06-07T08:36:30.397Z",
      updatedAt: "2023-06-07T08:38:10.181Z",
      publishedAt: "2023-06-07T08:36:31.164Z",
      locale: "en",
      children: [],
        parent: {
          id: 15,
          name: "Type",
          slug: "type",
          createdAt: "2023-06-07T08:32:20.165Z",
          updatedAt: "2023-06-07T08:32:20.740Z",
          publishedAt: "2023-06-07T08:32:20.738Z",
          locale: "en"
        }
    }
  ],
  "variants": [],
  "buttons": []
};

export const ListDebug = Template.bind({});
ListDebug.args = {
  debug: true,
  position: 2,
  display: `list`,
  mode: `allday`,
  locale: "en",
  title: "Atelier Bricolage",
  subtitle: "Event title",
  slug: "atelier-bricolage",
  dateStart: "2023-06-07",
  dateEnd: "2023-06-07",
  timeStart: "14:00",
  timeEnd: "17:00",
  images: null,
  body: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">On vous accueille dans un endroit spécialement aménagé pour les bricolages : dans la Salle Bricolo de Sports 5 (entre le vétérinaire Jutzeler et l’Amalgame) à Yverdon-les-Bains.</span></p>",
  theme: null,
  tags: [
    {
      id: 9,
      name: "La salle Bricolo",
      slug: "la-salle-bricolo",
      createdAt: "2023-06-07T08:28:56.160Z",
      updatedAt: "2023-06-07T08:28:59.455Z",
      publishedAt: "2023-06-07T08:28:59.454Z",
      locale: "en",
      children: [],
      parent: {
        id: 14,
        name: "Salles",
        slug: "tag",
        createdAt: "2023-06-07T08:31:52.190Z",
        updatedAt: "2023-06-07T08:31:52.889Z",
        publishedAt: "2023-06-07T08:31:52.887Z",
        locale: "en"
      }
    },
    {
      id: 16,
      name: "Activités",
      slug: "activites",
      createdAt: "2023-06-07T08:36:30.397Z",
      updatedAt: "2023-06-07T08:38:10.181Z",
      publishedAt: "2023-06-07T08:36:31.164Z",
      locale: "en",
      children: [],
        parent: {
          id: 15,
          name: "Type",
          slug: "type",
          createdAt: "2023-06-07T08:32:20.165Z",
          updatedAt: "2023-06-07T08:32:20.740Z",
          publishedAt: "2023-06-07T08:32:20.738Z",
          locale: "en"
        }
    }
  ],
  "variants": [],
  "buttons": []
};

export const PopupDebug = Template.bind({});
PopupDebug.args = {
  debug: true,
  position: 2,
  display: `popup`,
  mode: `allday`,
  locale: "en",
  title: "Atelier Bricolage",
  subtitle: "Event title",
  slug: "atelier-bricolage",
  dateStart: "2023-06-07",
  dateEnd: "2023-06-07",
  timeStart: "14:00",
  timeEnd: "17:00",
  images: null,
  body: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">On vous accueille dans un endroit spécialement aménagé pour les bricolages : dans la Salle Bricolo de Sports 5 (entre le vétérinaire Jutzeler et l’Amalgame) à Yverdon-les-Bains.</span></p>",
  theme: null,
  tags: [
    {
      id: 9,
      name: "La salle Bricolo",
      slug: "la-salle-bricolo",
      createdAt: "2023-06-07T08:28:56.160Z",
      updatedAt: "2023-06-07T08:28:59.455Z",
      publishedAt: "2023-06-07T08:28:59.454Z",
      locale: "en",
      children: [],
      parent: {
        id: 14,
        name: "Salles",
        slug: "tag",
        createdAt: "2023-06-07T08:31:52.190Z",
        updatedAt: "2023-06-07T08:31:52.889Z",
        publishedAt: "2023-06-07T08:31:52.887Z",
        locale: "en"
      }
    },
    {
      id: 16,
      name: "Activités",
      slug: "activites",
      createdAt: "2023-06-07T08:36:30.397Z",
      updatedAt: "2023-06-07T08:38:10.181Z",
      publishedAt: "2023-06-07T08:36:31.164Z",
      locale: "en",
      children: [],
        parent: {
          id: 15,
          name: "Type",
          slug: "type",
          createdAt: "2023-06-07T08:32:20.165Z",
          updatedAt: "2023-06-07T08:32:20.740Z",
          publishedAt: "2023-06-07T08:32:20.738Z",
          locale: "en"
        }
    }
  ],
  "variants": [],
  "buttons": []
};

export const RowDebug = Template.bind({});
RowDebug.args = {
  debug: true,
  position: 2,
  display: `row`,
  mode: `allday`,
  locale: "en",
  title: "Atelier Bricolage",
  subtitle: "Event title",
  slug: "atelier-bricolage",
  dateStart: "2023-06-07",
  dateEnd: "2023-07-07",
  timeStart: "14:00",
  timeEnd: "17:00",
  images: null,
  scene: [<h1>hello scene</h1>],
  body: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">On vous accueille dans un endroit spécialement aménagé pour les bricolages : dans la Salle Bricolo de Sports 5 (entre le vétérinaire Jutzeler et l’Amalgame) à Yverdon-les-Bains.</span></p>",
  theme: null,
  tags: [
    {
      id: 9,
      name: "La salle Bricolo",
      slug: "la-salle-bricolo",
      createdAt: "2023-06-07T08:28:56.160Z",
      updatedAt: "2023-06-07T08:28:59.455Z",
      publishedAt: "2023-06-07T08:28:59.454Z",
      locale: "en",
      children: [],
      parent: {
        id: 14,
        name: "Salles",
        slug: "tag",
        createdAt: "2023-06-07T08:31:52.190Z",
        updatedAt: "2023-06-07T08:31:52.889Z",
        publishedAt: "2023-06-07T08:31:52.887Z",
        locale: "en"
      }
    },
    {
      id: 16,
      name: "Activités",
      slug: "activites",
      createdAt: "2023-06-07T08:36:30.397Z",
      updatedAt: "2023-06-07T08:38:10.181Z",
      publishedAt: "2023-06-07T08:36:31.164Z",
      locale: "en",
      children: [],
        parent: {
          id: 15,
          name: "Type",
          slug: "type",
          createdAt: "2023-06-07T08:32:20.165Z",
          updatedAt: "2023-06-07T08:32:20.740Z",
          publishedAt: "2023-06-07T08:32:20.738Z",
          locale: "en"
        }
    }
  ],
  "variants": [],
  "buttons": []
};

export const GridDebug = Template.bind({});
GridDebug.args = {
  debug: true,
  position: 2,
  display: `grid`,
  mode: `allday`,
  locale: "en",
  title: "Atelier Bricolage",
  subtitle: "Event title",
  slug: "atelier-bricolage",
  dateStart: "2023-06-07",
  dateEnd: "2023-06-07",
  timeStart: "14:00",
  timeEnd: "17:00",
  images: null,
  scene: [<h1>hello scene</h1>],
  body: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">On vous accueille dans un endroit spécialement aménagé pour les bricolages : dans la Salle Bricolo de Sports 5 (entre le vétérinaire Jutzeler et l’Amalgame) à Yverdon-les-Bains.</span></p>",
  theme: null,
  tags: [
    {
      id: 9,
      name: "La salle Bricolo",
      slug: "la-salle-bricolo",
      createdAt: "2023-06-07T08:28:56.160Z",
      updatedAt: "2023-06-07T08:28:59.455Z",
      publishedAt: "2023-06-07T08:28:59.454Z",
      locale: "en",
      children: [],
      parent: {
        id: 14,
        name: "Salles",
        slug: "tag",
        createdAt: "2023-06-07T08:31:52.190Z",
        updatedAt: "2023-06-07T08:31:52.889Z",
        publishedAt: "2023-06-07T08:31:52.887Z",
        locale: "en"
      }
    },
    {
      id: 16,
      name: "Activités",
      slug: "activites",
      createdAt: "2023-06-07T08:36:30.397Z",
      updatedAt: "2023-06-07T08:38:10.181Z",
      publishedAt: "2023-06-07T08:36:31.164Z",
      locale: "en",
      children: [],
        parent: {
          id: 15,
          name: "Type",
          slug: "type",
          createdAt: "2023-06-07T08:32:20.165Z",
          updatedAt: "2023-06-07T08:32:20.740Z",
          publishedAt: "2023-06-07T08:32:20.738Z",
          locale: "en"
        }
    }
  ],
  "variants": [],
  "buttons": []
};

export const PageDebug = Template.bind({});
PageDebug.args = {
  debug: true,
  position: 2,
  display: `page`,
  mode: `allday`,
  locale: "en",
  title: "Atelier Bricolage",
  subtitle: "Event title",
  slug: "atelier-bricolage",
  dateStart: "2023-06-07",
  dateEnd: "2023-06-07",
  timeStart: "14:00",
  timeEnd: "17:00",
  images: null,
  body: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">On vous accueille dans un endroit spécialement aménagé pour les bricolages : dans la Salle Bricolo de Sports 5 (entre le vétérinaire Jutzeler et l’Amalgame) à Yverdon-les-Bains.</span></p>",
  theme: null,
  tags: [
    {
      id: 9,
      name: "La salle Bricolo",
      slug: "la-salle-bricolo",
      createdAt: "2023-06-07T08:28:56.160Z",
      updatedAt: "2023-06-07T08:28:59.455Z",
      publishedAt: "2023-06-07T08:28:59.454Z",
      locale: "en",
      children: [],
      parent: {
        id: 14,
        name: "Salles",
        slug: "tag",
        createdAt: "2023-06-07T08:31:52.190Z",
        updatedAt: "2023-06-07T08:31:52.889Z",
        publishedAt: "2023-06-07T08:31:52.887Z",
        locale: "en"
      }
    },
    {
      id: 16,
      name: "Activités",
      slug: "activites",
      createdAt: "2023-06-07T08:36:30.397Z",
      updatedAt: "2023-06-07T08:38:10.181Z",
      publishedAt: "2023-06-07T08:36:31.164Z",
      locale: "en",
      children: [],
        parent: {
          id: 15,
          name: "Type",
          slug: "type",
          createdAt: "2023-06-07T08:32:20.165Z",
          updatedAt: "2023-06-07T08:32:20.740Z",
          publishedAt: "2023-06-07T08:32:20.738Z",
          locale: "en"
        }
    }
  ],
  "variants": [],
  "buttons": []
};

export const SlideDebug = Template.bind({});
SlideDebug.args = {
  debug: true,
  position: 2,
  display: `slide`,
  mode: `allday`,
  locale: "en",
  title: "Atelier Bricolage",
  subtitle: "Event title",
  slug: "atelier-bricolage",
  dateStart: "2023-06-07",
  dateEnd: "2023-06-07",
  timeStart: "14:00",
  timeEnd: "17:00",
  images: null,
  body: "<p><span style=\"background-color:rgb(255,255,255);color:rgb(0,0,0);\">On vous accueille dans un endroit spécialement aménagé pour les bricolages : dans la Salle Bricolo de Sports 5 (entre le vétérinaire Jutzeler et l’Amalgame) à Yverdon-les-Bains.</span></p>",
  theme: null,
  tags: [
    {
      id: 9,
      name: "La salle Bricolo",
      slug: "la-salle-bricolo",
      createdAt: "2023-06-07T08:28:56.160Z",
      updatedAt: "2023-06-07T08:28:59.455Z",
      publishedAt: "2023-06-07T08:28:59.454Z",
      locale: "en",
      children: [],
      parent: {
        id: 14,
        name: "Salles",
        slug: "tag",
        createdAt: "2023-06-07T08:31:52.190Z",
        updatedAt: "2023-06-07T08:31:52.889Z",
        publishedAt: "2023-06-07T08:31:52.887Z",
        locale: "en"
      }
    },
    {
      id: 16,
      name: "Activités",
      slug: "activites",
      createdAt: "2023-06-07T08:36:30.397Z",
      updatedAt: "2023-06-07T08:38:10.181Z",
      publishedAt: "2023-06-07T08:36:31.164Z",
      locale: "en",
      children: [],
        parent: {
          id: 15,
          name: "Type",
          slug: "type",
          createdAt: "2023-06-07T08:32:20.165Z",
          updatedAt: "2023-06-07T08:32:20.740Z",
          publishedAt: "2023-06-07T08:32:20.738Z",
          locale: "en"
        }
    }
  ],
  "variants": [],
  "buttons": []
};