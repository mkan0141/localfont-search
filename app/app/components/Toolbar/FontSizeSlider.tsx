import * as Slider from '@radix-ui/react-slider';
import { useAtom } from 'jotai';

import { fontSizeAtom } from '@/common/atom/index';

type Props = {
  className?: string;
};

const FontSizeSlider = ({ className = '' }: Props) => {
  const [fontSize, setFontSize] = useAtom(fontSizeAtom);

  const onChangeFontSize = (value: number[]) => {
    setFontSize(value[0]);
  };

  return (
    <div className="flex items-center">
      <Slider.Root
        className={`relative flex items-center ${className}`}
        min={8}
        max={120}
        step={1}
        value={[fontSize]}
        onValueChange={onChangeFontSize}
      >
        <Slider.Track className="relative block h-1 flex-grow bg-slate-200">
          <Slider.Range className="absolute h-full bg-slate-400" />
        </Slider.Track>
        <Slider.Thumb
          aria-label="font size"
          className="block h-5 w-5 rounded-full border border-slate-950 bg-white"
        />
      </Slider.Root>
      <span className="ml-4 inline-block">{fontSize}px</span>
    </div>
  );
};

export { FontSizeSlider };
