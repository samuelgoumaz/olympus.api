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
  display: `grid`,
  slug: `myCalendar`,
  timeStart: `14:00`,
  timeEnd: `03:00`,
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
      "id": 2,
      "attributes": {
          "date_start": "2023-06-16",
          "date_end": "2023-06-16",
          "title": "Vernissage",
          "subtitle": "Ouverture",
          "slug": "vernissage",
          "time_start": "18:30",
          "time_end": "20:00",
          "is_all_day": null,
          "teaser": "<p>Partie officielle &amp; discours&nbsp;</p><p>&nbsp;</p><p>Viens inaugurer avec nous cette septième édition !&nbsp;</p>",
          "createdAt": "2023-05-03T12:33:49.879Z",
          "updatedAt": "2023-05-03T12:33:51.701Z",
          "publishedAt": "2023-05-03T12:33:51.698Z",
          "tags": {
              "data": []
          },
          "partners": {
              "data": []
          },
          "buttons": []
      }
    },
    {
      "id": 3,
      "attributes": {
          "date_start": "2023-06-16",
          "date_end": "2023-06-17",
          "title": "Gogo Talco",
          "subtitle": "Disco Punk",
          "slug": "gogo-talco",
          "time_start": "00:00",
          "time_end": "02:00",
          "is_all_day": null,
          "teaser": "<p>En 2016, alors que Solange la Frange fait une pause sur les scènes après plus de dix ans de musique, Tristan Basso et Luca Manco se promettent de continuer à composer des chansons pour perpétuer leur plaisir de collaborer. Tristan a toujours aimé être l'homme de l'ombre. Compositeur sans être musicien, autodidacte et indépendant, il touche avec brio à de nombreux outils, instruments et styles de musique. Il a toujours été un amoureux exigeant du son et producteur de ses précédents albums. Luca, quant à lui, n'a jamais cessé de jouer de la guitare et de travailler sur de nouveaux projets. En marge de son activité artistique, il est engagé au Rocking-Chair où il se forme au métier de technicien du son et en profite pour assouvir son besoin de musique live. Dès l'hiver 2018, un premier modèle commun commence à prendre forme. Luca et Tristan veulent construire un nouveau son autour de l'envie de danser, de l'énergie brute d'une batterie régulière omniprésente, de guitares et de voix entraînantes. Ils savent qu'il leur faudra de la patience pour parvenir au résultat musical qui les satisfera et décident dans un premier temps de travailler en tandem. Dans un premier temps, soucieux d'épargner des heures de travail à leurs futurs collègues, ils enregistrent tout eux-mêmes à l'aide de l'ordinateur et des technologies numériques à leur disposition. Ce faisant, ils deviennent multi-instrumentistes, cherchant, échantillonnant, peaufinant jusqu'à ce qu'ils soient satisfaits. Conscients de leur désir d'abandonner au maximum la boîte à rythmes qui était la marque de fabrique de leurs précédents projets, ils veulent trouver un son organique digne d'un groupe de disco rock. Ils veulent enfin former un vrai groupe. Ils recrutent donc des musiciens et commencent à répéter.</p>",
          "createdAt": "2023-05-03T12:36:16.308Z",
          "updatedAt": "2023-05-03T12:36:18.665Z",
          "publishedAt": "2023-05-03T12:36:18.657Z",
          "tags": {
              "data": [
                  {
                    "id": 1,
                    "attributes": {
                        "name": "Concert",
                        "slug": "concert",
                        "createdAt": "2023-05-03T12:11:18.852Z",
                        "updatedAt": "2023-05-03T12:12:15.892Z",
                        "publishedAt": "2023-05-03T12:12:15.889Z",
                        "locale": "en"
                    }
                  }
              ]
          },
          "partners": {
              "data": []
          },
          "buttons": []
      }
    }
  ]
};
