import { useAtom } from 'jotai';
import * as Toolbar from '@radix-ui/react-toolbar';
import { ViewHorizontalIcon, ViewGridIcon } from '@radix-ui/react-icons';

import { viewModeAtom, ViewModeType } from '@/common/atom';

type Props = {
  className?: string;
};

const ViewModeToggleGroup = ({ className = '' }: Props) => {
  const [viewMode, setViewMode] = useAtom(viewModeAtom);

  const toggleViewMode = (value: ViewModeType) => {
    if (value) setViewMode(value);
  };

  return (
    <Toolbar.ToggleGroup
      type="single"
      defaultValue="horizontal"
      value={viewMode}
      onValueChange={toggleViewMode}
      className={className}
    >
      <Toolbar.ToggleItem
        value="horizontal"
        className="inline-flex items-center rounded bg-white p-1 text-slate-700 hover:bg-slate-50 data-[state='on']:bg-slate-200"
      >
        <ViewHorizontalIcon height={20} width={20} className="inline-block" />
        <span className="ml-1 inline-block text-sm">リスト</span>
      </Toolbar.ToggleItem>
      <Toolbar.ToggleItem
        value="grid"
        className="ml-1 inline-flex items-center rounded bg-white p-1 text-slate-700 hover:bg-slate-50 data-[state='on']:bg-slate-200"
      >
        <ViewGridIcon height={20} width={20} className="inline-block" />
        <span className="ml-1 inline-block text-sm">グリッド</span>
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
  );
};

export { ViewModeToggleGroup };
