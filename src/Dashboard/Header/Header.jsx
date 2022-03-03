import { PureComponent } from "react";

export default class Header extends PureComponent {
  render() {
    return (
      <div>
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-[#664e27] text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div className="container-fluid mx-auto">
              <a
                className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
                href="/"
              >
                <img
                  className="mr-2"
                  src="//cdn.jsdelivr.net/emojione/assets/png/1f642.png"
                  alt=""
                  loading="lazy"
                />
                <span className="text-3xl text-[#ffdd67]">Emoji Search</span>
                <img
                  className="mr-2"
                  src="//cdn.jsdelivr.net/emojione/assets/png/1f643.png"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
