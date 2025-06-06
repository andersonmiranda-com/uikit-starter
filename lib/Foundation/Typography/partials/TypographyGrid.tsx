import { type FC } from 'react';

import TypographyCell from './TypographyCell';
import { textTypes } from './TypographySample';

const TypograpyGrid: FC = () => {
  return (
    <div className="grid gap-6">
      {textTypes.map((type: string, index) => (
        <TypographyCell key={index} type={type} />
      ))}
    </div>
  );
};

export default TypograpyGrid;
