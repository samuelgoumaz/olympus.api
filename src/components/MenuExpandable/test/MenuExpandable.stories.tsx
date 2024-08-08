/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuExpandable from '../MenuExpandable';

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
  title: 'ReactComponentLibrary/MenuExpandable',
  component: MenuExpandable,
} as ComponentMeta<typeof MenuExpandable>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof MenuExpandable> = (args) => <MenuExpandable {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Error = Template.bind({});
Error.args = {
  display: `sasd`,
  menu: `sdfasdfasdf`
};

export const Default = Template.bind({});
Default.args = {
  display: null,
  menu: [
    {
        "__component": "ui.menu",
        "id": 1,
        "title": "hotel",
        "subtitle": null,
        "url": null,
        "page": {
            "id": 2,
            "title": "Hotel",
            "subtitle": null,
            "slug": "hotel",
            "display": "vertical",
            "hv_negative": true,
            "hv_top": null,
            "createdAt": "2024-05-31T15:44:33.297Z",
            "updatedAt": "2024-05-31T16:38:21.144Z",
            "publishedAt": "2024-05-31T15:44:47.105Z",
            "locale": "en"
        },
        "submenu": []
    },
    {
        "__component": "ui.menu",
        "id": 2,
        "title": "Stay",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 7,
                "name": "economy twin",
                "url": "/product/economy-twin",
                "page": null
            },
            {
                "id": 8,
                "name": "superior room",
                "url": "/product/superior-room",
                "page": null
            },
            {
                "id": 9,
                "name": "premium room",
                "url": "/product/premium-room",
                "page": null
            },
            {
                "id": 10,
                "name": "deluxe room",
                "url": "/product/deluxe-room",
                "page": null
            },
            {
                "id": 11,
                "name": "suites",
                "url": "/product/suites",
                "page": null
            },
            {
                "id": 12,
                "name": "apartments",
                "url": "/product/apartments",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 4,
        "title": "eat",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 13,
                "name": "le restaurant",
                "url": "/product/le-restaurant",
                "page": null
            },
            {
                "id": 14,
                "name": "sunset",
                "url": "/product/sunset",
                "page": null
            },
            {
                "id": 15,
                "name": "moonclub",
                "url": "/product/moonclub",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 5,
        "title": "relax",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 16,
                "name": "ella’s baths",
                "url": "/product/ella-s-baths",
                "page": null
            },
            {
                "id": 17,
                "name": "spa",
                "url": null,
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 3,
        "title": "meet",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": []
    }
]
};

export const Inline = Template.bind({});
Inline.args = {
  display: "inline",
  menu: [
    {
        "__component": "ui.menu",
        "id": 1,
        "title": "hotel",
        "subtitle": null,
        "url": null,
        "page": {
            "id": 2,
            "title": "Hotel",
            "subtitle": null,
            "slug": "hotel",
            "display": "vertical",
            "hv_negative": true,
            "hv_top": null,
            "createdAt": "2024-05-31T15:44:33.297Z",
            "updatedAt": "2024-05-31T16:38:21.144Z",
            "publishedAt": "2024-05-31T15:44:47.105Z",
            "locale": "en"
        },
        "submenu": []
    },
    {
        "__component": "ui.menu",
        "id": 2,
        "title": "Stay",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 7,
                "name": "economy twin",
                "url": "/product/economy-twin",
                "page": null
            },
            {
                "id": 8,
                "name": "superior room",
                "url": "/product/superior-room",
                "page": null
            },
            {
                "id": 9,
                "name": "premium room",
                "url": "/product/premium-room",
                "page": null
            },
            {
                "id": 10,
                "name": "deluxe room",
                "url": "/product/deluxe-room",
                "page": null
            },
            {
                "id": 11,
                "name": "suites",
                "url": "/product/suites",
                "page": null
            },
            {
                "id": 12,
                "name": "apartments",
                "url": "/product/apartments",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 4,
        "title": "eat",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 13,
                "name": "le restaurant",
                "url": "/product/le-restaurant",
                "page": null
            },
            {
                "id": 14,
                "name": "sunset",
                "url": "/product/sunset",
                "page": null
            },
            {
                "id": 15,
                "name": "moonclub",
                "url": "/product/moonclub",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 5,
        "title": "relax",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 16,
                "name": "ella’s baths",
                "url": "/product/ella-s-baths",
                "page": null
            },
            {
                "id": 17,
                "name": "spa",
                "url": null,
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 3,
        "title": "meet",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": []
    }
]
};

export const List = Template.bind({});
List.args = {
  display: "list",
  menu: [
    {
        "__component": "ui.menu",
        "id": 1,
        "title": "hotel",
        "subtitle": null,
        "url": null,
        "page": {
            "id": 2,
            "title": "Hotel",
            "subtitle": null,
            "slug": "hotel",
            "display": "vertical",
            "hv_negative": true,
            "hv_top": null,
            "createdAt": "2024-05-31T15:44:33.297Z",
            "updatedAt": "2024-05-31T16:38:21.144Z",
            "publishedAt": "2024-05-31T15:44:47.105Z",
            "locale": "en"
        },
        "submenu": []
    },
    {
        "__component": "ui.menu",
        "id": 2,
        "title": "Stay",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 7,
                "name": "economy twin",
                "url": "/product/economy-twin",
                "page": null
            },
            {
                "id": 8,
                "name": "superior room",
                "url": "/product/superior-room",
                "page": null
            },
            {
                "id": 9,
                "name": "premium room",
                "url": "/product/premium-room",
                "page": null
            },
            {
                "id": 10,
                "name": "deluxe room",
                "url": "/product/deluxe-room",
                "page": null
            },
            {
                "id": 11,
                "name": "suites",
                "url": "/product/suites",
                "page": null
            },
            {
                "id": 12,
                "name": "apartments",
                "url": "/product/apartments",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 4,
        "title": "eat",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 13,
                "name": "le restaurant",
                "url": "/product/le-restaurant",
                "page": null
            },
            {
                "id": 14,
                "name": "sunset",
                "url": "/product/sunset",
                "page": null
            },
            {
                "id": 15,
                "name": "moonclub",
                "url": "/product/moonclub",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 5,
        "title": "relax",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 16,
                "name": "ella’s baths",
                "url": "/product/ella-s-baths",
                "page": null
            },
            {
                "id": 17,
                "name": "spa",
                "url": null,
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 3,
        "title": "meet",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": []
    }
]
};

export const Line = Template.bind({});
Line.args = {
  display: "line",
  menu: [
    {
        "__component": "ui.menu",
        "id": 1,
        "title": "hotel",
        "subtitle": null,
        "url": null,
        "page": {
            "id": 2,
            "title": "Hotel",
            "subtitle": null,
            "slug": "hotel",
            "display": "vertical",
            "hv_negative": true,
            "hv_top": null,
            "createdAt": "2024-05-31T15:44:33.297Z",
            "updatedAt": "2024-05-31T16:38:21.144Z",
            "publishedAt": "2024-05-31T15:44:47.105Z",
            "locale": "en"
        },
        "submenu": []
    },
    {
        "__component": "ui.menu",
        "id": 2,
        "title": "Stay",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 7,
                "name": "economy twin",
                "url": "/product/economy-twin",
                "page": null
            },
            {
                "id": 8,
                "name": "superior room",
                "url": "/product/superior-room",
                "page": null
            },
            {
                "id": 9,
                "name": "premium room",
                "url": "/product/premium-room",
                "page": null
            },
            {
                "id": 10,
                "name": "deluxe room",
                "url": "/product/deluxe-room",
                "page": null
            },
            {
                "id": 11,
                "name": "suites",
                "url": "/product/suites",
                "page": null
            },
            {
                "id": 12,
                "name": "apartments",
                "url": "/product/apartments",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 4,
        "title": "eat",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 13,
                "name": "le restaurant",
                "url": "/product/le-restaurant",
                "page": null
            },
            {
                "id": 14,
                "name": "sunset",
                "url": "/product/sunset",
                "page": null
            },
            {
                "id": 15,
                "name": "moonclub",
                "url": "/product/moonclub",
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 5,
        "title": "relax",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": [
            {
                "id": 16,
                "name": "ella’s baths",
                "url": "/product/ella-s-baths",
                "page": null
            },
            {
                "id": 17,
                "name": "spa",
                "url": null,
                "page": null
            }
        ]
    },
    {
        "__component": "ui.menu",
        "id": 3,
        "title": "meet",
        "subtitle": null,
        "url": null,
        "page": null,
        "submenu": []
    }
]
};
