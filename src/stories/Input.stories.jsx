import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'test',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Submit = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Submit.args = {
  primary: true,
  label: 'Submit',
};

export const Download = Template.bind({});
Download.args = {
  label: 'Download',
};

export const Board = Template.bind({});
Board.args = {
  size: 'large',
  label: '저장',
};

export const Admin = Template.bind({});
Admin.args = {
  size: 'small',
  label: '제출',
};
