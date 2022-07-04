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
};

export const Header = Template.bind({});
Header.args = {
  label: 'cart',
  icon: 'home',
  mode: 'header',
};

export const Indicator = Template.bind({});
Indicator.args = {
  label: 'cart',
  icon: 'home',
  mode: 'indicator',
};

export const Border = Template.bind({});
Border.args = {
  label: 'cart',
  icon: 'home',
  mode: 'border',
};

export const Default = Template.bind({});
Default.args = {
  label: 'cart',
  icon: 'home',
  mode: 'default',
};
