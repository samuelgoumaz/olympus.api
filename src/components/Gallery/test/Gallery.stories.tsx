/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Gallery from '../Gallery';

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
  title: 'ReactComponentLibrary/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Gallery> = (args) => <Gallery {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  elements: [
    {
        "id": 3,
        "attributes": {
            "name": "buvette.jpg",
            "alternativeText": null,
            "caption": null,
            "width": 1326,
            "height": 884,
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_buvette.jpg",
                    "hash": "thumbnail_buvette_fa134767c4",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "path": null,
                    "width": 234,
                    "height": 156,
                    "size": 13.09,
                    "url": "/uploads/thumbnail_buvette_fa134767c4.jpg"
                },
                "small": {
                    "name": "small_buvette.jpg",
                    "hash": "small_buvette_fa134767c4",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "path": null,
                    "width": 500,
                    "height": 333,
                    "size": 56.83,
                    "url": "/uploads/small_buvette_fa134767c4.jpg"
                },
                "medium": {
                    "name": "medium_buvette.jpg",
                    "hash": "medium_buvette_fa134767c4",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "path": null,
                    "width": 750,
                    "height": 500,
                    "size": 124.75,
                    "url": "/uploads/medium_buvette_fa134767c4.jpg"
                },
                "large": {
                    "name": "large_buvette.jpg",
                    "hash": "large_buvette_fa134767c4",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "path": null,
                    "width": 1000,
                    "height": 667,
                    "size": 217.11,
                    "url": "/uploads/large_buvette_fa134767c4.jpg"
                }
            },
            "hash": "buvette_fa134767c4",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 383.15,
            "url": "/uploads/buvette_fa134767c4.jpg",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2023-05-03T03:01:45.341Z",
            "updatedAt": "2023-05-03T03:01:45.341Z"
        }
    },
    {
        "id": 20,
        "attributes": {
            "name": "banner-branding.png",
            "alternativeText": null,
            "caption": null,
            "width": 1920,
            "height": 1080,
            "formats": {
                "thumbnail": {
                    "name": "thumbnail_banner-branding.png",
                    "hash": "thumbnail_banner_branding_35983e4ccd",
                    "ext": ".png",
                    "mime": "image/png",
                    "path": null,
                    "width": 245,
                    "height": 138,
                    "size": 11.78,
                    "url": "/uploads/thumbnail_banner_branding_35983e4ccd.png"
                },
                "small": {
                    "name": "small_banner-branding.png",
                    "hash": "small_banner_branding_35983e4ccd",
                    "ext": ".png",
                    "mime": "image/png",
                    "path": null,
                    "width": 500,
                    "height": 281,
                    "size": 24.67,
                    "url": "/uploads/small_banner_branding_35983e4ccd.png"
                },
                "medium": {
                    "name": "medium_banner-branding.png",
                    "hash": "medium_banner_branding_35983e4ccd",
                    "ext": ".png",
                    "mime": "image/png",
                    "path": null,
                    "width": 750,
                    "height": 422,
                    "size": 39.15,
                    "url": "/uploads/medium_banner_branding_35983e4ccd.png"
                },
                "large": {
                    "name": "large_banner-branding.png",
                    "hash": "large_banner_branding_35983e4ccd",
                    "ext": ".png",
                    "mime": "image/png",
                    "path": null,
                    "width": 1000,
                    "height": 563,
                    "size": 55.62,
                    "url": "/uploads/large_banner_branding_35983e4ccd.png"
                }
            },
            "hash": "banner_branding_35983e4ccd",
            "ext": ".png",
            "mime": "image/png",
            "size": 21.88,
            "url": "/uploads/banner_branding_35983e4ccd.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "createdAt": "2023-05-15T11:27:55.811Z",
            "updatedAt": "2023-05-15T11:27:55.811Z"
        }
    }
]
};
