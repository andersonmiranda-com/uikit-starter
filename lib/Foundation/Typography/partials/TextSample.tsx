import { type FC } from 'react';

import { TextVariant, TextWeight } from '../../Text/text.tv';
import { Text } from '../../Text';

interface TextSampleProps {
  variant: TextVariant;
  weight: TextWeight;
}

const sampleText = 'The quick brown fox jumps over the lazy dog 0123456789';

const TextSample: FC<TextSampleProps> = ({ variant, weight }) => {
  return (
    <div id={`${variant}-${weight}`} className="border-b border-neutral-400 bg-neutral-100 p-6">
      <Text variant="body1" weight={600}>
        {variant} - {weight}
      </Text>
      <div className="my-2 flex items-center gap-2">
        <Text
          variant="caption"
          monospaced
          className="rounded-sm bg-neutral-300 p-1 text-neutral-700"
        >
          {`<Text variant="${variant}" weight="${weight}"/>`}
        </Text>
        <Text
          variant="body1"
          className="cursor-pointer rounded-sm p-1"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          ⬆️
        </Text>
      </div>
      <Text variant={variant} weight={weight}>
        {sampleText}
      </Text>
    </div>
  );
};

export default TextSample;
