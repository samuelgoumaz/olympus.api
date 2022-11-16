import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Void = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Void.args = {
  label: 'hello',
  size: `small`
};

export const Header = Template.bind({});
Header.args = {
  label: 'cart',
  icon: 'home',
  mode: 'header',
  state: 'loading',
};

export const Indicator = Template.bind({});
Indicator.args = {
  label: 'cart',
  icon: 'home',
  mode: 'indicator',
  state: 'loading',
};

export const Border = Template.bind({});
Border.args = {
  label: 'cart',
  icon: 'home',
  mode: 'border',
  state: 'loading',
};

export const Submit = Template.bind({});
Submit.args = {
  label: 'cart',
  icon: 'home',
  mode: 'submit',
  state: 'loading',
};

export const Default = Template.bind({});
Default.args = {
  size: `small`,
  label: 'cart',
  icon: 'home',
  mode: 'default',
  state: 'loading',
};
