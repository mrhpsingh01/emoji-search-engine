import { PureComponent } from "react";
export default class EmojiResultRow extends PureComponent {
  render() {
    const { title, symbol } = this.props;
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="border border-[#ccc] p-[10px] h-12 relative cursor-pointer copy-it hover:bg-[#eee] px-10"
        data-clipboard-text={symbol}
      >
        <img className="w-10 h-10 pb-2 pr-[10px]" src={src} alt={title} />
        <span className="relative -right-10 -top-10">{title}</span>
        <span className="float-right relative -top-6 right-[10px] bg-[#ccc]hidden hover:inline-block text-xs">
          Click to Copy
        </span>
      </div>
    );
  }
}
