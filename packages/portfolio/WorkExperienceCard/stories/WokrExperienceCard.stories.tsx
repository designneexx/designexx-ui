import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WorkExperienceCard } from '../src/WorkExperienceCard';
import { WorkExperienceCardProps } from '../src/types';
import packageJson from '../package.json';

const meta: Meta<typeof WorkExperienceCard> = {
  title: 'Portfolio-UI/components/WorkExperienceCard',
  tags: ['autodocs'],
  component: WorkExperienceCard,
  parameters: { docs: { description: { component: packageJson.description }, }, },
};

export const Primary: StoryObj<WorkExperienceCardProps> = { render: (args) => <WorkExperienceCard {...args} /> };

Primary.args = {
  title: 'aa',
  profession: 'aa',
  location: 'aa',
  duration: 'aa',
  jobSummary: 'aa',
};

export default meta;
