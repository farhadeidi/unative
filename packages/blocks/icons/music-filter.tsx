import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MusicFilterBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 3.75H2C1.59 3.75 1.25 3.41 1.25 3C1.25 2.59 1.59 2.25 2 2.25H22C22.41 2.25 22.75 2.59 22.75 3C22.75 3.41 22.41 3.75 22 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M11 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H11C11.41 8.25 11.75 8.59 11.75 9C11.75 9.41 11.41 9.75 11 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M8 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H8C8.41 14.25 8.75 14.59 8.75 15C8.75 15.41 8.41 15.75 8 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M6 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H6C6.41 20.25 6.75 20.59 6.75 21C6.75 21.41 6.41 21.75 6 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M21.8602 7.67825C21.2702 7.22825 20.4602 7.13826 19.5102 7.39826L15.1602 8.57825C13.9902 8.89825 13.2702 9.84826 13.2702 11.0483V13.5983V17.2783C12.8502 17.0383 12.3602 16.8883 11.8402 16.8883C10.2302 16.8883 8.91016 18.1983 8.91016 19.8183C8.91016 21.4283 10.2202 22.7483 11.8402 22.7483C13.4602 22.7483 14.7702 21.4383 14.7702 19.8183V14.1683L21.2502 12.3983V15.8283C20.8302 15.5883 20.3402 15.4383 19.8202 15.4383C18.2102 15.4383 16.8902 16.7483 16.8902 18.3683C16.8902 19.9783 18.2002 21.2983 19.8202 21.2983C21.4402 21.2983 22.7502 19.9883 22.7502 18.3683V11.4183V9.86825C22.7502 8.85825 22.4502 8.11825 21.8602 7.67825ZM11.8402 21.2483C11.0502 21.2483 10.4102 20.6083 10.4102 19.8183C10.4102 19.0283 11.0502 18.3883 11.8402 18.3883C12.6302 18.3883 13.2702 19.0283 13.2702 19.8183C13.2702 20.6083 12.6302 21.2483 11.8402 21.2483ZM19.8202 19.7983C19.0302 19.7983 18.3902 19.1583 18.3902 18.3683C18.3902 17.5783 19.0302 16.9383 19.8202 16.9383C20.6102 16.9383 21.2502 17.5783 21.2502 18.3683C21.2502 19.1583 20.6102 19.7983 19.8202 19.7983Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicFilterBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 3H5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 3H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 21H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8402 21.9999C13.0441 21.9999 14.0202 21.0239 14.0202 19.8199C14.0202 18.6159 13.0441 17.6399 11.8402 17.6399C10.6362 17.6399 9.66016 18.6159 9.66016 19.8199C9.66016 21.0239 10.6362 21.9999 11.8402 21.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9995 18.3699V9.85993C21.9995 8.04993 20.8595 7.79993 19.7095 8.10993L15.3595 9.29993C14.5695 9.51993 14.0195 10.1399 14.0195 11.0499V12.57V13.59V19.82"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8206 20.5499C21.0246 20.5499 22.0006 19.5739 22.0006 18.3699C22.0006 17.166 21.0246 16.1899 19.8206 16.1899C18.6166 16.1899 17.6406 17.166 17.6406 18.3699C17.6406 19.5739 18.6166 20.5499 19.8206 20.5499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.3711 11.8699L22.0011 11.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.0195 13.5999L16.3695 12.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicFilterBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 3.75H2C1.59 3.75 1.25 3.41 1.25 3C1.25 2.59 1.59 2.25 2 2.25H22C22.41 2.25 22.75 2.59 22.75 3C22.75 3.41 22.41 3.75 22 3.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M11 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H11C11.41 8.25 11.75 8.59 11.75 9C11.75 9.41 11.41 9.75 11 9.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M8 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H8C8.41 14.25 8.75 14.59 8.75 15C8.75 15.41 8.41 15.75 8 15.75Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H6C6.41 20.25 6.75 20.59 6.75 21C6.75 21.41 6.41 21.75 6 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M21.8602 7.68019C21.2702 7.23019 20.4602 7.14022 19.5102 7.40022L15.1602 8.58021C13.9902 8.90021 13.2702 9.85018 13.2702 11.0502V13.6002V17.2802C12.8502 17.0402 12.3602 16.8902 11.8402 16.8902C10.2302 16.8902 8.91016 18.2002 8.91016 19.8202C8.91016 21.4302 10.2202 22.7502 11.8402 22.7502C13.4602 22.7502 14.7702 21.4402 14.7702 19.8202V14.1702L21.2502 12.4002V15.8302C20.8302 15.5902 20.3402 15.4402 19.8202 15.4402C18.2102 15.4402 16.8902 16.7502 16.8902 18.3702C16.8902 19.9802 18.2002 21.3002 19.8202 21.3002C21.4402 21.3002 22.7502 19.9902 22.7502 18.3702V11.4202V9.87019C22.7502 8.86019 22.4502 8.12019 21.8602 7.68019ZM11.8402 21.2502C11.0502 21.2502 10.4102 20.6102 10.4102 19.8202C10.4102 19.0302 11.0502 18.3902 11.8402 18.3902C12.6302 18.3902 13.2702 19.0302 13.2702 19.8202C13.2702 20.6102 12.6302 21.2502 11.8402 21.2502ZM19.8202 19.8002C19.0302 19.8002 18.3902 19.1602 18.3902 18.3702C18.3902 17.5802 19.0302 16.9402 19.8202 16.9402C20.6102 16.9402 21.2502 17.5802 21.2502 18.3702C21.2502 19.1602 20.6102 19.8002 19.8202 19.8002Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicFilterLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 3H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 21H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.84 21.9999C13.044 21.9999 14.02 21.0239 14.02 19.8199C14.02 18.6159 13.044 17.6399 11.84 17.6399C10.6361 17.6399 9.66003 18.6159 9.66003 19.8199C9.66003 21.0239 10.6361 21.9999 11.84 21.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 18.3699V9.85993C22 8.04993 20.86 7.79993 19.71 8.10993L15.36 9.29993C14.57 9.51993 14.02 10.1399 14.02 11.0499V12.57V13.59V19.82"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.82 20.5499C21.024 20.5499 22 19.5739 22 18.3699C22 17.166 21.024 16.1899 19.82 16.1899C18.616 16.1899 17.64 17.166 17.64 18.3699C17.64 19.5739 18.616 20.5499 19.82 20.5499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.02 13.5999L22 11.4199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MusicFilterOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 3.75H2C1.59 3.75 1.25 3.41 1.25 3C1.25 2.59 1.59 2.25 2 2.25H22C22.41 2.25 22.75 2.59 22.75 3C22.75 3.41 22.41 3.75 22 3.75Z"
        fill="currentColor"
      />
      <Path
        d="M11 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H11C11.41 8.25 11.75 8.59 11.75 9C11.75 9.41 11.41 9.75 11 9.75Z"
        fill="currentColor"
      />
      <Path
        d="M8 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H8C8.41 14.25 8.75 14.59 8.75 15C8.75 15.41 8.41 15.75 8 15.75Z"
        fill="currentColor"
      />
      <Path
        d="M6 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H6C6.41 20.25 6.75 20.59 6.75 21C6.75 21.41 6.41 21.75 6 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.8402 22.7501C10.2302 22.7501 8.91016 21.4401 8.91016 19.8201C8.91016 18.2101 10.2202 16.8901 11.8402 16.8901C13.4602 16.8901 14.7702 18.2001 14.7702 19.8201C14.7702 21.4401 13.4602 22.7501 11.8402 22.7501ZM11.8402 18.4001C11.0502 18.4001 10.4102 19.0401 10.4102 19.8301C10.4102 20.6201 11.0502 21.2601 11.8402 21.2601C12.6302 21.2601 13.2702 20.6201 13.2702 19.8301C13.2702 19.0401 12.6302 18.4001 11.8402 18.4001Z"
        fill="currentColor"
      />
      <Path
        d="M14.0195 20.5703C13.6095 20.5703 13.2695 20.2303 13.2695 19.8203V11.0503C13.2695 9.84031 13.9895 8.89034 15.1595 8.58034L19.5095 7.39034C20.4595 7.13034 21.2795 7.23032 21.8595 7.68032C22.4395 8.13032 22.7395 8.86032 22.7395 9.87032V18.3803C22.7395 18.7903 22.3995 19.1303 21.9895 19.1303C21.5795 19.1303 21.2395 18.7903 21.2395 18.3803V9.87032C21.2395 9.37032 21.1395 9.02033 20.9495 8.88033C20.7595 8.73033 20.3695 8.7203 19.8995 8.8503L15.5495 10.0403C15.2595 10.1203 14.7695 10.3603 14.7695 11.0703V19.8404C14.7695 20.2403 14.4295 20.5703 14.0195 20.5703Z"
        fill="currentColor"
      />
      <Path
        d="M19.8206 21.2999C18.2106 21.2999 16.8906 19.9899 16.8906 18.3699C16.8906 16.7599 18.2006 15.4399 19.8206 15.4399C21.4406 15.4399 22.7506 16.7499 22.7506 18.3699C22.7506 19.9899 21.4406 21.2999 19.8206 21.2999ZM19.8206 16.95C19.0306 16.95 18.3906 17.5899 18.3906 18.3799C18.3906 19.1699 19.0306 19.8099 19.8206 19.8099C20.6106 19.8099 21.2506 19.1699 21.2506 18.3799C21.2506 17.5899 20.6106 16.95 19.8206 16.95Z"
        fill="currentColor"
      />
      <Path
        d="M14.0202 14.35C13.6902 14.35 13.3902 14.13 13.3002 13.8C13.1902 13.4 13.4302 12.9901 13.8302 12.8801L21.8102 10.7001C22.2102 10.5901 22.6202 10.83 22.7302 11.23C22.8402 11.63 22.6002 12.0401 22.2002 12.1501L14.2202 14.3301C14.1502 14.3401 14.0802 14.35 14.0202 14.35Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MusicFilterTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 3H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15H8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 21H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M11.8402 22.0001C13.0441 22.0001 14.0202 21.0241 14.0202 19.8201C14.0202 18.6161 13.0441 17.6401 11.8402 17.6401C10.6362 17.6401 9.66016 18.6161 9.66016 19.8201C9.66016 21.0241 10.6362 22.0001 11.8402 22.0001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.9995 18.3699V9.85993C21.9995 8.04993 20.8595 7.79993 19.7095 8.10993L15.3595 9.29993C14.5695 9.51993 14.0195 10.1399 14.0195 11.0499V12.57V13.59V19.82"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.8206 20.5499C21.0246 20.5499 22.0006 19.5739 22.0006 18.3699C22.0006 17.166 21.0246 16.1899 19.8206 16.1899C18.6166 16.1899 17.6406 17.166 17.6406 18.3699C17.6406 19.5739 18.6166 20.5499 19.8206 20.5499Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.0195 13.5999L21.9995 11.4199"
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
  bold: MusicFilterBold,
  broken: MusicFilterBroken,
  bulk: MusicFilterBulk,
  linear: MusicFilterLinear,
  outline: MusicFilterOutline,
  twotone: MusicFilterTwotone,
};

export const MusicFilterIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
