import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const VideoTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98H15.67C16.44 22.62 17.43 23 18.5 23C19.64 23 20.67 22.58 21.46 21.88C21.81 21.58 22.11 21.22 22.35 20.82C22.76 20.14 23 19.34 23 18.5C23 17.42 22.62 16.42 21.98 15.65ZM20.76 17.94L18.36 20.16C18.22 20.29 18.03 20.36 17.85 20.36C17.66 20.36 17.47 20.29 17.32 20.14L16.21 19.03C15.92 18.74 15.92 18.26 16.21 17.97C16.5 17.68 16.98 17.68 17.27 17.97L17.87 18.57L19.74 16.84C20.04 16.56 20.52 16.58 20.8 16.88C21.09 17.19 21.07 17.66 20.76 17.94Z"
        fill="currentColor"
      />
      <Path
        d="M14.7295 5.86V2.5C14.7295 2.22 14.5095 2 14.2295 2H9.76953C9.48953 2 9.26953 2.22 9.26953 2.5V5.86C9.26953 6.14 9.48953 6.36 9.76953 6.36H14.2295C14.5095 6.36 14.7295 6.14 14.7295 5.86Z"
        fill="currentColor"
      />
      <Path
        d="M7.24851 2.0207C4.68851 2.1807 2.93851 3.5007 2.28851 5.7007C2.18851 6.0307 2.42851 6.3607 2.76851 6.3607H7.26851C7.54851 6.3607 7.76851 6.1407 7.76851 5.8607V2.5207C7.76851 2.2407 7.52851 2.0007 7.24851 2.0207Z"
        fill="currentColor"
      />
      <Path
        d="M16.7505 2.00898C19.3105 2.16898 21.0605 3.48898 21.7105 5.68898C21.8105 6.01898 21.5705 6.34898 21.2305 6.34898H16.7305C16.4505 6.34898 16.2305 6.12898 16.2305 5.84898V2.50898C16.2305 2.22898 16.4705 1.98898 16.7505 2.00898Z"
        fill="currentColor"
      />
      <Path
        d="M22 8.35937V12.7394C22 13.1094 21.61 13.3494 21.28 13.1794C20.44 12.7394 19.48 12.4994 18.5 12.4994C16.89 12.4994 15.32 13.1594 14.2 14.3094C13.1 15.4294 12.5 16.9194 12.5 18.4994C12.5 19.3094 12.82 20.3494 13.22 21.2194C13.38 21.5694 13.14 21.9994 12.75 21.9994H7.81C4.6 21.9994 2 19.3994 2 16.1894V8.35937C2 8.07937 2.22 7.85938 2.5 7.85938H21.5C21.78 7.85938 22 8.07937 22 8.35937Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 15.23 22 15.45 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.46 22 15.23 22 15 22H9C4 22 2 20 2 15V13.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.51953 7.10986H21.4795"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.51953 2.10986V6.96985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.4805 2.10986V6.5199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 18.5C23 19.34 22.76 20.14 22.35 20.82C22.11 21.22 21.81 21.58 21.46 21.88C20.67 22.58 19.64 23 18.5 23C17.43 23 16.44 22.62 15.67 21.98H15.66C15.26 21.66 14.92 21.27 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.75 18.5001L17.86 19.6101L20.26 17.3901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98H15.67C16.44 22.62 17.43 23 18.5 23C19.64 23 20.67 22.58 21.46 21.88C21.81 21.58 22.11 21.22 22.35 20.82C22.76 20.14 23 19.34 23 18.5C23 17.42 22.62 16.42 21.98 15.65ZM20.76 17.94L18.36 20.16C18.22 20.29 18.03 20.36 17.85 20.36C17.66 20.36 17.47 20.29 17.32 20.14L16.21 19.03C15.92 18.74 15.92 18.26 16.21 17.97C16.5 17.68 16.98 17.68 17.27 17.97L17.87 18.57L19.74 16.84C20.04 16.56 20.52 16.58 20.8 16.88C21.09 17.19 21.07 17.66 20.76 17.94Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 7.81V15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.67 21.98 15.67 21.98 15.68 21.98C15.69 21.99 15.7 22 15.71 22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 7.3 2.04 6.80999 2.13 6.35999C2.64 3.60999 4.67 2.01 7.77 2H16.23C19.33 2.01 21.36 3.60999 21.87 6.35999C21.96 6.80999 22 7.3 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M22 7.81V7.85999H2V7.81C2 7.3 2.04 6.80999 2.13 6.35999H7.77V2H9.27V6.35999H14.73V2H16.23V6.35999H21.87C21.96 6.80999 22 7.3 22 7.81Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9V15C22 15.22 22 15.44 21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98C15.45 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.52002 7.10986H21.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.52002 2.10986V6.96985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.48 2.10986V6.5199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 18.5C23 19.34 22.76 20.14 22.35 20.82C22.11 21.22 21.81 21.58 21.46 21.88C20.67 22.58 19.64 23 18.5 23C17.43 23 16.44 22.62 15.67 21.98H15.66C15.26 21.66 14.92 21.27 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.75 18.5001L17.86 19.6101L20.26 17.3901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VideoTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 15.24 22.75 15.49 22.73 15.72C22.7 16.02 22.49 16.28 22.2 16.37C21.91 16.46 21.59 16.36 21.4 16.12C20.69 15.25 19.64 14.75 18.5 14.75C17.65 14.75 16.82 15.04 16.16 15.57C15.26 16.28 14.75 17.34 14.75 18.5C14.75 19.17 14.94 19.84 15.29 20.43C15.51 20.8 15.8 21.13 16.13 21.39C16.37 21.58 16.47 21.9 16.38 22.19C16.29 22.48 16.04 22.69 15.73 22.72C15.5 22.75 15.25 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H14.03C14.02 21.24 14.01 21.22 14 21.21C13.5 20.39 13.24 19.45 13.24 18.5C13.24 16.88 13.96 15.39 15.22 14.4C16.9 13.04 19.45 12.92 21.24 14.02V9C21.24 4.39 19.6 2.75 14.99 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M21.4795 7.85986H2.51953C2.10953 7.85986 1.76953 7.51986 1.76953 7.10986C1.76953 6.69986 2.10953 6.35986 2.51953 6.35986H21.4795C21.8895 6.35986 22.2295 6.69986 22.2295 7.10986C22.2295 7.51986 21.8995 7.85986 21.4795 7.85986Z"
        fill="currentColor"
      />
      <Path
        d="M8.51953 7.71985C8.10953 7.71985 7.76953 7.37985 7.76953 6.96985V2.10986C7.76953 1.69986 8.10953 1.35986 8.51953 1.35986C8.92953 1.35986 9.26953 1.69986 9.26953 2.10986V6.96985C9.26953 7.37985 8.92953 7.71985 8.51953 7.71985Z"
        fill="currentColor"
      />
      <Path
        d="M15.4805 7.2699C15.0705 7.2699 14.7305 6.9299 14.7305 6.5199V2.10986C14.7305 1.69986 15.0705 1.35986 15.4805 1.35986C15.8905 1.35986 16.2305 1.69986 16.2305 2.10986V6.5199C16.2305 6.9399 15.9005 7.2699 15.4805 7.2699Z"
        fill="currentColor"
      />
      <Path
        d="M18.5 23.75C17.32 23.75 16.18 23.35 15.26 22.62C15.24 22.6 15.21 22.59 15.19 22.57C14.72 22.19 14.32 21.74 14.01 21.21C13.51 20.39 13.25 19.45 13.25 18.5C13.25 16.88 13.97 15.39 15.23 14.4C16.15 13.66 17.31 13.25 18.5 13.25C20.09 13.25 21.57 13.95 22.56 15.18C23.32 16.1 23.75 17.28 23.75 18.5C23.75 19.45 23.49 20.38 22.99 21.21C22.7 21.69 22.35 22.1 21.95 22.45C21 23.29 19.78 23.75 18.5 23.75ZM16.07 21.35C16.1 21.37 16.12 21.39 16.15 21.41C16.81 21.96 17.64 22.26 18.5 22.26C19.42 22.26 20.27 21.94 20.96 21.33C21.25 21.08 21.5 20.78 21.71 20.45C22.06 19.86 22.25 19.19 22.25 18.52C22.25 17.65 21.95 16.81 21.4 16.15C20.69 15.27 19.63 14.77 18.5 14.77C17.65 14.77 16.82 15.06 16.16 15.59C15.26 16.3 14.75 17.36 14.75 18.52C14.75 19.19 14.94 19.86 15.29 20.45C15.5 20.78 15.76 21.09 16.07 21.35Z"
        fill="currentColor"
      />
      <Path
        d="M17.8497 20.3597C17.6597 20.3597 17.4697 20.2897 17.3197 20.1397L16.2097 19.0297C15.9197 18.7397 15.9197 18.2596 16.2097 17.9696C16.4997 17.6796 16.9797 17.6796 17.2697 17.9696L17.8697 18.5697L19.7397 16.8397C20.0397 16.5597 20.5197 16.5797 20.7997 16.8797C21.0797 17.1797 21.0597 17.6597 20.7597 17.9397L18.3597 20.1596C18.2197 20.2896 18.0397 20.3597 17.8497 20.3597Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VideoTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 9V15C22 15.22 22 15.44 21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98C15.45 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M2.51953 7.10986H21.4795"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.51953 2.10986V6.96985"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.4805 2.10986V6.5199"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M23 18.5C23 19.34 22.76 20.14 22.35 20.82C22.11 21.22 21.81 21.58 21.46 21.88C20.67 22.58 19.64 23 18.5 23C17.43 23 16.44 22.62 15.67 21.98H15.66C15.26 21.66 14.92 21.27 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.75 18.5001L17.86 19.6101L20.26 17.3901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VideoTickBold,
  broken: VideoTickBroken,
  bulk: VideoTickBulk,
  linear: VideoTickLinear,
  outline: VideoTickOutline,
  twotone: VideoTickTwotone,
};

export const VideoTickIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default VideoTickIcon;
