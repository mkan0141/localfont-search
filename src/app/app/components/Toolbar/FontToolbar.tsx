'use client';

import * as Toolbar from '@radix-ui/react-toolbar';

import { FilterInputArea } from './FilterInputArea';
import { SampleInputArea } from './SampleTextInputArea';
import { ViewModeToggleGroup } from './ViewModeToggleGroup';
import { FontSizeSlider } from './FontSizeSlider';

type Props = {
  className?: string;
};

const FontToolbar = ({ className = '' }: Props) => {
  return (
    <Toolbar.Root className={`flex flex-col bg-white ${className}`}>
      <div>
        <div className="text-xs text-slate-600">レイアウト</div>
        <ViewModeToggleGroup className="mt-1 flex h-6 items-center" />
      </div>
      <div className="mt-4">
        <div className="text-xs text-slate-600">フォント検索</div>
        <FilterInputArea className="h-7" />
      </div>
      <div className="mt-4">
        <div className="text-xs text-slate-600">サンプルテキスト</div>
        <SampleInputArea className="h-7" />
      </div>
      <div className="mt-4">
        <div className="text-xs text-slate-600">フォントサイズ</div>
        <FontSizeSlider className="flex h-8 w-52 items-center" />
      </div>
    </Toolbar.Root>
  );
};

export { FontToolbar };
