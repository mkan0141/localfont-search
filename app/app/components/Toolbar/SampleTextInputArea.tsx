import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';

import { Cross1Icon } from '@radix-ui/react-icons';
import { sampleTextAtom } from '@/common/atom/index';

type Props = {
  className?: string;
};

const SampleInputArea = ({ className }: Props) => {
  const [sampleText, setSampleText] = useAtom(sampleTextAtom);

  const onChangeSampleText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSampleText(e.target.value);
  };

  const onClearSampleText = () => setSampleText('');

  return (
    <div
      className={`${className} relative rounded-md border border-slate-300 px-2`}
    >
      <input
        className="h-full pr-4 text-sm outline-none"
        onChange={onChangeSampleText}
        value={sampleText}
        placeholder="サンプルテキストを入力"
        autoFocus={false}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      {sampleText && (
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2"
          onClick={onClearSampleText}
        >
          <Cross1Icon />
        </button>
      )}
    </div>
  );
};

export { SampleInputArea };
