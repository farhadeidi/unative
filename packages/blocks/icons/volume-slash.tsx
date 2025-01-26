import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const VolumeSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0003 16.7503C17.8403 16.7503 17.6903 16.7003 17.5503 16.6003C17.2203 16.3503 17.1503 15.8803 17.4003 15.5503C18.6603 13.8703 18.9303 11.6403 18.1203 9.71032C17.9603 9.33032 18.1403 8.89032 18.5203 8.73032C18.9003 8.57032 19.3403 8.75032 19.5003 9.13032C20.5203 11.5503 20.1703 14.3603 18.6003 16.4603C18.4503 16.6503 18.2303 16.7503 18.0003 16.7503Z"
        fill="currentColor"
      />
      <Path
        d="M19.8284 19.2492C19.6684 19.2492 19.5184 19.1992 19.3784 19.0992C19.0484 18.8492 18.9784 18.3792 19.2284 18.0492C21.3684 15.1992 21.8384 11.3792 20.4584 8.08922C20.2984 7.70922 20.4784 7.26922 20.8584 7.10922C21.2384 6.94922 21.6784 7.12922 21.8384 7.50922C23.4284 11.2892 22.8884 15.6692 20.4284 18.9492C20.2884 19.1492 20.0584 19.2492 19.8284 19.2492Z"
        fill="currentColor"
      />
      <Path
        d="M14.0405 12.9581C14.6705 12.3281 15.7505 12.7781 15.7505 13.6681V16.5981C15.7505 18.3181 15.1305 19.6081 14.0205 20.2281C13.5705 20.4781 13.0705 20.5981 12.5505 20.5981C11.7505 20.5981 10.8905 20.3281 10.0105 19.7781L9.37047 19.3781C8.83047 19.0381 8.74047 18.2781 9.19047 17.8281L14.0405 12.9581Z"
        fill="currentColor"
      />
      <Path
        d="M21.77 2.22891C21.47 1.92891 20.98 1.92891 20.68 2.22891L15.73 7.17891C15.67 5.57891 15.07 4.37891 14.01 3.78891C12.89 3.16891 11.46 3.32891 10 4.23891L7.09 6.05891C6.89 6.17891 6.66 6.24891 6.43 6.24891H5.5H5C2.58 6.24891 1.25 7.57891 1.25 9.99891V13.9989C1.25 16.4189 2.58 17.7489 5 17.7489H5.16L2.22 20.6889C1.92 20.9889 1.92 21.4789 2.22 21.7789C2.38 21.9189 2.57 21.9989 2.77 21.9989C2.97 21.9989 3.16 21.9189 3.31 21.7689L21.77 3.30891C22.08 3.00891 22.08 2.52891 21.77 2.22891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 14C2 16 3 17 5 17H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 8.36979V7.40979C15 4.42979 12.93 3.28979 10.41 4.86979L7.49 6.69979C7.17 6.88979 6.8 6.99979 6.43 6.99979H5C3 6.99979 2 7.99979 2 9.99979"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4102 19.1302C12.9302 20.7102 15.0002 19.5602 15.0002 16.5902V12.9502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.81 9.41992C19.71 11.5699 19.44 14.0799 18 15.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.7798 17C20.5098 17.52 20.1998 18.02 19.8398 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.1504 7.7998C21.9804 9.7698 22.2004 11.9298 21.8104 13.9998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.6603 13.8698 18.9303 11.6398 18.1203 9.70983C17.9603 9.32983 18.1403 8.88983 18.5203 8.72983C18.9003 8.56983 19.3403 8.74983 19.5003 9.12983C20.5203 11.5498 20.1703 14.3598 18.6003 16.4598C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z"
        fill="currentColor"
      />
      <Path
        d="M19.8304 19.2502C19.6704 19.2502 19.5204 19.2002 19.3804 19.1002C19.0504 18.8502 18.9804 18.3802 19.2304 18.0502C21.3704 15.2002 21.8404 11.3802 20.4604 8.0902C20.3004 7.7102 20.4804 7.2702 20.8604 7.1102C21.2404 6.9502 21.6804 7.1302 21.8404 7.5102C23.4304 11.2902 22.8904 15.6702 20.4304 18.9502C20.2904 19.1502 20.0604 19.2502 19.8304 19.2502Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.0405 12.96C14.6705 12.33 15.7505 12.78 15.7505 13.67V16.6C15.7505 18.32 15.1305 19.61 14.0205 20.23C13.5705 20.48 13.0705 20.6 12.5505 20.6C11.7505 20.6 10.8905 20.33 10.0105 19.78L9.37047 19.38C8.83047 19.04 8.74047 18.28 9.19047 17.83L14.0405 12.96Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.02 3.78021C12.9 3.16021 11.47 3.32021 10.01 4.23021L7.09 6.06021C6.89 6.18021 6.66 6.25021 6.43 6.25021H5.5H5C2.58 6.25021 1.25 7.58021 1.25 10.0002V14.0002C1.25 16.4202 2.58 17.7502 5 17.7502H5.5H6.25L15.75 8.25021V7.41021C15.75 5.69021 15.13 4.40021 14.02 3.78021Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 8.37003V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10V14C2 16 3 17 5 17H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.41 19.13C12.93 20.71 15 19.56 15 16.59V12.95"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.81 9.41992C19.71 11.5699 19.44 14.0799 18 15.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.15 7.80005C22.62 11.29 22.18 15.37 19.83 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const VolumeSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7 17.7499H5C2.58 17.7499 1.25 16.4199 1.25 13.9999V9.99987C1.25 7.57987 2.58 6.24987 5 6.24987H6.43C6.66 6.24987 6.89 6.17987 7.09 6.05987L10.01 4.22987C11.47 3.31987 12.89 3.14987 14.01 3.76987C15.13 4.38987 15.74 5.67987 15.74 7.40987V8.36987C15.74 8.77987 15.4 9.11987 14.99 9.11987C14.58 9.11987 14.24 8.77987 14.24 8.36987V7.40987C14.24 6.26987 13.89 5.41987 13.28 5.08987C12.67 4.74987 11.77 4.89987 10.8 5.50987L7.88 7.32987C7.45 7.60987 6.94 7.74987 6.43 7.74987H5C3.42 7.74987 2.75 8.41987 2.75 9.99987V13.9999C2.75 15.5799 3.42 16.2499 5 16.2499H7C7.41 16.2499 7.75 16.5899 7.75 16.9999C7.75 17.4099 7.41 17.7499 7 17.7499Z"
        fill="currentColor"
      />
      <Path
        d="M12.5496 20.5902C11.7596 20.5902 10.8896 20.3102 10.0196 19.7602C9.6696 19.5402 9.5596 19.0802 9.7796 18.7302C9.9996 18.3802 10.4596 18.2702 10.8096 18.4902C11.7796 19.0902 12.6796 19.2502 13.2896 18.9102C13.8996 18.5702 14.2496 17.7202 14.2496 16.5902V12.9502C14.2496 12.5402 14.5896 12.2002 14.9996 12.2002C15.4096 12.2002 15.7496 12.5402 15.7496 12.9502V16.5902C15.7496 18.3102 15.1296 19.6102 14.0196 20.2302C13.5696 20.4702 13.0696 20.5902 12.5496 20.5902Z"
        fill="currentColor"
      />
      <Path
        d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.6603 13.8698 18.9303 11.6398 18.1203 9.70983C17.9603 9.32983 18.1403 8.88983 18.5203 8.72983C18.9003 8.56983 19.3403 8.74983 19.5003 9.12983C20.5203 11.5498 20.1703 14.3598 18.6003 16.4598C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z"
        fill="currentColor"
      />
      <Path
        d="M19.8304 19.2502C19.6704 19.2502 19.5204 19.2002 19.3804 19.1002C19.0504 18.8502 18.9804 18.3802 19.2304 18.0502C21.3704 15.2002 21.8404 11.3802 20.4604 8.0902C20.3004 7.7102 20.4804 7.2702 20.8604 7.1102C21.2504 6.9502 21.6804 7.1302 21.8404 7.5102C23.4304 11.2902 22.8904 15.6702 20.4304 18.9502C20.2904 19.1502 20.0604 19.2502 19.8304 19.2502Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const VolumeSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14 7.36979V6.40979C14 3.42979 11.93 2.28979 9.41 3.86979L6.49 5.69979C6.17 5.88979 5.8 5.99979 5.43 5.99979H4C2 5.99979 1 6.99979 1 8.99979V12.9998C1 14.9998 2 15.9998 4 15.9998H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M9.41016 18.1302C11.9302 19.7102 14.0002 18.5602 14.0002 15.5902V11.9502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M17.81 8.41992C18.71 10.5699 18.44 13.0799 17 14.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.1501 6.7998C21.6201 10.2898 21.1801 14.3698 18.8301 17.4998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 1L1 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: VolumeSlashBold,
  broken: VolumeSlashBroken,
  bulk: VolumeSlashBulk,
  linear: VolumeSlashLinear,
  outline: VolumeSlashOutline,
  twotone: VolumeSlashTwotone,
};

export const VolumeSlashIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
