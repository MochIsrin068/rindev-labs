export interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

export function Hamburger(props: HamburgerProps) {
  const { onClick, isOpen } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className={`w-6 ${isOpen ? 'h-6' : 'h-5'} flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
    >
      <div
        className={`bg-white block w-6 h-[0.25rem] rounded transition-all origin-[1px] ${
          isOpen ? "rotate-45 mt-[0.5px]" : "rotate-0"
        }`}
      />
      <div
        className={`bg-white block w-6 h-[0.25rem] rounded transition-all origin-[1px] ${
          isOpen ? "!bg-transparent" : "translate-x-0"
        }`}
      />
      <div
        className={`bg-white block w-6 h-[0.25rem] rounded transition-all origin-[1px] ${
          isOpen ? "rotate-[-45deg]" : "rotate-0"
        }`}
      />
    </button>
  );
}
