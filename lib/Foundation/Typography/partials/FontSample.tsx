import { type FC } from 'react';
import { TextVariant, TextWeight } from '../../Text/text.tv';
import { Text } from '../../Text';

interface FontSampleProps {
  variant: TextVariant;
  weight: TextWeight;
  weightName: string;
}

const navigateTo = (variant: string): void => {
  const element = document.getElementById(variant);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const FontSample: FC<FontSampleProps> = ({ variant, weightName, weight }) => {
  return (
    <div className="bg-primary-100 flex items-center gap-4 rounded-lg p-2">
      <div className="flex h-[74px] w-[74px] items-center justify-center bg-white">
        <Text
          variant={variant}
          weight={weight}
          onClick={() => {
            navigateTo(`${variant}-${weight}`);
          }}
          className="cursor-pointer"
        >
          Ag
        </Text>
      </div>

      <div className="flex grow-0 flex-col gap-1">
        <Text weight={weight}>
          {weightName} {weight}
        </Text>
        <Text variant="caption" monospaced className="rounded-sm bg-white p-1" color="neutral-600">
          {`<Text variant="${variant}" weight="${weight}">Ag</Text>`}
        </Text>
      </div>
    </div>
  );
};

export default FontSample;
