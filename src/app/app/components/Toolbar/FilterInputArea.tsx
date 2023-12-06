import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';

import { MagnifyingGlassIcon, Cross1Icon } from '@radix-ui/react-icons';
import { filterTextAtom } from '@/atom';

type Props = {
  className?: string;
};

const FilterInputArea = ({ className }: Props) => {
  const [filterText, setFilterText] = useAtom(filterTextAtom);

  const onChangeFilterText = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFilterText(e.target.value);
  };

  const onClearFilterText = () => setFilterText('');

  return (
    <div className={`${className} relative rounded-md border border-slate-300 px-2`}>
      <MagnifyingGlassIcon className="inline-block" />
      <input
        className="h-full pr-4 text-sm outline-none"
        onChange={onChangeFilterText}
        value={filterText}
        placeholder="フォントを検索"
        autoFocus={false}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      {filterText && (
        <button className="absolute right-1 top-1/2 -translate-y-1/2" onClick={onClearFilterText}>
          <Cross1Icon />
        </button>
      )}
    </div>
  );
};

export { FilterInputArea };
