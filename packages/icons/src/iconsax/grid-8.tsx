import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Grid8Bold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M22 7.81125V11.2513H16.75V2.03125C20.05 2.23125 22 4.36125 22 7.81125Z"
        fill="currentColor"
      />
      <Path
        d="M22 12.75V16.19C22 19.64 20.05 21.77 16.75 21.97V12.75H22Z"
        fill="currentColor"
      />
      <Path
        d="M7.25 12.75V21.97C3.95 21.77 2 19.64 2 16.19V12.75H7.25Z"
        fill="currentColor"
      />
      <Path
        d="M7.25 2.03125V11.2513H2V7.81125C2 4.36125 3.95 2.23125 7.25 2.03125Z"
        fill="currentColor"
      />
      <Path d="M15.25 2H8.75V11.25H15.25V2Z" fill="currentColor" />
      <Path d="M15.25 12.75H8.75V22H15.25V12.75Z" fill="currentColor" />
    </Svg>
  );
};

const Grid8Broken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M2.52 5.41C2.16 6.38 2 7.57 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C7.82 2 6.82 2.11 5.96 2.34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 12V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 22V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 12V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 12V2.54004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Grid8Bulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        opacity="0.4"
        d="M22 7.81V12H15.75V2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M22 12V16.19C22 19.83 19.83 22 16.19 22H15.75V12H22Z"
        fill="currentColor"
      />
      <Path
        d="M8.25 12V22H7.81C4.17 22 2 19.83 2 16.19V12H8.25Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.81 2C4.17 2 2 4.17 2 7.81V12H8.25V2H7.81Z"
        fill="currentColor"
      />
      <Path d="M15.75 2H8.25V12H15.75V2Z" fill="currentColor" />
      <Path opacity="0.4" d="M15.75 12H8.25V22H15.75V12Z" fill="currentColor" />
    </Svg>
  );
};

const Grid8Linear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 12V21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 22V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 12V2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 12V2.54004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Grid8Outline = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M22 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.25 22.25C7.84 22.25 7.5 21.91 7.5 21.5V12C7.5 11.59 7.84 11.25 8.25 11.25C8.66 11.25 9 11.59 9 12V21.5C9 21.91 8.66 22.25 8.25 22.25Z"
        fill="currentColor"
      />
      <Path
        d="M15.75 22.75C15.34 22.75 15 22.41 15 22V12C15 11.59 15.34 11.25 15.75 11.25C16.16 11.25 16.5 11.59 16.5 12V22C16.5 22.41 16.16 22.75 15.75 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M8.25 12.75C7.84 12.75 7.5 12.41 7.5 12V2C7.5 1.59 7.84 1.25 8.25 1.25C8.66 1.25 9 1.59 9 2V12C9 12.41 8.66 12.75 8.25 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.75 12.75C15.34 12.75 15 12.41 15 12V2.54004C15 2.13004 15.34 1.79004 15.75 1.79004C16.16 1.79004 16.5 2.13004 16.5 2.54004V12C16.5 12.41 16.16 12.75 15.75 12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Grid8Twotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M2 12H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.25 12V21.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.75 22V12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.25 12V2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.75 12V2.54004"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Grid8Bold,
  broken: Grid8Broken,
  bulk: Grid8Bulk,
  linear: Grid8Linear,
  outline: Grid8Outline,
  twotone: Grid8Twotone,
};

export const Grid8Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Grid8Icon;
