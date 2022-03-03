import { PureComponent } from "react";

export default class SearchBar extends PureComponent {
  handleText = (event) => {
    this.props.handleChange(event);
  };
  render() {
    return (
      <div class="bg-white p-4 rounded-lg">
        <div class="relative bg-inherit">
          <input
            type="text"
            id="emoji"
            name="emoji"
            class="peer bg-transparent h-10 w-full rounded-lg text-[#664e27] placeholder-transparent ring-2 px-2 ring-[#664e27] focus:ring-yellow-300 focus:outline-none focus:border-yellow-300"
            placeholder="Search Emoji"
            onChange={this.handleText}
          />
          <label
            for="emoji"
            class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#664e27] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-yellow-300 peer-focus:text-sm transition-all"
          >
            Search Emoji
          </label>
        </div>
        {/* <div className="m-[10px]">
          <input
            className="border-b-4 border border-[#bbb] text-lg px-[10px] py-2 w-full rounded-full"
            placeholder="Search Emoji"
            onChange={this.handleText}
          />
        </div> */}
      </div>
    );
  }
}
