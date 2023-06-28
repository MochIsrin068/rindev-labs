export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div
        className={`py-6 bg-[#0809149e] w-full items-center justify-center text-center text-xs lg:text-base`}
      >
        &copy; {year}{" "}
        <span className="font-extrabold text-white">Muhammad Isrim</span>. All
        Rights Reserved.
      </div>
    </>
  );
}
