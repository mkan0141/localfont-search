'use client';

import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';

import { getLocalFontList, Font } from '@/lib/font';

import {
  viewModeAtom,
  fontSizeAtom,
  localFontListAtom,
  filterTextAtom,
  sampleTextAtom,
} from '@/common/atom';

type FontCardProps = {
  className?: string;
  font: Font;
  fontSize: number;
  text: string;
};

const FontCard = ({ className, font, fontSize, text }: FontCardProps) => {
  return (
    <div className={`rounded-md border border-slate-200 bg-white p-4 ${className}`}>
      <div className="text-sm">{font.family}</div>
      <div
        className=" mt-4 break-words leading-[1.2]"
        style={{ fontSize: fontSize, fontFamily: font.family }}
      >
        {text}
      </div>
    </div>
  );
};

const LocalFontList = () => {
  const viewMode = useAtomValue(viewModeAtom);
  const fontSize = useAtomValue(fontSizeAtom);
  const filterText = useAtomValue(filterTextAtom).toLowerCase();
  const sampleText = useAtomValue(sampleTextAtom);
  const [localFontList, setLocalFontList] = useAtom(localFontListAtom);

  useEffect(() => {
    getLocalFontList().then((fonts) => {
      setLocalFontList(fonts);
    });
  }, []);

  const filteredFontList = filterText
    ? localFontList.filter((font) => font.family.toLowerCase().includes(filterText))
    : localFontList;

  return (
    <div
      className={`grid grid-cols-1 gap-6 ${
        viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : ''
      }`}
    >
      {filteredFontList.map((font) => {
        return (
          <FontCard
            className="text-4xl"
            font={font}
            fontSize={fontSize}
            text={sampleText || font.family}
            key={font.family}
          />
        );
      })}
    </div>
  );
};

export { LocalFontList };
