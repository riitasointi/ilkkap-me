type Params = {
  text: string,
};

export default function Blockquote({ text }: Params) {
  return <blockquote className="article-quote rounded-r-xl">{text}</blockquote>;
}
