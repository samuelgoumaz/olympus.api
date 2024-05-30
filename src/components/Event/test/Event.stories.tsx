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

export const VariantDebug = Template.bind({});
VariantDebug.args = {
  debug: true,
  position: 2,
  display: `variant`,
  mode: `allday`,
  locale: "en",
  id: 26,
  title: "La Grange au Lac, Evian",
  subtitle: "À venir",
  sku: "variant-25",
  createdAt: "2023-06-20T01:12:56.713Z",
  updatedAt: "2023-06-28T12:31:05.268Z",
  publishedAt: "2023-06-20T01:12:57.432Z",
  in_cart: null,
  action: null,
  date: {
    id: 24,
    date_start: "2024-07-01",
    date_end: null,
    hour_start: null,
    hour_end: null
  },
  price: null,
  stock: null,
  product: null,
  event: {
      "id": 10,
      "title": "Requiem de Fauré",
      "subtitle": null,
      "slug": "requiem-de-faure",
      "date_start": "2024-06-19",
      "date_end": "2024-07-01",
      "is_all_day": null,
      "time_start": "00:00",
      "time_end": "00:00",
      "teaser": "",
      "createdAt": "2023-06-20T00:51:46.511Z",
      "updatedAt": "2023-06-29T14:09:26.180Z",
      "publishedAt": "2023-06-20T00:52:08.123Z",
      "locale": "fr",
      "theme": {
          "id": 9,
          "title": "Requiem de Fauré",
          "slug": "requiem-de-faure",
          "primary": "#1f214e",
          "secondary": "#d8b3bf",
          "createdAt": "2023-06-20T00:18:54.542Z",
          "updatedAt": "2023-06-20T00:18:55.027Z"
      },
      "images": [
          {
              "id": 26,
              "name": "10_Faure.jpg",
              "alternativeText": null,
              "caption": null,
              "width": 772,
              "height": 1036,
              "formats": {
                  "thumbnail": {
                      "name": "thumbnail_10_Faure.jpg",
                      "hash": "thumbnail_10_Faure_29a75072e2",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 116,
                      "height": 156,
                      "size": 4.21,
                      "url": "/uploads/thumbnail_10_Faure_29a75072e2.jpg"
                  },
                  "medium": {
                      "name": "medium_10_Faure.jpg",
                      "hash": "medium_10_Faure_29a75072e2",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 559,
                      "height": 750,
                      "size": 51.96,
                      "url": "/uploads/medium_10_Faure_29a75072e2.jpg"
                  },
                  "small": {
                      "name": "small_10_Faure.jpg",
                      "hash": "small_10_Faure_29a75072e2",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 373,
                      "height": 500,
                      "size": 27.17,
                      "url": "/uploads/small_10_Faure_29a75072e2.jpg"
                  },
                  "large": {
                      "name": "large_10_Faure.jpg",
                      "hash": "large_10_Faure_29a75072e2",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "path": null,
                      "width": 745,
                      "height": 1000,
                      "size": 81.14,
                      "url": "/uploads/large_10_Faure_29a75072e2.jpg"
                  }
              },
              "hash": "10_Faure_29a75072e2",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "size": 85.8,
              "url": "/uploads/10_Faure_29a75072e2.jpg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "folderPath": "/1/2",
              "createdAt": "2023-06-26T09:41:57.404Z",
              "updatedAt": "2023-06-26T09:41:57.404Z"
          },
          {
              "id": 12,
              "name": "EVL_PourquoiCeConcert_23:249.png",
              "alternativeText": null,
              "caption": null,
              "width": 1488,
              "height": 1996,
              "formats": {
                  "thumbnail": {
                      "name": "thumbnail_EVL_PourquoiCeConcert_23:249.png",
                      "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4",
                      "ext": ".png",
                      "mime": "image/png",
                      "path": null,
                      "width": 116,
                      "height": 156,
                      "size": 5.75,
                      "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4.png"
                  },
                  "medium": {
                      "name": "medium_EVL_PourquoiCeConcert_23:249.png",
                      "hash": "medium_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4",
                      "ext": ".png",
                      "mime": "image/png",
                      "path": null,
                      "width": 559,
                      "height": 750,
                      "size": 49.31,
                      "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4.png"
                  },
                  "small": {
                      "name": "small_EVL_PourquoiCeConcert_23:249.png",
                      "hash": "small_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4",
                      "ext": ".png",
                      "mime": "image/png",
                      "path": null,
                      "width": 373,
                      "height": 500,
                      "size": 28.7,
                      "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4.png"
                  },
                  "large": {
                      "name": "large_EVL_PourquoiCeConcert_23:249.png",
                      "hash": "large_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4",
                      "ext": ".png",
                      "mime": "image/png",
                      "path": null,
                      "width": 745,
                      "height": 1000,
                      "size": 70.77,
                      "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4.png"
                  }
              },
              "hash": "EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4",
              "ext": ".png",
              "mime": "image/png",
              "size": 18.27,
              "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_249_a5d49e3dc4.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "folderPath": "/1/2",
              "createdAt": "2023-06-20T00:24:47.897Z",
              "updatedAt": "2023-06-26T09:42:17.701Z"
          }
      ]
  },
  article: null
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