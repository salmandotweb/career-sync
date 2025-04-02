import { FC } from "react";

interface indexProps {}

const Gradient: FC<indexProps> = ({}) => {
  return (
    <div className="absolute top-0 left-0 z-[-1] w-full h-[140px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 595 160"
        fill="none"
      >
        <g opacity="0.92" filter="url(#filter0_f_141_165)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M294.025 -195.397C371.794 -199.207 417.023 -166.547 478.556 -148.54C549.444 -127.795 653.905 -123.815 675.717 -83.6979C699.621 -39.7355 651.378 11.8858 588.324 53.3407C522.583 96.5619 431.59 129.344 329.788 143.735C219.591 159.312 100.989 162.573 17.727 133.999C-66.2641 105.174 -107.423 52.1926 -95.8451 -2.3348C-85.4966 -51.0729 -2.38714 -91.1162 73.5049 -128.698C137.254 -160.266 210.104 -191.286 294.025 -195.397Z"
            fill="url(#paint0_angular_141_165)"
            fill-opacity="0.72"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_141_165"
            x="-217.765"
            y="-315.703"
            width="1019.71"
            height="591.217"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="60"
              result="effect1_foregroundBlur_141_165"
            />
          </filter>
          <radialGradient
            id="paint0_angular_141_165"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(291.821 -23.5992) rotate(89.8965) scale(99.0993 237.18)"
          >
            <stop stop-color="#FE79B9" />
            <stop offset="0.416667" stop-color="#AD00FF" />
            <stop offset="1" stop-color="#2489FF" />
          </radialGradient>
        </defs>
      </svg>

      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0F172A] to-transparent"></div>
    </div>
  );
};

export default Gradient;
