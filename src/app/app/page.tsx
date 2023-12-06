import { LocalFontList } from './components/LocalFontList';
import { FontToolbar } from './components/Toolbar/index';

export default function App() {
  return (
    <div className="flex">
      <div className=" border-r-[1px] border-slate-200">
        <FontToolbar className="h-[100svh] p-4" />
      </div>
      <div className="w-full bg-gray-100 px-16 pt-16">
        <LocalFontList />
      </div>
    </div>
  );
}
