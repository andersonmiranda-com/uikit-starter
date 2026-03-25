import { type FC, useEffect, useState } from 'react';

import { TextVariant, variantToElementMap } from '../../Text/text.styles';

import FontSample from './FontSample';
import SpecsLine from './Specsline';
import { getVariantName } from './TypographySample';
import { Text } from '../../Text';

// Función para extraer valores CSS dinámicamente
const getCSSVariableValue = (variableName: string): string => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

// Hook para obtener los tamaños de fuente dinámicamente
const useFontSizes = (variant: TextVariant) => {
  const [sizes, setSizes] = useState<{
    desktop: [string, string];
    mobile: [string, string];
  }>({
    desktop: ['', ''],
    mobile: ['', ''],
  });

  useEffect(() => {
    const desktopSize = getCSSVariableValue(`--text-${variant}`);
    const desktopLineHeight = getCSSVariableValue(`--text-${variant}--line-height`);
    const mobileSize = getCSSVariableValue(`--text-${variant}-mobile`);
    const mobileLineHeight = getCSSVariableValue(`--text-${variant}-mobile--line-height`);

    setSizes({
      desktop: [desktopSize, desktopLineHeight],
      mobile: [mobileSize, mobileLineHeight],
    });
  }, [variant]);

  return sizes;
};

interface TypographyCellProps {
  type: string;
}

const TypographyCell: FC<TypographyCellProps> = ({ type }) => {
  const variant = getVariantName(type);
  const sizes = useFontSizes(variant);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-primary-100 col-span-4 flex h-16 items-center rounded-lg p-6">
        <Text variant="subtitle1" weight={600}>
          {type}
        </Text>
      </div>
      <div className="tablet:grid-cols-2 grid grid-cols-1 gap-3">
        <div className="grid w-full grid-cols-3 gap-0">
          <SpecsLine label="Variant:" data1={variant} />
          <SpecsLine
            label="Element:"
            data1={variantToElementMap[variant as TextVariant]}
            monospaced
          />
          <SpecsLine variant="header" label="" data1="Desktop/Tablet" data2="Mobile" />
          <SpecsLine
            label="Tailwind token:"
            data1={`text-${variant}`}
            data2={`text-${variant}-mobile`}
            monospaced
          />
          <SpecsLine
            label="Font Size:"
            data1={sizes.desktop[0]}
            data2={sizes.mobile[0]}
            monospaced
          />
          <SpecsLine
            label="Line Height:"
            data1={sizes.desktop[1]}
            data2={sizes.mobile[1]}
            monospaced
          />
        </div>
        <div className="flex w-full flex-col gap-3">
          <FontSample variant={variant} weightName="Regular" weight={400} />
          <FontSample variant={variant} weightName="Medium" weight={500} />
          <FontSample variant={variant} weightName="Semibold" weight={600} />
          <FontSample variant={variant} weightName="Bold" weight={700} />
        </div>
      </div>
    </div>
  );
};

export default TypographyCell;
