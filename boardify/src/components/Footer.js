import React from "react";

function Footer() {
  return (
    <div className="bg-neutral-900 text-neutral-100">
      <footer className="footer container mx-auto flex justify-between py-8 max-w-5xl text-xs">
        <div className="flex">
          <span>Made with ❤️ by: &nbsp;</span>
          <div className="grid grid-flow-col gap-1 font-semibold">
            <a
              href="https://github.com/Banel-Mikhael"
              className="hover:text-neutral-300 transition"
            >
              Banel,
            </a>
            <a
              href="https://github.com/Danah-94"
              className="hover:text-neutral-300 transition"
            >
              Danah,
            </a>
            <a
              href="https://github.com/alandio"
              className="hover:text-neutral-300 transition"
            >
              Aland,
            </a>
            <a
              href="https://github.com/RageOfKurd"
              className="hover:text-neutral-300 transition"
            >
              Hevar
            </a>
          </div>
        </div>

        <div>
          <p>Boredify © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
