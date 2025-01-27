import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const CloseCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloseCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.9902 10.0099L14.8302 9.16992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.16992 14.8301L11.9199 12.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8299 14.8299L9.16992 9.16992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloseCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M13.0594 12.0001L15.3594 9.70011C15.6494 9.41011 15.6494 8.93011 15.3594 8.64011C15.0694 8.35011 14.5894 8.35011 14.2994 8.64011L11.9994 10.9401L9.69937 8.64011C9.40937 8.35011 8.92937 8.35011 8.63938 8.64011C8.34938 8.93011 8.34938 9.41011 8.63938 9.70011L10.9394 12.0001L8.63938 14.3001C8.34938 14.5901 8.34938 15.0701 8.63938 15.3601C8.78938 15.5101 8.97937 15.5801 9.16937 15.5801C9.35937 15.5801 9.54937 15.5101 9.69937 15.3601L11.9994 13.0601L14.2994 15.3601C14.4494 15.5101 14.6394 15.5801 14.8294 15.5801C15.0194 15.5801 15.2094 15.5101 15.3594 15.3601C15.6494 15.0701 15.6494 14.5901 15.3594 14.3001L13.0594 12.0001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloseCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.16998 14.83L14.83 9.17004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.83 14.83L9.16998 9.17004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloseCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z"
        fill="currentColor"
      />
      <Path
        d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloseCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M9.16992 14.8299L14.8299 9.16992"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.8299 14.8299L9.16992 9.16992"
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
  bold: CloseCircleBold,
  broken: CloseCircleBroken,
  bulk: CloseCircleBulk,
  linear: CloseCircleLinear,
  outline: CloseCircleOutline,
  twotone: CloseCircleTwotone,
};

export const CloseCircleIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
