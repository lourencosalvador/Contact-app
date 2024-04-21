import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
export const Search = (props: SvgProps) => (
  <Svg
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <G
      stroke="#999"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path strokeLinecap="round" d="m10.938 10.938 2.812 2.812" />
      <Path d="M12.5 6.875a5.625 5.625 0 1 0-11.25 0 5.625 5.625 0 0 0 11.25 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)