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

export const DefaultMultiple = Template.bind({});
DefaultMultiple.args = {
  currency: "EUR",
  currencyRate: 1.5,
  variants:
    [
      {
        id: 1,
        parent_id: 2,
        title: "5",
        subtitle: "G",
        sku: "amnesia-5g",
        price_default: 20,
        price_promotion: 30,
        stock_disponibility: true,
        stock_limited: 10,
        locale: "en",
        selected: true,
        quantity: 0,
        clone: "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_cosmic_9cba9e1147.png",
      },
      {
        id: 3,
        parent_id: 2,
        title: "30",
        subtitle: "G",
        sku: "amnesia-5g",
        price_default: 50,
        price_promotion: 60,
        stock_disponibility: true,
        stock_limited: 15,
        locale: "en",
        selected: false,
        quantity: 42,
        clone: "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_jungle_9a8795dfca.png",
      },
    ]
};

export const DefaultUnique = Template.bind({});
DefaultUnique.args = {
  currency: "EUR",
  currencyRate: 1.5,
  variants:
    [
      {
        id: 1,
        parent_id: 2,
        title: "5",
        subtitle: "G",
        sku: "amnesia-5g",
        price_default: 20,
        price_promotion: 30,
        stock_disponibility: true,
        stock_limited: 10,
        locale: "en",
        selected: true,
        quantity: 12,
        clone: "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_cosmic_9cba9e1147.png",
      }
    ]
};

export const SmartUnique = Template.bind({});
SmartUnique.args = {
  currency: "EUR",
  currencyRate: 1.5,
  display: `smart`,
  variants:
    [
      {
        id: 1,
        parent_id: 2,
        title: "5",
        subtitle: "G",
        sku: "amnesia-5g",
        price_default: 20,
        price_promotion: 30,
        stock_disponibility: true,
        stock_limited: 10,
        locale: "en",
        selected: true,
        quantity: 12,
        clone: "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_cosmic_9cba9e1147.png",
      }
    ]
};

export const SmartMultiple = Template.bind({});
SmartMultiple.args = {
  currency: "EUR",
  currencyRate: 1.5,
  display: `smart`,
  variants:
    [
      {
        id: 1,
        parent_id: 2,
        title: "5",
        subtitle: "G",
        sku: "amnesia-5g",
        price_default: 20,
        price_promotion: 30,
        stock_disponibility: true,
        stock_limited: 10,
        locale: "en",
        selected: true,
        quantity: 0,
        clone: "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_cosmic_9cba9e1147.png",
      },
      {
        id: 3,
        parent_id: 2,
        title: "30",
        subtitle: "G",
        sku: "amnesia-5g",
        price_default: 50,
        price_promotion: 60,
        stock_disponibility: true,
        stock_limited: 15,
        locale: "en",
        selected: false,
        quantity: 42,
        clone: "http://localhost:1337/uploads/dustygreen_weed_cannabis_cbd_product_jungle_9a8795dfca.png",
      },
    ]
};
