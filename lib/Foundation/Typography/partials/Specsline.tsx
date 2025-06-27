import { type FC } from 'react';

import { twMerge } from 'tailwind-merge';
import { Text } from '../../Text';

interface SpecsLineProps {
  variant?: string;
  label: string;
  data1: string;
  data2?: string;
  monospaced?: boolean;
}

const SpecsLine: FC<SpecsLineProps> = ({
  label,
  variant = '',
  data1,
  data2,
  monospaced = false,
}) => {
  return (
    <>
      <Text
        weight={600}
        className={twMerge(
          'flex items-center border-b border-neutral-300',
          variant === 'header' ? 'h-12' : 'h-[64px]'
        )}
      >
        {label}
      </Text>
      <Text
        color={monospaced ? 'neutral-600' : undefined}
        className={twMerge(
          'flex items-center border-b border-neutral-300 text-nowrap',
          variant === 'header' ? 'h-12' : 'h-[64px]'
        )}
        weight={variant === 'header' ? 600 : 400}
        variant={monospaced ? 'caption' : 'body1'}
        monospaced={monospaced}
      >
        {data1}
      </Text>
      <Text
        color={monospaced ? 'neutral-600' : undefined}
        className={twMerge(
          'flex items-center border-b border-neutral-300 text-nowrap',
          variant === 'header' ? 'h-12' : 'h-[64px]',
          monospaced ? 'text-neutral-500' : undefined
        )}
        weight={variant === 'header' ? 600 : 400}
        variant={monospaced ? 'caption' : 'body1'}
        monospaced={monospaced}
      >
        {data2 ?? ''}
      </Text>
    </>
  );
};

export default SpecsLine;
