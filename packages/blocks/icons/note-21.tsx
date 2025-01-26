import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Note21Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.6761 19.9589C12.9508 20.0228 12.976 20.3827 12.7084 20.4719L11.1284 20.9919C7.15839 22.2719 5.06839 21.2019 3.77839 17.2319L2.49839 13.2819C1.21839 9.31187 2.27839 7.21187 6.24839 5.93187L6.77238 5.75834C7.17525 5.62493 7.56731 6.02899 7.45292 6.43766C7.39622 6.64023 7.34167 6.85164 7.28839 7.07188L6.30839 11.2619C5.20839 15.9719 6.81839 18.5719 11.5284 19.6919L12.6761 19.9589Z"
        fill="currentColor"
      />
      <Path
        d="M17.1702 3.20854L15.5002 2.81854C12.1602 2.02854 10.1702 2.67854 9.00018 5.09854C8.70018 5.70854 8.46018 6.44854 8.26018 7.29854L7.28018 11.4885C6.30018 15.6685 7.59018 17.7285 11.7602 18.7185L13.4402 19.1185C14.0202 19.2585 14.5602 19.3485 15.0602 19.3885C18.1802 19.6885 19.8402 18.2285 20.6802 14.6185L21.6602 10.4385C22.6402 6.25854 21.3602 4.18854 17.1702 3.20854ZM15.2902 13.3285C15.2002 13.6685 14.9002 13.8885 14.5602 13.8885C14.5002 13.8885 14.4402 13.8785 14.3702 13.8685L11.4602 13.1285C11.0602 13.0285 10.8202 12.6185 10.9202 12.2185C11.0202 11.8185 11.4302 11.5785 11.8302 11.6785L14.7402 12.4185C15.1502 12.5185 15.3902 12.9285 15.2902 13.3285ZM18.2202 9.94854C18.1302 10.2885 17.8302 10.5085 17.4902 10.5085C17.4302 10.5085 17.3702 10.4985 17.3002 10.4885L12.4502 9.25854C12.0502 9.15854 11.8102 8.74854 11.9102 8.34854C12.0102 7.94854 12.4202 7.70854 12.8202 7.80854L17.6702 9.03854C18.0802 9.12854 18.3202 9.53854 18.2202 9.94854Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Note21Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20 15.04V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25V10.07"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 13H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 17H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Note21Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
        fill="currentColor"
      />
      <Path
        d="M15.0603 19.3901C14.4403 19.8101 13.6603 20.1601 12.7103 20.4701L11.1303 20.9901C7.16034 22.2701 5.07034 21.2001 3.78034 17.2301L2.50034 13.2801C1.22034 9.3101 2.28034 7.2101 6.25034 5.9301L7.83034 5.4101C8.24034 5.2801 8.63034 5.1701 9.00034 5.1001C8.70034 5.7101 8.46034 6.4501 8.26034 7.3001L7.28034 11.4901C6.30034 15.6701 7.59034 17.7301 11.7603 18.7201L13.4403 19.1201C14.0203 19.2601 14.5603 19.3501 15.0603 19.3901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Note21Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.66 10.44L20.68 14.62C19.84 18.23 18.18 19.69 15.06 19.39C14.56 19.35 14.02 19.26 13.44 19.12L11.76 18.72C7.59 17.73 6.3 15.67 7.28 11.49L8.26 7.30001C8.46 6.45001 8.7 5.71001 9 5.10001C10.17 2.68001 12.16 2.03001 15.5 2.82001L17.17 3.21001C21.36 4.19001 22.64 6.26001 21.66 10.44Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.06 19.3901C14.44 19.8101 13.66 20.1601 12.71 20.4701L11.13 20.9901C7.15998 22.2701 5.06997 21.2001 3.77997 17.2301L2.49997 13.2801C1.21997 9.3101 2.27997 7.2101 6.24997 5.9301L7.82997 5.4101C8.23997 5.2801 8.62997 5.1701 8.99997 5.1001C8.69997 5.7101 8.45997 6.4501 8.25997 7.3001L7.27997 11.4901C6.29997 15.6701 7.58998 17.7301 11.76 18.7201L13.44 19.1201C14.02 19.2601 14.56 19.3501 15.06 19.3901Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Note21Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 22.75H8C4.98 22.75 3.25 21.02 3.25 18V8.25C3.25 5.1 4.85 3.5 8 3.5C8.41 3.5 8.75 3.84 8.75 4.25C8.75 4.65 8.91 5.03 9.19 5.31C9.47 5.59 9.85 5.75 10.25 5.75H13.75C14.58 5.75 15.25 5.08 15.25 4.25C15.25 3.84 15.59 3.5 16 3.5C19.15 3.5 20.75 5.1 20.75 8.25V18C20.75 21.02 19.02 22.75 16 22.75ZM7.34998 5.02C5.76998 5.15 4.75 5.86 4.75 8.25V18C4.75 20.22 5.78 21.25 8 21.25H16C18.22 21.25 19.25 20.22 19.25 18V8.25C19.25 5.86 18.23 5.16 16.65 5.02C16.31 6.3 15.14 7.25 13.75 7.25H10.25C9.45 7.25 8.70001 6.94 8.13 6.37C7.75 5.99 7.48998 5.53 7.34998 5.02Z"
        fill="currentColor"
      />
      <Path
        d="M13.75 7.25H10.25C9.45 7.25 8.7 6.94 8.13 6.37C7.56 5.79999 7.25 5.05 7.25 4.25C7.25 2.6 8.6 1.25 10.25 1.25H13.75C14.55 1.25 15.3 1.56 15.87 2.13C16.44 2.7 16.75 3.45 16.75 4.25C16.75 5.9 15.4 7.25 13.75 7.25ZM10.25 2.75C9.42 2.75 8.75 3.42 8.75 4.25C8.75 4.65 8.91 5.03 9.19 5.31C9.47 5.59 9.85 5.75 10.25 5.75H13.75C14.58 5.75 15.25 5.08 15.25 4.25C15.25 3.85 15.09 3.47 14.81 3.19C14.53 2.91 14.15 2.75 13.75 2.75H10.25Z"
        fill="currentColor"
      />
      <Path
        d="M12 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H12C12.41 12.25 12.75 12.59 12.75 13C12.75 13.41 12.41 13.75 12 13.75Z"
        fill="currentColor"
      />
      <Path
        d="M16 17.75H8C7.59 17.75 7.25 17.41 7.25 17C7.25 16.59 7.59 16.25 8 16.25H16C16.41 16.25 16.75 16.59 16.75 17C16.75 17.41 16.41 17.75 16 17.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Note21Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 13H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7 17H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
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
  bold: Note21Bold,
  broken: Note21Broken,
  bulk: Note21Bulk,
  linear: Note21Linear,
  outline: Note21Outline,
  twotone: Note21Twotone,
};

export const Note21Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
