import Image from "next/image";

export default function DividerWave() {
  return (
    <>
      <div className="flex items-center justify-center mt-10 lg:mt-28">
        <Image
          src="/shapes/tilde-line.svg"
          alt="~~~~~~~"
          width={200}
          height={18}
          className="lg:w-[200px] lg:h-[18px] w-[100px]"
        />
      </div>
    </>
  );
}
