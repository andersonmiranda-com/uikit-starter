import { type FC } from 'react';
import { Unstyled } from '@storybook/addon-docs/blocks';

import { type TextVariant, type TextWeight } from '../../Text/text.styles';

import TextSampleSection from './TextSampleSection';
import TypographyGrid from './TypographyGrid';

export const textWeights: Record<string, TextWeight> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const textTypes = [
  'H1',
  'H2',
  'H3',
  'H4',
  'Subtitle 1',
  'Subtitle 2',
  'Subtitle 3',
  'Body 1',
  'Body 2',
  'Link 1',
  'Link 2',
  'Link 3',
  'Caption',
  'Caption2',
];

export const getVariantName = (type: string): TextVariant => {
  return type.toLowerCase().replace(/\s/g, '') as TextVariant;
};

const TypographySample: FC = () => {
  return (
    <Unstyled>
      <TypographyGrid />
      <br />
      <TextSampleSection />
    </Unstyled>
  );
};

export default TypographySample;
