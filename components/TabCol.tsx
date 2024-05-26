"use client";

interface Props {
  tabIndex: number;
  setTabIndex(value: number): void;
}

interface Tab {
  name: string;
  color: string;
  bg: string;
}

const TabCol = ({ tabIndex, setTabIndex }: Props) => {
  const TABS: Tab[] = [
    {
      name: "Velog",
      color: "white",
      bg: "#20c997",
    },
    {
      name: "Tistory",
      color: "white",
      bg: "#222",
    },
  ];

  return (
    <ul className="flex flex-row lg:flex-col absolute pl-4 my-0 lg:-translate-x-full -translate-y-full right-0 lg:right-auto lg:left-0 lg:top-0 lg:mt-4 lg:translate-y-0 gap-y-2 ">
      {TABS.map((tab, index) => (
        <Tag
          {...tab}
          index={index}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          key={tab.name}
        />
      ))}
    </ul>
  );
};

interface TagProps extends Pick<Props, "tabIndex" | "setTabIndex">, Tab {
  index: number;
}

function Tag({ name, index, bg, color, tabIndex, setTabIndex }: TagProps) {
  return (
    <ol
      className={`my-0 pl-4 pr-3 py-1 bg-black text-right font-semibold text-white text-sm rounded-t lg:rounded-r-none lg:rounded-l cursor-pointer transition-opacity ${
        tabIndex !== index ? "opacity-50" : ""
      }`}
      style={{ backgroundColor: bg, color: color }}
      onPointerDown={() => setTabIndex(index)}
      key={index}
    >
      {name}
    </ol>
  );
}

export default TabCol;
