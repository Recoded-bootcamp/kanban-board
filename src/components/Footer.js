import React from "react";

function Footer() {
  return (
    <div className="bg-zinc-900 text-neutral-100">
      <footer className="footer container mx-auto px-4 lg:px0 flex flex-wrap justify-center sm:justify-between py-8 max-w-5xl text-xs gap-4">
        <div className="flex">
          <span>Made with ❤️ by: &nbsp;</span>
          <div className="flex flex-wrap font-semibold">
            <a
              href="https://github.com/Banel-Mikhael"
              className="hover:text-neutral-300 transition"
            >
              Banel, &nbsp;
            </a>
            <a
              href="https://github.com/Danah-94"
              className="hover:text-neutral-300 transition"
            >
              Danah, &nbsp;
            </a>
            <a
              href="https://github.com/alandio"
              className="hover:text-neutral-300 transition"
            >
              Aland, &nbsp;
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
