import { type FC } from 'react';

import TextSample from './TextSample';
import { getVariantName, textTypes } from './TypographySample';
import { Text } from '../../Text';

const TextSampleSection: FC = () => {
  return (
    <>
      <div className="bg-primary-100 mb-6 flex h-16 items-center rounded-lg p-6">
        <Text variant="subtitle1" weight={600}>
          Text Samples
        </Text>
      </div>
      <div>
        {textTypes.map(type => {
          const variant = getVariantName(type);
          return (
            <div key={variant}>
              <TextSample weight={400} variant={variant} />
              <TextSample weight={500} variant={variant} />
              <TextSample weight={600} variant={variant} />
              <TextSample weight={700} variant={variant} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TextSampleSection;
