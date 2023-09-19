/*
# Imports
*/
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Calendar from "../Calendar";
import Event from "../../Event";
import FxBackground from "../../FxBackground";
import Button from "../../Button";

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

export const GridDefault = Template.bind({});
GridDefault.args = {
  display: `grid`,
  slug: `myCalendar`,
  timeStart: `14:00`,
  timeEnd: `03:00`,
  filter: [<h1>filter</h1>],
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
  render: function (data, group, countEl, inc) {
    return (<Event
      position={inc}
      key={"calendar_"+inc}
      debug={process.env.DEBUG ? true : false}
      mode={data.is_all_day ? `allday` : false}
      display={`grid`}
      title={data.title ?? false}
      subtitle={data.subtitle ?? false}
      timeStart={data.time_start ?? false}
      timeEnd={data.time_end ?? false}
      dateStart={data.date_start ?? false}
      dateEnd={data.date_end ?? false}
      body={data.teaser ?? data.teaser ?? false}
      id={data.id ?? false}
      slug={data.slug ?? false}
      tags={data.tags ?? false}
      images={false}
      fx={data.theme && <FxBackground
        position={1}
        cover={`cover`}
        background={`${data.theme.primary}`}
      />}
      scene={data.images && <FxBackground
        position={1}
        cover={`cover`}
        background={`url(https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80)`}
      />}
      buttons={<>
        {data.buttons && data.buttons.map((el, i) => (
          <Button
            key={`calendar-${item.slug}-button-${i}`}
            label={el.name ? el.name : false}
            icon={el.icon ? el.icon : false}
            onClick={function () { alert("Click"); }}
          />
        ))}
      </>}
      partners={data.partners ?? false}
      count={countEl ?? 0}
      hourGroup={group}
      onClick={() => setPopup(data)}
    >
    </Event>)
  },
  elements: [
    {
        "id": 1,
        "date_start": "2023-08-14",
        "date_end": "2024-03-24",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Requiem de Brahms",
        "subtitle": null,
        "slug": "requiem-de-brahms",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 6,
                "name": "EVL_PourquoiCeConcert_23:24.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.17,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 63.06,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.66,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.7,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_24_610f993428.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.431Z",
                "updatedAt": "2023-06-20T00:25:21.890Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 2,
        "date_start": "2023-09-15",
        "date_end": "2023-10-01",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Max Reger, 150 ans",
        "subtitle": null,
        "slug": "max-reger-150-ans",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 7,
                "name": "EVL_PourquoiCeConcert_23:242.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.07,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 30.06,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 51.69,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.57,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                "ext": ".png",
                "mime": "image/png",
                "size": 18.9,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.453Z",
                "updatedAt": "2023-06-20T00:31:45.376Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 3,
        "date_start": "2023-10-09",
        "date_end": "2023-10-13",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oeuvres de Theo Flury",
        "subtitle": null,
        "slug": "oeuvres-de-theo-flury",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 5,
                "name": "EVL_PourquoiCeConcert_23:243.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.47,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 47.51,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.42,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 68.88,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.26,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.426Z",
                "updatedAt": "2023-06-20T00:34:28.582Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 8,
        "date_start": "2023-10-09",
        "date_end": "2023-10-11",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Sacrée Suisse",
        "subtitle": null,
        "slug": "sacree-suisse",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 9,
        "date_start": "2023-12-06",
        "date_end": "2023-12-08",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oratorio de Noël ",
        "subtitle": null,
        "slug": "oratorio-de-noel",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 9,
                "name": "EVL_PourquoiCeConcert_23:245.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.59,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.14,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 62.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.93,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.542Z",
                "updatedAt": "2023-06-20T00:24:47.542Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 4,
        "date_start": "2023-12-15",
        "date_end": "2023-12-17",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Insalata Italiana",
        "subtitle": null,
        "slug": "insalata-italiana",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 6,
        "date_start": "2024-04-20",
        "date_end": "2024-04-21",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "100% Bach ",
        "subtitle": null,
        "slug": "100-bach",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 11,
                "name": "EVL_PourquoiCeConcert_23:246.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.01,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 50.67,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 29.64,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.17,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                "ext": ".png",
                "mime": "image/png",
                "size": 21.31,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.896Z",
                "updatedAt": "2023-06-20T00:41:07.612Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 7,
        "date_start": "2024-06-13",
        "date_end": "2024-06-15",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Tea Time",
        "subtitle": null,
        "slug": "tea-time",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 10,
                "name": "EVL_PourquoiCeConcert_23:247.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 4.57,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 57.61,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 40.39,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 23,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.98,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.799Z",
                "updatedAt": "2023-06-20T00:42:23.928Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    }
  ]
};

export const RowDefault = Template.bind({});
RowDefault.args = {
  display: `row`,
  slug: `myCalendar`,
  timeStart: `14:00`,
  timeEnd: `03:00`,
  filter: [<h1>filter</h1>],
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
  render: function (data, group, countEl, inc) {
    return (<Event
      position={inc}
      key={"calendar_"+inc}
      debug={process.env.DEBUG ? true : false}
      mode={data.is_all_day ? `allday` : false}
      display={`row`}
      title={data.title ?? false}
      subtitle={data.subtitle ?? false}
      timeStart={data.time_start ?? false}
      timeEnd={data.time_end ?? false}
      dateStart={data.date_start ?? false}
      dateEnd={data.date_end ?? false}
      body={data.teaser ?? data.teaser ?? false}
      id={data.id ?? false}
      slug={data.slug ?? false}
      tags={data.tags ?? false}
      images={false}
      fx={data.theme && <FxBackground
        position={1}
        cover={`cover`}
        background={`${data.theme.primary}`}
      />}
      scene={data.images && <FxBackground
        position={1}
        cover={`cover`}
        background={`url(https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80)`}
      />}
      buttons={<>
        {data.buttons && data.buttons.map((el, i) => (
          <Button
            key={`calendar-${item.slug}-button-${i}`}
            label={el.name ? el.name : false}
            icon={el.icon ? el.icon : false}
            onClick={function () { alert("Click"); }}
          />
        ))}
      </>}
      partners={data.partners ?? false}
      count={countEl ?? 0}
      hourGroup={group}
      onClick={() => setPopup(data)}
    >
    </Event>)
  },
  elements: [
    {
        "id": 1,
        "date_start": "2023-08-14",
        "date_end": "2024-03-24",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Requiem de Brahms",
        "subtitle": null,
        "slug": "requiem-de-brahms",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 6,
                "name": "EVL_PourquoiCeConcert_23:24.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.17,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 63.06,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.66,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.7,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_24_610f993428.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.431Z",
                "updatedAt": "2023-06-20T00:25:21.890Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 2,
        "date_start": "2023-09-15",
        "date_end": "2023-10-01",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Max Reger, 150 ans",
        "subtitle": null,
        "slug": "max-reger-150-ans",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 7,
                "name": "EVL_PourquoiCeConcert_23:242.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.07,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 30.06,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 51.69,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.57,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                "ext": ".png",
                "mime": "image/png",
                "size": 18.9,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.453Z",
                "updatedAt": "2023-06-20T00:31:45.376Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 3,
        "date_start": "2023-10-09",
        "date_end": "2023-10-13",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oeuvres de Theo Flury",
        "subtitle": null,
        "slug": "oeuvres-de-theo-flury",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 5,
                "name": "EVL_PourquoiCeConcert_23:243.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.47,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 47.51,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.42,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 68.88,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.26,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.426Z",
                "updatedAt": "2023-06-20T00:34:28.582Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 8,
        "date_start": "2023-10-09",
        "date_end": "2023-10-11",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Sacrée Suisse",
        "subtitle": null,
        "slug": "sacree-suisse",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 9,
        "date_start": "2023-12-06",
        "date_end": "2023-12-08",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oratorio de Noël ",
        "subtitle": null,
        "slug": "oratorio-de-noel",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 9,
                "name": "EVL_PourquoiCeConcert_23:245.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.59,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.14,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 62.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.93,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.542Z",
                "updatedAt": "2023-06-20T00:24:47.542Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 4,
        "date_start": "2023-12-15",
        "date_end": "2023-12-17",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Insalata Italiana",
        "subtitle": null,
        "slug": "insalata-italiana",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 6,
        "date_start": "2024-04-20",
        "date_end": "2024-04-21",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "100% Bach ",
        "subtitle": null,
        "slug": "100-bach",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 11,
                "name": "EVL_PourquoiCeConcert_23:246.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.01,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 50.67,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 29.64,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.17,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                "ext": ".png",
                "mime": "image/png",
                "size": 21.31,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.896Z",
                "updatedAt": "2023-06-20T00:41:07.612Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 7,
        "date_start": "2024-06-13",
        "date_end": "2024-06-15",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Tea Time",
        "subtitle": null,
        "slug": "tea-time",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 10,
                "name": "EVL_PourquoiCeConcert_23:247.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 4.57,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 57.61,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 40.39,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 23,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.98,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.799Z",
                "updatedAt": "2023-06-20T00:42:23.928Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    }
  ]
};

export const ColsDefault = Template.bind({});
ColsDefault.args = {
  display: `cols`,
  slug: `myCalendar`,
  timeStart: `14:00`,
  timeEnd: `03:00`,
  filter: [<h1>filter</h1>],
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
  render: function (data, group, countEl, inc) {
    return (<Event
      position={inc}
      key={"calendar_"+inc}
      debug={process.env.DEBUG ? true : false}
      mode={data.is_all_day ? `allday` : false}
      display={`cols`}
      title={data.title ?? false}
      subtitle={data.subtitle ?? false}
      timeStart={data.time_start ?? false}
      timeEnd={data.time_end ?? false}
      dateStart={data.date_start ?? false}
      dateEnd={data.date_end ?? false}
      body={data.teaser ?? data.teaser ?? false}
      id={data.id ?? false}
      slug={data.slug ?? false}
      tags={data.tags ?? false}
      images={false}
      fx={data.theme && <FxBackground
        position={1}
        cover={`cover`}
        background={`${data.theme.primary}`}
      />}
      scene={data.images && <FxBackground
        position={1}
        cover={`cover`}
        background={`url(https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80)`}
      />}
      buttons={<>
        {data.buttons && data.buttons.map((el, i) => (
          <Button
            key={`calendar-${item.slug}-button-${i}`}
            label={el.name ? el.name : false}
            icon={el.icon ? el.icon : false}
            onClick={function () { alert("Click"); }}
          />
        ))}
      </>}
      partners={data.partners ?? false}
      count={countEl ?? 0}
      hourGroup={group}
      onClick={() => setPopup(data)}
    >
    </Event>)
  },
  elements: [
    {
        "id": 1,
        "date_start": "2023-08-14",
        "date_end": "2024-03-24",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Requiem de Brahms",
        "subtitle": null,
        "slug": "requiem-de-brahms",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 6,
                "name": "EVL_PourquoiCeConcert_23:24.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.17,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 63.06,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.66,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.7,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_24_610f993428.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.431Z",
                "updatedAt": "2023-06-20T00:25:21.890Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 2,
        "date_start": "2023-09-15",
        "date_end": "2023-10-01",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Max Reger, 150 ans",
        "subtitle": null,
        "slug": "max-reger-150-ans",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 7,
                "name": "EVL_PourquoiCeConcert_23:242.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.07,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 30.06,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 51.69,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.57,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                "ext": ".png",
                "mime": "image/png",
                "size": 18.9,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.453Z",
                "updatedAt": "2023-06-20T00:31:45.376Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 3,
        "date_start": "2023-10-09",
        "date_end": "2023-10-13",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oeuvres de Theo Flury",
        "subtitle": null,
        "slug": "oeuvres-de-theo-flury",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 5,
                "name": "EVL_PourquoiCeConcert_23:243.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.47,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 47.51,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.42,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 68.88,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.26,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.426Z",
                "updatedAt": "2023-06-20T00:34:28.582Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 8,
        "date_start": "2023-10-09",
        "date_end": "2023-10-11",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Sacrée Suisse",
        "subtitle": null,
        "slug": "sacree-suisse",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 9,
        "date_start": "2023-12-06",
        "date_end": "2023-12-08",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oratorio de Noël ",
        "subtitle": null,
        "slug": "oratorio-de-noel",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 9,
                "name": "EVL_PourquoiCeConcert_23:245.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.59,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.14,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 62.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.93,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.542Z",
                "updatedAt": "2023-06-20T00:24:47.542Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 4,
        "date_start": "2023-12-15",
        "date_end": "2023-12-17",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Insalata Italiana",
        "subtitle": null,
        "slug": "insalata-italiana",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 6,
        "date_start": "2024-04-20",
        "date_end": "2024-04-21",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "100% Bach ",
        "subtitle": null,
        "slug": "100-bach",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 11,
                "name": "EVL_PourquoiCeConcert_23:246.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.01,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 50.67,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 29.64,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.17,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                "ext": ".png",
                "mime": "image/png",
                "size": 21.31,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.896Z",
                "updatedAt": "2023-06-20T00:41:07.612Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 7,
        "date_start": "2024-06-13",
        "date_end": "2024-06-15",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Tea Time",
        "subtitle": null,
        "slug": "tea-time",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 10,
                "name": "EVL_PourquoiCeConcert_23:247.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 4.57,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 57.61,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 40.39,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 23,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.98,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.799Z",
                "updatedAt": "2023-06-20T00:42:23.928Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    }
  ]
};
export const SlideDefault = Template.bind({});
SlideDefault.args = {
  display: `slide`,
  slug: `myCalendar`,
  timeStart: `14:00`,
  timeEnd: `03:00`,
  filter: [<h1>filter</h1>],
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
  render: function (data, group, countEl, inc) {
    return (<Event
      position={inc}
      key={"calendar_"+inc}
      debug={process.env.DEBUG ? true : false}
      mode={data.is_all_day ? `allday` : false}
      display={`slide`}
      title={data.title ?? false}
      subtitle={data.subtitle ?? false}
      timeStart={data.time_start ?? false}
      timeEnd={data.time_end ?? false}
      dateStart={data.date_start ?? false}
      dateEnd={data.date_end ?? false}
      body={data.teaser ?? data.teaser ?? false}
      id={data.id ?? false}
      slug={data.slug ?? false}
      tags={data.tags ?? false}
      images={false}
      fx={data.theme && <FxBackground
        position={1}
        cover={`cover`}
        background={`${data.theme.primary}`}
      />}
      scene={data.images && <FxBackground
        position={1}
        cover={`cover`}
        background={`url(https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80)`}
      />}
      buttons={<>
        {data.buttons && data.buttons.map((el, i) => (
          <Button
            key={`calendar-${item.slug}-button-${i}`}
            label={el.name ? el.name : false}
            icon={el.icon ? el.icon : false}
            onClick={function () { alert("Click"); }}
          />
        ))}
      </>}
      partners={data.partners ?? false}
      count={countEl ?? 0}
      hourGroup={group}
      onClick={() => setPopup(data)}
    >
    </Event>)
  },
  elements: [
    {
        "id": 1,
        "date_start": "2023-08-14",
        "date_end": "2024-03-24",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Requiem de Brahms",
        "subtitle": null,
        "slug": "requiem-de-brahms",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 6,
                "name": "EVL_PourquoiCeConcert_23:24.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.17,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 63.06,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.66,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.7,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_24_610f993428.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.431Z",
                "updatedAt": "2023-06-20T00:25:21.890Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 2,
        "date_start": "2023-09-15",
        "date_end": "2023-10-01",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Max Reger, 150 ans",
        "subtitle": null,
        "slug": "max-reger-150-ans",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 7,
                "name": "EVL_PourquoiCeConcert_23:242.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.07,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 30.06,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 51.69,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.57,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                "ext": ".png",
                "mime": "image/png",
                "size": 18.9,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.453Z",
                "updatedAt": "2023-06-20T00:31:45.376Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 3,
        "date_start": "2023-10-09",
        "date_end": "2023-10-13",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oeuvres de Theo Flury",
        "subtitle": null,
        "slug": "oeuvres-de-theo-flury",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 5,
                "name": "EVL_PourquoiCeConcert_23:243.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.47,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 47.51,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.42,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 68.88,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.26,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.426Z",
                "updatedAt": "2023-06-20T00:34:28.582Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 8,
        "date_start": "2023-10-09",
        "date_end": "2023-10-11",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Sacrée Suisse",
        "subtitle": null,
        "slug": "sacree-suisse",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 9,
        "date_start": "2023-12-06",
        "date_end": "2023-12-08",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oratorio de Noël ",
        "subtitle": null,
        "slug": "oratorio-de-noel",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 9,
                "name": "EVL_PourquoiCeConcert_23:245.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.59,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.14,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 62.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.93,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.542Z",
                "updatedAt": "2023-06-20T00:24:47.542Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 4,
        "date_start": "2023-12-15",
        "date_end": "2023-12-17",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Insalata Italiana",
        "subtitle": null,
        "slug": "insalata-italiana",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 6,
        "date_start": "2024-04-20",
        "date_end": "2024-04-21",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "100% Bach ",
        "subtitle": null,
        "slug": "100-bach",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 11,
                "name": "EVL_PourquoiCeConcert_23:246.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.01,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 50.67,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 29.64,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.17,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                "ext": ".png",
                "mime": "image/png",
                "size": 21.31,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.896Z",
                "updatedAt": "2023-06-20T00:41:07.612Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 7,
        "date_start": "2024-06-13",
        "date_end": "2024-06-15",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Tea Time",
        "subtitle": null,
        "slug": "tea-time",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 10,
                "name": "EVL_PourquoiCeConcert_23:247.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 4.57,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 57.61,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 40.39,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 23,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.98,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.799Z",
                "updatedAt": "2023-06-20T00:42:23.928Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    }
  ]
};


export const ListDefault = Template.bind({});
ListDefault.args = {
  display: `list`,
  slug: `myCalendar`,
  timeStart: `14:00`,
  timeEnd: `03:00`,
  filter: [<h1>filter</h1>],
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
  render: function (data, group, countEl, inc) {
    return (<Event
      position={inc}
      key={"calendar_"+inc}
      debug={process.env.DEBUG ? true : false}
      mode={data.is_all_day ? `allday` : false}
      display={`list`}
      title={data.title ?? false}
      subtitle={data.subtitle ?? false}
      timeStart={data.time_start ?? false}
      timeEnd={data.time_end ?? false}
      dateStart={data.date_start ?? false}
      dateEnd={data.date_end ?? false}
      body={data.teaser ?? data.teaser ?? false}
      id={data.id ?? false}
      slug={data.slug ?? false}
      tags={data.tags ?? false}
      images={false}
      fx={data.theme && <FxBackground
        position={1}
        cover={`cover`}
        background={`${data.theme.primary}`}
      />}
      scene={data.images && <FxBackground
        position={1}
        cover={`cover`}
        background={`url(https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80)`}
      />}
      buttons={<>
        {data.buttons && data.buttons.map((el, i) => (
          <Button
            key={`calendar-${item.slug}-button-${i}`}
            label={el.name ? el.name : false}
            icon={el.icon ? el.icon : false}
            onClick={function () { alert("Click"); }}
          />
        ))}
      </>}
      partners={data.partners ?? false}
      count={countEl ?? 0}
      hourGroup={group}
      onClick={() => setPopup(data)}
    >
    </Event>)
  },
  elements: [
    {
        "id": 1,
        "date_start": "2023-08-14",
        "date_end": "2024-03-24",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Requiem de Brahms",
        "subtitle": null,
        "slug": "requiem-de-brahms",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 6,
                "name": "EVL_PourquoiCeConcert_23:24.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.17,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 63.06,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.66,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:24.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.7,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_24_610f993428.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_24_610f993428",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_24_610f993428.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.431Z",
                "updatedAt": "2023-06-20T00:25:21.890Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 2,
        "date_start": "2023-09-15",
        "date_end": "2023-10-01",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Max Reger, 150 ans",
        "subtitle": null,
        "slug": "max-reger-150-ans",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 7,
                "name": "EVL_PourquoiCeConcert_23:242.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.07,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 30.06,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 51.69,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:242.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.57,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_242_173b74af32",
                "ext": ".png",
                "mime": "image/png",
                "size": 18.9,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_242_173b74af32.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.453Z",
                "updatedAt": "2023-06-20T00:31:45.376Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 3,
        "date_start": "2023-10-09",
        "date_end": "2023-10-13",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oeuvres de Theo Flury",
        "subtitle": null,
        "slug": "oeuvres-de-theo-flury",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 5,
                "name": "EVL_PourquoiCeConcert_23:243.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.47,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 47.51,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.42,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:243.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 68.88,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.26,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_243_05e1b571d1.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.426Z",
                "updatedAt": "2023-06-20T00:34:28.582Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 8,
        "date_start": "2023-10-09",
        "date_end": "2023-10-11",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Sacrée Suisse",
        "subtitle": null,
        "slug": "sacree-suisse",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 9,
        "date_start": "2023-12-06",
        "date_end": "2023-12-08",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Oratorio de Noël ",
        "subtitle": null,
        "slug": "oratorio-de-noel",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 9,
                "name": "EVL_PourquoiCeConcert_23:245.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.59,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 43.14,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 62.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:245.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 24.93,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7",
                "ext": ".png",
                "mime": "image/png",
                "size": 19.03,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_245_2dd45f10d7.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.542Z",
                "updatedAt": "2023-06-20T00:24:47.542Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 4,
        "date_start": "2023-12-15",
        "date_end": "2023-12-17",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Insalata Italiana",
        "subtitle": null,
        "slug": "insalata-italiana",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 8,
                "name": "EVL_PourquoiCeConcert_23:244.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 5.89,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 27.69,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 48.23,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:244.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 70.05,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_244_882df1ef52",
                "ext": ".png",
                "mime": "image/png",
                "size": 17.54,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_244_882df1ef52.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.539Z",
                "updatedAt": "2023-06-20T00:46:25.754Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 6,
        "date_start": "2024-04-20",
        "date_end": "2024-04-21",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "100% Bach ",
        "subtitle": null,
        "slug": "100-bach",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 11,
                "name": "EVL_PourquoiCeConcert_23:246.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 6.01,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 50.67,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 29.64,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:246.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 74.17,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_246_ffd117140a",
                "ext": ".png",
                "mime": "image/png",
                "size": 21.31,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_246_ffd117140a.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.896Z",
                "updatedAt": "2023-06-20T00:41:07.612Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    },
    {
        "id": 7,
        "date_start": "2024-06-13",
        "date_end": "2024-06-15",
        "time_start": "00:00",
        "time_end": "00:00",
        "title": "Tea Time",
        "subtitle": null,
        "slug": "tea-time",
        "teaser": "",
        "is_all_day": null,
        "images": [
            {
                "id": 10,
                "name": "EVL_PourquoiCeConcert_23:247.png",
                "alternativeText": null,
                "caption": null,
                "width": 1488,
                "height": 1996,
                "formats": {
                    "thumbnail": {
                        "name": "thumbnail_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 116,
                        "height": 156,
                        "size": 4.57,
                        "url": "/uploads/thumbnail_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "large": {
                        "name": "large_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 745,
                        "height": 1000,
                        "size": 57.61,
                        "url": "/uploads/large_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "medium": {
                        "name": "medium_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 559,
                        "height": 750,
                        "size": 40.39,
                        "url": "/uploads/medium_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    },
                    "small": {
                        "name": "small_EVL_PourquoiCeConcert_23:247.png",
                        "hash": "small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                        "ext": ".png",
                        "mime": "image/png",
                        "path": null,
                        "width": 373,
                        "height": 500,
                        "size": 23,
                        "url": "/uploads/small_EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png"
                    }
                },
                "hash": "EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb",
                "ext": ".png",
                "mime": "image/png",
                "size": 16.98,
                "url": "/uploads/EVL_Pourquoi_Ce_Concert_23_247_1d89a157fb.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "folderPath": "/1/2",
                "createdAt": "2023-06-20T00:24:47.799Z",
                "updatedAt": "2023-06-20T00:42:23.928Z"
            }
        ],
        "segment": {
            "id": 3,
            "title": "Saison 23/24",
            "slug": "23-24",
            "createdAt": "2023-06-20T00:21:51.905Z",
            "updatedAt": "2023-06-20T00:22:05.777Z",
            "publishedAt": "2023-06-20T00:21:52.500Z",
            "locale": "fr"
        },
        "seo": null,
        "buttons": []
    }
  ]
};
