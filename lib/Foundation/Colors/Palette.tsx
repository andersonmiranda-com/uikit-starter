import { type FC, useEffect, useState } from 'react';
import { ColorItem, ColorPalette } from '@storybook/addon-docs/blocks';
import { colorKeys } from '../../utils/types/Colors.type';

// Hook para obtener los colores desde el CSS
const useCSSColors = () => {
  const [colors, setColors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const styles = getComputedStyle(document.documentElement);

    const colorVars: Record<string, string> = {};
    colorKeys.map(color => {
      colorVars[color] = styles.getPropertyValue(`--color-${color}`).trim();
    });
    setColors(colorVars);
  }, []);

  return colors;
};

// Agrupa los colores en tonos y personalizados
const groupColors = (colors: Record<string, string>) => {
  const toned: Record<string, Record<string, string>> = {};
  const custom: Record<string, Record<string, string>> = {};

  Object.keys(colors)
    .sort()
    .forEach(key => {
      const group = key.split('-')[0];
      if (key.match(/\d{3}$/)) {
        if (!toned[group]) toned[group] = {};
        toned[group][key] = colors[key];
      } else {
        if (!custom[group]) custom[group] = {};
        custom[group][key] = colors[key];
      }
    });

  return { toned, custom };
};

const Palette: FC = () => {
  const colors = useCSSColors();
  const { toned, custom } = groupColors(colors);
  const toneGroup = Object.keys(toned).sort();
  const customGroup = Object.keys(custom).sort();

  return (
    <>
      <h2>Tonos escalonados</h2>
      <ColorPalette>
        {toneGroup.map((group, index) => (
          <ColorItem
            key={index}
            title={group.charAt(0).toUpperCase() + group.slice(1)}
            subtitle=""
            colors={toned[group]}
          />
        ))}
      </ColorPalette>

      <h2>Tonos personalizados</h2>
      <ColorPalette>
        {customGroup.map((group, index) => (
          <ColorItem
            key={index}
            title={group.charAt(0).toUpperCase() + group.slice(1)}
            subtitle=""
            colors={custom[group]}
          />
        ))}
      </ColorPalette>
    </>
  );
};

export default Palette;
