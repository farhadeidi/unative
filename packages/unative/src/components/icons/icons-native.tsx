/** @jsxImportSource nativewind */

import React from "react";
import { cssInterop } from "nativewind";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

import { cn } from "../../utils";

export type IconProps = SvgProps & {
  size?: number;
};

function iconWithClassName(icon: React.FC<IconProps>) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

const SystemIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Circle cx={19} cy={6} r={3} />
      <Path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
      <Path d="M12 17v4" />
      <Path d="M8 21h8" />
    </Svg>
  );
};

const SunIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Circle cx={12} cy={12} r={4} />
      <Path d="M12 2v2" />
      <Path d="M12 20v2" />
      <Path d="m4.93 4.93 1.41 1.41" />
      <Path d="m17.66 17.66 1.41 1.41" />
      <Path d="M2 12h2" />
      <Path d="M20 12h2" />
      <Path d="m6.34 17.66-1.41 1.41" />
      <Path d="m19.07 4.93-1.41 1.41" />
    </Svg>
  );
};

const MoonIcon = ({ size = 16, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </Svg>
  );
};

iconWithClassName(SystemIcon);
iconWithClassName(MoonIcon);
iconWithClassName(SunIcon);

export { MoonIcon, SunIcon, SystemIcon };
