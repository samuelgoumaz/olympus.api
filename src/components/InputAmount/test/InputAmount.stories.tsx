/*
# Imports
*/
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputAmount from '../InputAmount';

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
  title: 'ReactComponentLibrary/InputAmount',
  component: InputAmount,
} as ComponentMeta<typeof InputAmount>;

/*
# Template
# More on component templates :
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/
const Template: ComponentStory<typeof InputAmount> = (args) => <InputAmount {...args} />;

/*
# Args
# More on args :
https://storybook.js.org/docs/react/writing-stories/args
*/

export const Single = Template.bind({});
Single.args = {
  name: 'myamount',
  label: 'My Amount',
  placeholder: 'Choose formule',
  currency: 'chf',
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    }
  ]
};

export const AutoSelect = Template.bind({});
AutoSelect.args = {
  name: 'myamount',
  label: 'My Amount',
  placeholder: 'Choose formule',
  autoselect: true,
  currency: 'chf',
  quantity: {
    "min": 1,
    "max": 15,
    "default": 2
  },
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    }
  ]
};


export const Multiple = Template.bind({});
Multiple.args = {
  name: 'myamount',
  label: 'My Amount',
  placeholder: 'Choose formule',
  currency: 'chf',
  quantity: {
    "min": 1,
    "max": 15,
    "default": 2
  },
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    },
    {
      "id": 27,
      "price": 30.00,
      "name": "Medium donation"
    },
    {
      "id": 28,
      "price": 60.00,
      "name": "Strong donation"
    }
  ]
};

export const MultipleAutoSelect = Template.bind({});
MultipleAutoSelect.args = {
  name: 'myamount',
  label: 'My Amount',
  placeholder: 'Choose formule',
  autoselect: true,
  currency: 'chf',
  quantity: {
    "min": 1,
    "max": 15,
    "default": 2
  },
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    },
    {
      "id": 27,
      "price": 30.00,
      "name": "Medium donation"
    },
    {
      "id": 28,
      "price": 60.00,
      "name": "Strong donation"
    }
  ]
};

export const SingleDisplaySelect = Template.bind({});
SingleDisplaySelect.args = {
  name: 'myamount',
  label: 'My Amount',
  display: 'select',
  placeholder: 'Choose formule',
  currency: 'chf',
  quantity: false,
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    }
  ]
};

export const SingleAutoDisplaySelect = Template.bind({});
SingleAutoDisplaySelect.args = {
  name: 'myamount',
  label: 'My Amount',
  display: 'select',
  placeholder: 'Choose formule',
  autoselect: true,
  currency: 'chf',
  quantity: {
    "min": 1,
    "max": 15,
    "default": 2
  },
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    }
  ]
};

export const MultipleDisplaySelect = Template.bind({});
MultipleDisplaySelect.args = {
  name: 'myamount',
  label: 'My Amount',
  display: 'select',
  placeholder: 'Choose formule',
  currency: 'chf',
  quantity: {
    "min": 1,
    "max": 15,
    "default": 2
  },
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    },
    {
      "id": 27,
      "price": 30.00,
      "name": "Medium donation"
    },
    {
      "id": 28,
      "price": 60.00,
      "name": "Strong donation"
    }
  ]
};

export const MultipleDisplayAutoSelect = Template.bind({});
MultipleDisplayAutoSelect.args = {
  name: 'myamount',
  label: 'My Amount',
  display: 'select',
  autoselect: true,
  placeholder: 'Choose formule',
  currency: 'chf',
  quantity: {
    "min": 1,
    "max": 15,
    "default": 2
  },
  elements: [
    {
      "id": 26,
      "price": 10.00,
      "name": "Standard donation"
    },
    {
      "id": 27,
      "price": 30.00,
      "name": "Medium donation"
    },
    {
      "id": 28,
      "price": 60.00,
      "name": "Strong donation"
    }
  ]
};