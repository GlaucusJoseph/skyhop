import { IconProps } from "../../Interfaces";

export const FileIcon: React.FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0,0,256,256"
    >
      <g
        fill="#fa9c27"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(8.53333,8.53333)">
          <path d="M24.707,8.793l-6.5,-6.5c-0.188,-0.188 -0.442,-0.293 -0.707,-0.293h-10.5c-1.105,0 -2,0.895 -2,2v22c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-16.5c0,-0.265 -0.105,-0.519 -0.293,-0.707zM18,21h-8c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h8c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM20,17h-10c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1h10c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zM18,10c-0.552,0 -1,-0.448 -1,-1v-5.096l6.096,6.096z"></path>
        </g>
      </g>
    </svg>
  );
};
