type FancyTextProps = {
  text?: string;
  underlineText: string;
};

const FancyText: React.FC<FancyTextProps> = ({ text, underlineText }) => (
  <p>
    {text} <span className="fancy">{underlineText}</span>
  </p>
);

export default FancyText;
