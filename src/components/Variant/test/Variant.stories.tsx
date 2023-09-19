/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Variant from '../Variant';

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
  title: 'ReactComponentLibrary/Variant',
  component: Variant,
} as ComponentMeta<typeof Variant>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Variant> = (args) => <Variant {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const SmartSingle = Template.bind({});
SmartSingle.args = {
  currency: "EUR",
  currencyRate: 1.5,
  display: "smart",
  variants: {
    "title": "Cours 001",
    "subtitle": false,
    "sku": "cours-001",
    "formular": null,
    "type": "event",
    "parent": {
        "id": 2,
        "title": "Event Title #2 ",
        "subtitle": "Event Subtitle #2",
        "slug": "event-title-2",
        "date_start": "2022-08-22",
        "date_end": "2023-08-27",
        "is_all_day": null,
        "time_start": "08:00",
        "time_end": "10:00",
        "teaser": "",
        "createdAt": "2023-08-23T01:03:41.363Z",
        "updatedAt": "2023-08-28T15:22:27.206Z",
        "publishedAt": "2023-08-23T01:03:42.472Z",
        "locale": "en",
        "tags": [
            {
                "id": 2,
                "name": "Other List",
                "slug": "other-list",
                "createdAt": "2023-08-25T12:27:20.178Z",
                "updatedAt": "2023-08-25T12:27:21.511Z",
                "publishedAt": "2023-08-25T12:27:21.509Z",
                "locale": "en"
            }
        ],
        "theme": null
    },
    "in_cart": true,
    "date": {
        "id": 1,
        "date_start": "2023-09-22",
        "date_end": "2023-09-23",
        "hour_start": "09:00:00.000",
        "hour_end": "20:00:00.000"
    },
    "action": false,
    "price": false,
    "stock": {
        "id": 2,
        "limit": 10
    },
    "tags": [
        {
            "id": 2,
            "name": "Other List",
            "slug": "other-list",
            "createdAt": "2023-08-25T12:27:20.178Z",
            "updatedAt": "2023-08-25T12:27:21.511Z",
            "publishedAt": "2023-08-25T12:27:21.509Z",
            "locale": "en"
        }
    ],
    "quantity": 2,
    "id": 2,
    "selected": true
}
};

export const SelectorSingle = Template.bind({});
SelectorSingle.args = {
  currency: "EUR",
  currencyRate: 1.5,
  display: "selector",
  variants: [
    {
        "title": "XXL",
        "subtitle": false,
        "sku": "xxl",
        "formular": null,
        "type": "product",
        "parent": {
            "id": 1,
            "title": "Product title #1",
            "subtitle": "Product subtitle #1",
            "slug": "product",
            "teaser": "<p>Teaser</p>",
            "createdAt": "2023-08-22T20:21:17.603Z",
            "updatedAt": "2023-08-27T15:25:14.886Z",
            "publishedAt": "2023-08-22T20:21:18.387Z",
            "locale": "en",
            "tags": [
                {
                    "id": 1,
                    "name": "List",
                    "slug": "list",
                    "createdAt": "2023-08-23T01:01:04.295Z",
                    "updatedAt": "2023-08-23T01:01:05.817Z",
                    "publishedAt": "2023-08-23T01:01:05.814Z",
                    "locale": "en"
                }
            ],
            "default": null,
            "clone": null,
            "theme": null
        },
        "in_cart": true,
        "date": false,
        "action": false,
        "price": {
            "id": 1,
            "price": 40,
            "price_strike": 0
        },
        "stock": {
            "id": 1,
            "limit": 10
        },
        "tags": [
            {
                "id": 1,
                "name": "List",
                "slug": "list",
                "createdAt": "2023-08-23T01:01:04.295Z",
                "updatedAt": "2023-08-23T01:01:05.817Z",
                "publishedAt": "2023-08-23T01:01:05.814Z",
                "locale": "en"
            }
        ],
        "quantity": 2,
        "clone": false,
        "id": 1,
        "selected": false
    }
]
};

export const SelectorMultiple = Template.bind({});
SelectorMultiple.args = {
  currency: "EUR",
  currencyRate: 1.5,
  display: "selector",
  variants: [
    {
        "title": "Cours 001",
        "subtitle": false,
        "sku": "cours-001",
        "formular": null,
        "type": "event",
        "parent": {
            "id": 2,
            "title": "Event Title #2 ",
            "subtitle": "Event Subtitle #2",
            "slug": "event-title-2",
            "date_start": "2022-08-22",
            "date_end": "2023-08-27",
            "is_all_day": null,
            "time_start": "08:00",
            "time_end": "10:00",
            "teaser": "",
            "createdAt": "2023-08-23T01:03:41.363Z",
            "updatedAt": "2023-08-28T15:22:27.206Z",
            "publishedAt": "2023-08-23T01:03:42.472Z",
            "locale": "en",
            "tags": [
                {
                    "id": 2,
                    "name": "Other List",
                    "slug": "other-list",
                    "createdAt": "2023-08-25T12:27:20.178Z",
                    "updatedAt": "2023-08-25T12:27:21.511Z",
                    "publishedAt": "2023-08-25T12:27:21.509Z",
                    "locale": "en"
                }
            ],
            "theme": null
        },
        "in_cart": true,
        "date": {
            "id": 1,
            "date_start": "2023-09-22",
            "date_end": "2023-09-23",
            "hour_start": "09:00:00.000",
            "hour_end": "20:00:00.000"
        },
        "action": false,
        "price": false,
        "stock": {
            "id": 2,
            "limit": 10
        },
        "tags": [
            {
                "id": 2,
                "name": "Other List",
                "slug": "other-list",
                "createdAt": "2023-08-25T12:27:20.178Z",
                "updatedAt": "2023-08-25T12:27:21.511Z",
                "publishedAt": "2023-08-25T12:27:21.509Z",
                "locale": "en"
            }
        ],
        "quantity": 2,
        "id": 2,
        "selected": true
    },
    {
        "title": "XXL",
        "subtitle": false,
        "sku": "xxl",
        "formular": null,
        "type": "product",
        "parent": {
            "id": 1,
            "title": "Product title #1",
            "subtitle": "Product subtitle #1",
            "slug": "product",
            "teaser": "<p>Teaser</p>",
            "createdAt": "2023-08-22T20:21:17.603Z",
            "updatedAt": "2023-08-27T15:25:14.886Z",
            "publishedAt": "2023-08-22T20:21:18.387Z",
            "locale": "en",
            "tags": [
                {
                    "id": 1,
                    "name": "List",
                    "slug": "list",
                    "createdAt": "2023-08-23T01:01:04.295Z",
                    "updatedAt": "2023-08-23T01:01:05.817Z",
                    "publishedAt": "2023-08-23T01:01:05.814Z",
                    "locale": "en"
                }
            ],
            "default": null,
            "clone": null,
            "theme": null
        },
        "in_cart": true,
        "date": false,
        "action": false,
        "price": {
            "id": 1,
            "price": 40,
            "price_strike": 0
        },
        "stock": {
            "id": 1,
            "limit": 10
        },
        "tags": [
            {
                "id": 1,
                "name": "List",
                "slug": "list",
                "createdAt": "2023-08-23T01:01:04.295Z",
                "updatedAt": "2023-08-23T01:01:05.817Z",
                "publishedAt": "2023-08-23T01:01:05.814Z",
                "locale": "en"
            }
        ],
        "quantity": 2,
        "clone": false,
        "id": 1,
        "selected": false
    },
    {
        "title": "Reportage",
        "subtitle": "Alexandre Borgeaud",
        "sku": "reportage",
        "formular": null,
        "type": "article",
        "parent": {
            "id": 2,
            "title": "Articles Element #2",
            "subtitle": "Articles Element Subtitle #2",
            "slug": "articles-element-2",
            "date": "2023-08-25",
            "teaser": "<p>Hello #2</p>",
            "createdAt": "2023-08-25T14:07:45.751Z",
            "updatedAt": "2023-08-28T16:07:14.397Z",
            "publishedAt": "2023-08-25T14:07:46.634Z",
            "locale": "en",
            "tags": [
                {
                    "id": 2,
                    "name": "Other List",
                    "slug": "other-list",
                    "createdAt": "2023-08-25T12:27:20.178Z",
                    "updatedAt": "2023-08-25T12:27:21.511Z",
                    "publishedAt": "2023-08-25T12:27:21.509Z",
                    "locale": "en"
                }
            ],
            "theme": null
        },
        "in_cart": true,
        "date": false,
        "action": {
            "id": 2,
            "url": "#",
            "title": "Website"
        },
        "price": {
            "id": 3,
            "price": 30,
            "price_strike": null
        },
        "stock": {
            "id": 3,
            "limit": 10
        },
        "tags": [
            {
                "id": 2,
                "name": "Other List",
                "slug": "other-list",
                "createdAt": "2023-08-25T12:27:20.178Z",
                "updatedAt": "2023-08-25T12:27:21.511Z",
                "publishedAt": "2023-08-25T12:27:21.509Z",
                "locale": "en"
            }
        ],
        "quantity": 1,
        "id": 3,
        "selected": false
    }
]
};

export const TableMultiple = Template.bind({});
TableMultiple.args = {
  currency: "EUR",
  currencyRate: 1.5,
  display: "table",
  /*variants: [
    {
        "id": 12,
        "title": "Église Sainte-Croix, Carouge (GE)",
        "subtitle": "only date",
        "sku": "variant-11",
        "createdAt": "2023-06-20T01:01:28.154Z",
        "updatedAt": "2023-07-03T15:58:16.308Z",
        "publishedAt": "2023-06-20T01:01:28.979Z",
        "locale": "fr",
        "action": null,
        "date": {
            "id": 10,
            "date_start": "2023-09-24",
            "date_end": null,
            "hour_start": "17:00:00.000",
            "hour_end": null
        },
        "price": null,
        "stock": null,
        "product": null,
        "event": {
            "id": 3,
            "title": "Oeuvres de Theo Flury",
            "subtitle": null,
            "slug": "oeuvres-de-theo-flury",
            "date_start": "2023-10-09",
            "date_end": "2023-10-13",
            "is_all_day": null,
            "time_start": "00:00",
            "time_end": "00:00",
            "teaser": "",
            "createdAt": "2023-06-20T00:34:40.844Z",
            "updatedAt": "2023-06-28T17:45:03.178Z",
            "publishedAt": "2023-06-20T00:34:42.099Z",
            "locale": "fr",
            "theme": {
                "id": 11,
                "title": "The Fleury",
                "slug": "the-fleury",
                "primary": "#fdeef6",
                "secondary": "#4d7436",
                "createdAt": "2023-06-20T00:19:45.915Z",
                "updatedAt": "2023-06-20T00:19:46.504Z",
                "publishedAt": "2023-06-20T00:19:46.502Z"
            }
        }
    },
    {
        "id": 27,
        "title": "Prototype #2",
        "subtitle": "only price",
        "sku": "variant-4",
        "createdAt": "2023-07-03T15:58:42.177Z",
        "updatedAt": "2023-07-03T16:01:46.663Z",
        "publishedAt": "2023-07-03T15:58:53.545Z",
        "locale": "fr",
        "action": null,
        "date": null,
        "price": {
            "id": 1,
            "price": 100,
            "price_strike": 120
        },
        "stock": null,
        "product": null,
        "event": {
            "id": 3,
            "title": "Oeuvres de Theo Flury",
            "subtitle": null,
            "slug": "oeuvres-de-theo-flury",
            "date_start": "2023-10-09",
            "date_end": "2023-10-13",
            "is_all_day": null,
            "time_start": "00:00",
            "time_end": "00:00",
            "teaser": "",
            "createdAt": "2023-06-20T00:34:40.844Z",
            "updatedAt": "2023-06-28T17:45:03.178Z",
            "publishedAt": "2023-06-20T00:34:42.099Z",
            "locale": "fr",
            "theme": {
                "id": 11,
                "title": "The Fleury",
                "slug": "the-fleury",
                "primary": "#fdeef6",
                "secondary": "#4d7436",
                "createdAt": "2023-06-20T00:19:45.915Z",
                "updatedAt": "2023-06-20T00:19:46.504Z",
                "publishedAt": "2023-06-20T00:19:46.502Z"
            }
        }
    },
    {
        "id": 28,
        "title": "Prototype #3",
        "subtitle": "date and price",
        "sku": "variant-19",
        "createdAt": "2023-07-03T15:59:53.184Z",
        "updatedAt": "2023-07-03T15:59:53.855Z",
        "publishedAt": "2023-07-03T15:59:53.853Z",
        "locale": "fr",
        "action": null,
        "date": {
            "id": 27,
            "date_start": "2024-04-20",
            "date_end": "2023-07-13",
            "hour_start": "20:00:00.000",
            "hour_end": "00:45:00.000"
        },
        "price": {
            "id": 2,
            "price": 100,
            "price_strike": 120
        },
        "stock": null,
        "product": null,
        "event": {
            "id": 3,
            "title": "Oeuvres de Theo Flury",
            "subtitle": null,
            "slug": "oeuvres-de-theo-flury",
            "date_start": "2023-10-09",
            "date_end": "2023-10-13",
            "is_all_day": null,
            "time_start": "00:00",
            "time_end": "00:00",
            "teaser": "",
            "createdAt": "2023-06-20T00:34:40.844Z",
            "updatedAt": "2023-06-28T17:45:03.178Z",
            "publishedAt": "2023-06-20T00:34:42.099Z",
            "locale": "fr",
            "theme": {
                "id": 11,
                "title": "The Fleury",
                "slug": "the-fleury",
                "primary": "#fdeef6",
                "secondary": "#4d7436",
                "createdAt": "2023-06-20T00:19:45.915Z",
                "updatedAt": "2023-06-20T00:19:46.504Z",
                "publishedAt": "2023-06-20T00:19:46.502Z"
            }
        }
    },
    {
        "id": 30,
        "title": "Prototype #5",
        "subtitle": "date and price and stock and action",
        "sku": "variant-28",
        "createdAt": "2023-07-03T16:01:39.798Z",
        "updatedAt": "2023-07-03T16:01:40.365Z",
        "publishedAt": "2023-07-03T16:01:40.362Z",
        "locale": "fr",
        "action": {
            "id": 19,
            "url": "#",
            "in_cart": true
        },
        "date": {
            "id": 29,
            "date_start": "2024-04-20",
            "date_end": "2023-07-19",
            "hour_start": "17:00:00.000",
            "hour_end": "00:45:00.000"
        },
        "price": {
            "id": 4,
            "price": 100,
            "price_strike": 120
        },
        "stock": {
            "id": 2,
            "limit": 5,
            "counter": null
        },
        "product": null,
        "event": {
            "id": 3,
            "title": "Oeuvres de Theo Flury",
            "subtitle": null,
            "slug": "oeuvres-de-theo-flury",
            "date_start": "2023-10-09",
            "date_end": "2023-10-13",
            "is_all_day": null,
            "time_start": "00:00",
            "time_end": "00:00",
            "teaser": "",
            "createdAt": "2023-06-20T00:34:40.844Z",
            "updatedAt": "2023-06-28T17:45:03.178Z",
            "publishedAt": "2023-06-20T00:34:42.099Z",
            "locale": "fr",
            "theme": {
                "id": 11,
                "title": "The Fleury",
                "slug": "the-fleury",
                "primary": "#fdeef6",
                "secondary": "#4d7436",
                "createdAt": "2023-06-20T00:19:45.915Z",
                "updatedAt": "2023-06-20T00:19:46.504Z",
                "publishedAt": "2023-06-20T00:19:46.502Z"
            }
        }
    },
    {
        "id": 29,
        "title": "Prototype #4",
        "subtitle": "date and price and stock",
        "sku": "variant-27",
        "createdAt": "2023-07-03T16:00:41.246Z",
        "updatedAt": "2023-07-03T16:01:59.605Z",
        "publishedAt": "2023-07-03T16:00:41.945Z",
        "locale": "fr",
        "action": null,
        "date": {
            "id": 28,
            "date_start": "2024-04-20",
            "date_end": "2023-06-29",
            "hour_start": "17:00:00.000",
            "hour_end": "00:45:00.000"
        },
        "price": {
            "id": 3,
            "price": 100,
            "price_strike": 120
        },
        "stock": {
            "id": 1,
            "limit": 5,
            "counter": null
        },
        "product": null,
        "event": {
            "id": 3,
            "title": "Oeuvres de Theo Flury",
            "subtitle": null,
            "slug": "oeuvres-de-theo-flury",
            "date_start": "2023-10-09",
            "date_end": "2023-10-13",
            "is_all_day": null,
            "time_start": "00:00",
            "time_end": "00:00",
            "teaser": "",
            "createdAt": "2023-06-20T00:34:40.844Z",
            "updatedAt": "2023-06-28T17:45:03.178Z",
            "publishedAt": "2023-06-20T00:34:42.099Z",
            "locale": "fr",
            "theme": {
                "id": 11,
                "title": "The Fleury",
                "slug": "the-fleury",
                "primary": "#fdeef6",
                "secondary": "#4d7436",
                "createdAt": "2023-06-20T00:19:45.915Z",
                "updatedAt": "2023-06-20T00:19:46.504Z",
                "publishedAt": "2023-06-20T00:19:46.502Z"
            }
        }
    }
]*/
variants: [
    {
        "title": "Cours 001",
        "subtitle": false,
        "sku": "cours-001",
        "formular": null,
        "type": "event",
        "parent": {
            "id": 2,
            "title": "Event Title #2 ",
            "subtitle": "Event Subtitle #2",
            "slug": "event-title-2",
            "date_start": "2022-08-22",
            "date_end": "2023-08-27",
            "is_all_day": null,
            "time_start": "08:00",
            "time_end": "10:00",
            "teaser": "",
            "createdAt": "2023-08-23T01:03:41.363Z",
            "updatedAt": "2023-08-28T15:22:27.206Z",
            "publishedAt": "2023-08-23T01:03:42.472Z",
            "locale": "en",
            "tags": [
                {
                    "id": 2,
                    "name": "Other List",
                    "slug": "other-list",
                    "createdAt": "2023-08-25T12:27:20.178Z",
                    "updatedAt": "2023-08-25T12:27:21.511Z",
                    "publishedAt": "2023-08-25T12:27:21.509Z",
                    "locale": "en"
                }
            ],
            "theme": null
        },
        "in_cart": true,
        "date": {
            "id": 1,
            "date_start": "2023-09-22",
            "date_end": "2023-09-23",
            "hour_start": "09:00:00.000",
            "hour_end": "20:00:00.000"
        },
        "action": false,
        "price": false,
        "stock": {
            "id": 2,
            "limit": 10
        },
        "tags": [
            {
                "id": 2,
                "name": "Other List",
                "slug": "other-list",
                "createdAt": "2023-08-25T12:27:20.178Z",
                "updatedAt": "2023-08-25T12:27:21.511Z",
                "publishedAt": "2023-08-25T12:27:21.509Z",
                "locale": "en"
            }
        ],
        "quantity": 2,
        "id": 2,
        "selected": true
    },
    {
        "title": "XXL",
        "subtitle": false,
        "sku": "xxl",
        "formular": null,
        "type": "product",
        "parent": {
            "id": 1,
            "title": "Product title #1",
            "subtitle": "Product subtitle #1",
            "slug": "product",
            "teaser": "<p>Teaser</p>",
            "createdAt": "2023-08-22T20:21:17.603Z",
            "updatedAt": "2023-08-27T15:25:14.886Z",
            "publishedAt": "2023-08-22T20:21:18.387Z",
            "locale": "en",
            "tags": [
                {
                    "id": 1,
                    "name": "List",
                    "slug": "list",
                    "createdAt": "2023-08-23T01:01:04.295Z",
                    "updatedAt": "2023-08-23T01:01:05.817Z",
                    "publishedAt": "2023-08-23T01:01:05.814Z",
                    "locale": "en"
                }
            ],
            "default": null,
            "clone": null,
            "theme": null
        },
        "in_cart": true,
        "date": false,
        "action": false,
        "price": {
            "id": 1,
            "price": 40,
            "price_strike": 0
        },
        "stock": {
            "id": 1,
            "limit": 10
        },
        "tags": [
            {
                "id": 1,
                "name": "List",
                "slug": "list",
                "createdAt": "2023-08-23T01:01:04.295Z",
                "updatedAt": "2023-08-23T01:01:05.817Z",
                "publishedAt": "2023-08-23T01:01:05.814Z",
                "locale": "en"
            }
        ],
        "quantity": 2,
        "clone": false,
        "id": 1,
        "selected": false
    },
    {
        "title": "Reportage",
        "subtitle": "Alexandre Borgeaud",
        "sku": "reportage",
        "formular": null,
        "type": "article",
        "parent": {
            "id": 2,
            "title": "Articles Element #2",
            "subtitle": "Articles Element Subtitle #2",
            "slug": "articles-element-2",
            "date": "2023-08-25",
            "teaser": "<p>Hello #2</p>",
            "createdAt": "2023-08-25T14:07:45.751Z",
            "updatedAt": "2023-08-28T16:07:14.397Z",
            "publishedAt": "2023-08-25T14:07:46.634Z",
            "locale": "en",
            "tags": [
                {
                    "id": 2,
                    "name": "Other List",
                    "slug": "other-list",
                    "createdAt": "2023-08-25T12:27:20.178Z",
                    "updatedAt": "2023-08-25T12:27:21.511Z",
                    "publishedAt": "2023-08-25T12:27:21.509Z",
                    "locale": "en"
                }
            ],
            "theme": null
        },
        "in_cart": true,
        "date": false,
        "action": {
            "id": 2,
            "url": "#",
            "title": "Website"
        },
        "price": {
            "id": 3,
            "price": 30,
            "price_strike": null
        },
        "stock": {
            "id": 3,
            "limit": 10
        },
        "tags": [
            {
                "id": 2,
                "name": "Other List",
                "slug": "other-list",
                "createdAt": "2023-08-25T12:27:20.178Z",
                "updatedAt": "2023-08-25T12:27:21.511Z",
                "publishedAt": "2023-08-25T12:27:21.509Z",
                "locale": "en"
            }
        ],
        "quantity": 1,
        "id": 3,
        "selected": false
    }
]
};