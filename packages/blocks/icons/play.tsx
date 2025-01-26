import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PlayBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.49 9.59965L5.6 16.7696C4.9 17.1896 4 16.6896 4 15.8696V7.86965C4 4.37965 7.77 2.19965 10.8 3.93965L15.39 6.57965L17.48 7.77965C18.17 8.18965 18.18 9.18965 17.49 9.59965Z"
        fill="currentColor"
      />
      <Path
        d="M18.0888 15.4606L14.0388 17.8006L9.99883 20.1306C8.54883 20.9606 6.90883 20.7906 5.71883 19.9506C5.13883 19.5506 5.20883 18.6606 5.81883 18.3006L18.5288 10.6806C19.1288 10.3206 19.9188 10.6606 20.0288 11.3506C20.2788 12.9006 19.6388 14.5706 18.0888 15.4606Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PlayBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.7 8.97989L4.14 17.7099C4.05 17.3799 4 17.0299 4 16.6699V7.32989C4 4.24989 7.33 2.32989 10 3.86989L14.04 6.19989L18.09 8.53989C18.31 8.66989 18.52 8.80989 18.7 8.97989Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.0907 15.4598L14.0407 17.7998L10.0007 20.1298C8.0907 21.2298 5.8407 20.5698 4.7207 18.9598L5.1407 18.7098L19.5807 10.0498C20.5807 11.8498 20.0907 14.3098 18.0907 15.4598Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PlayOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.87 21.28C7.08 21.28 6.33 21.09 5.67 20.71C4.11 19.81 3.25 17.98 3.25 15.57V8.43999C3.25 6.01999 4.11 4.19999 5.67 3.29999C7.23 2.39999 9.24 2.56999 11.34 3.77999L17.51 7.33999C19.6 8.54999 20.76 10.21 20.76 12.01C20.76 13.81 19.61 15.47 17.51 16.68L11.34 20.24C10.13 20.93 8.95 21.28 7.87 21.28ZM7.87 4.21999C7.33 4.21999 6.85 4.33999 6.42 4.58999C5.34 5.20999 4.75 6.57999 4.75 8.43999V15.56C4.75 17.42 5.34 18.78 6.42 19.41C7.5 20.04 8.98 19.86 10.59 18.93L16.76 15.37C18.37 14.44 19.26 13.25 19.26 12C19.26 10.75 18.37 9.55999 16.76 8.62999L10.59 5.06999C9.61 4.50999 8.69 4.21999 7.87 4.21999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PlayTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PlayBold,
  broken: PlayBroken,
  bulk: PlayBulk,
  linear: PlayLinear,
  outline: PlayOutline,
  twotone: PlayTwotone,
};

export const PlayIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
