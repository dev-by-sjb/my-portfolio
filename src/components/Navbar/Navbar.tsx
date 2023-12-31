import { type MouseEvent } from "react";
import { links } from "../../data";
import { useNavScroll } from "./navbar_custom_hook";

const Navbar = () => {
  const { isScrollDown, isHideNavBg } = useNavScroll();

  const handleNavToHome = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget.text;
    if (target === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    // if (target === "techStack") window.scrollTo({ top: 613 });
  };

  return (
    <nav
      className={`fixed w-screen z-50 top-0 transition-all overflow-hidden ease-out sm:h-auto ${
        isScrollDown && !isHideNavBg ? "h-[68px] duration-[500ms]" : "h-[114px] duration-300"
      } ${isHideNavBg ? "bg-sky-100" : "shadow-md rounded-b-xl bg-sky-100/60 backdrop-blur-xl"}`}>
      <div className="align-elements flex flex-col text-center sm:flex-row sm:items-center sm:justify-between">
        <h2
          className="text-3xl cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}>
          FullStack
          <span className="text-sky-600 font-semibold">Dev</span>
        </h2>

        <div
          className={` transition duration-300 ease-out sm:scale-100 sm:h-auto sm:opacity-100 ${
            isScrollDown && !isHideNavBg
              ? "overflow-hidden duration-[500ms] opacity-0 scale-90"
              : "overflow-hidden duration-300 opacity-100"
          }`}>
          <div className=" mt-4 flex gap-x-3 justify-center sm:mt-0">
            {links.map(({ href, id, text }) => {
              return (
                <a
                  onClick={handleNavToHome}
                  key={id}
                  className="capitalize tracking-wide transition duration-300 ease-in hover:scale-110 hover:text-sky-600"
                  href={href}>
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
export { Navbar };
