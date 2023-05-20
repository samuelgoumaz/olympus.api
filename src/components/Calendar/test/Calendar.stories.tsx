/*
# Imports
*/
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Calendar from "../Calendar";

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
  title: "ReactComponentLibrary/Calendar",
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Default = Template.bind({});
Default.args = {
  display: `component`,
  timeStart: `14`,
  timeEnd: `3`,
  tags: [
    {
      id: 1,
      name: "My first Tag",
      slug: "my-first-tag",
      createdAt: "2023-03-27T16:23:13.144Z",
      updatedAt: "2023-03-27T16:23:42.279Z",
      publishedAt: "2023-03-27T16:23:13.882Z",
      locale: "en",
      children: [],
      parent: null,
    },
    {
      id: 2,
      name: "My second tag",
      slug: "my-second-tag",
      createdAt: "2023-03-27T16:23:31.686Z",
      updatedAt: "2023-03-27T16:23:34.275Z",
      publishedAt: "2023-03-27T16:23:34.273Z",
      locale: "en",
      children: [],
      parent: null,
    },
  ],
  elements: [
    {
      id: 1,
      attributes: {
        date_start: "2023-04-01",
        date_end: "2023-04-01",
        title: "Event Title",
        subtitle: "Event Subtitle",
        slug: "event",
        time_start: "14:00",
        time_end: "16:00",
        is_all_day: true,
        teaser: "<p>Image Text teaser.</p>",
        createdAt: "2023-03-27T15:13:46.850Z",
        updatedAt: "2023-03-27T16:24:26.976Z",
        publishedAt: "2023-03-27T15:13:47.721Z",
        tags: {
          data: [
            {
              id: 2,
              attributes: {
                name: "My second tag",
                slug: "my-second-tag",
                createdAt: "2023-03-27T16:23:31.686Z",
                updatedAt: "2023-03-27T16:23:34.275Z",
                publishedAt: "2023-03-27T16:23:34.273Z",
                locale: "en",
              },
            },
          ],
        },
        partners: {
          data: [
            {
              id: 1,
              attributes: {
                title: "Etd",
                createdAt: "2023-03-23T13:08:37.980Z",
                updatedAt: "2023-03-23T13:08:39.645Z",
                publishedAt: "2023-03-23T13:08:39.644Z",
                locale: "en",
                image: {
                  data: {
                    id: 6,
                    attributes: {
                      name: "branding-doctype-backend_monogram_positive.svg",
                      alternativeText: null,
                      caption: null,
                      width: 80,
                      height: 80,
                      formats: null,
                      hash: "branding_doctype_backend_monogram_positive_06cb043b27",
                      ext: ".svg",
                      mime: "image/svg+xml",
                      size: 1.45,
                      url: "/uploads/branding_doctype_backend_monogram_positive_06cb043b27.svg",
                      previewUrl: null,
                      provider: "local",
                      provider_metadata: null,
                      createdAt: "2023-03-23T13:08:33.417Z",
                      updatedAt: "2023-03-23T13:08:33.417Z",
                    },
                  },
                },
              },
            },
          ],
        },
        buttons: [],
      },
    },
    {
      id: 2,
      attributes: {
        date_start: "2023-04-11",
        date_end: "2023-04-11",
        title: "Events Second Title",
        subtitle: "Events Second Subtitle",
        slug: "event-1",
        time_start: "16:00",
        time_end: "18:00",
        is_all_day: false,
        teaser: "",
        createdAt: "2023-03-27T16:42:33.861Z",
        updatedAt: "2023-03-27T16:42:34.780Z",
        publishedAt: "2023-03-27T16:42:34.778Z",
        tags: {
          data: [
            {
              id: 2,
              attributes: {
                name: "My second tag",
                slug: "my-second-tag",
                createdAt: "2023-03-27T16:23:31.686Z",
                updatedAt: "2023-03-27T16:23:34.275Z",
                publishedAt: "2023-03-27T16:23:34.273Z",
                locale: "en",
              },
            },
          ],
        },
        partners: {
          data: [
            {
              id: 1,
              attributes: {
                title: "Etd",
                createdAt: "2023-03-23T13:08:37.980Z",
                updatedAt: "2023-03-23T13:08:39.645Z",
                publishedAt: "2023-03-23T13:08:39.644Z",
                locale: "en",
                image: {
                  data: {
                    id: 6,
                    attributes: {
                      name: "branding-doctype-backend_monogram_positive.svg",
                      alternativeText: null,
                      caption: null,
                      width: 80,
                      height: 80,
                      formats: null,
                      hash: "branding_doctype_backend_monogram_positive_06cb043b27",
                      ext: ".svg",
                      mime: "image/svg+xml",
                      size: 1.45,
                      url: "/uploads/branding_doctype_backend_monogram_positive_06cb043b27.svg",
                      previewUrl: null,
                      provider: "local",
                      provider_metadata: null,
                      createdAt: "2023-03-23T13:08:33.417Z",
                      updatedAt: "2023-03-23T13:08:33.417Z",
                    },
                  },
                },
              },
            },
          ],
        },
        buttons: [],
      },
    },
  ],
};
