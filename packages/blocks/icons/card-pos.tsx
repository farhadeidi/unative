import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const CardPosBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 21.25C22 21.66 21.66 22 21.25 22H2.75C2.34 22 2 21.66 2 21.25C2 20.84 2.34 20.5 2.75 20.5H21.25C21.66 20.5 22 20.84 22 21.25Z"
        fill="currentColor"
      />
      <Path
        d="M15.3914 4.52172L4.65141 15.2617C4.24141 15.6717 3.58141 15.6717 3.18141 15.2617H3.17141C1.78141 13.8617 1.78141 11.6017 3.17141 10.2117L10.3214 3.06172C11.7214 1.66172 13.9814 1.66172 15.3814 3.06172C15.7914 3.45172 15.7914 4.12172 15.3914 4.52172Z"
        fill="currentColor"
      />
      <Path
        d="M20.8214 8.49031L17.7714 5.44031C17.3614 5.03031 16.7014 5.03031 16.3014 5.44031L5.56141 16.1803C5.15141 16.5803 5.15141 17.2403 5.56141 17.6503L8.61141 20.7103C10.0114 22.1003 12.2714 22.1003 13.6714 20.7103L20.8114 13.5603C22.2314 12.1603 22.2314 9.89031 20.8214 8.49031ZM12.7614 17.5203L11.5514 18.7403C11.3014 18.9903 10.8914 18.9903 10.6314 18.7403C10.3814 18.4903 10.3814 18.0803 10.6314 17.8203L11.8514 16.6003C12.0914 16.3603 12.5114 16.3603 12.7614 16.6003C13.0114 16.8503 13.0114 17.2803 12.7614 17.5203ZM16.7314 13.5503L14.2914 16.0003C14.0414 16.2403 13.6314 16.2403 13.3714 16.0003C13.1214 15.7503 13.1214 15.3403 13.3714 15.0803L15.8214 12.6303C16.0614 12.3903 16.4814 12.3903 16.7314 12.6303C16.9814 12.8903 16.9814 13.3003 16.7314 13.5503Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardPosBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.92969 15.8799L15.8797 3.92993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.0996 18.2801L12.2996 17.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.7891 15.59L16.1791 13.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.4295 8.47998C22.5295 10.58 22.5195 11.64 20.3995 13.76L13.7595 20.4C11.6395 22.52 10.5795 22.53 8.47949 20.43L3.56949 15.52C1.46949 13.42 1.47949 12.36 3.59949 10.24L10.2395 3.59998C12.3595 1.47998 13.4195 1.46998 15.5195 3.56998L17.4195 5.46998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 22H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CardPosBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.25 22H2.75C2.34 22 2 21.66 2 21.25C2 20.84 2.34 20.5 2.75 20.5H21.25C21.66 20.5 22 20.84 22 21.25C22 21.66 21.66 22 21.25 22Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.5909 13.7002L13.3609 20.9302C11.9409 22.3502 9.65086 22.3502 8.24086 20.9402L3.63086 16.3302L15.9909 3.97021L20.6009 8.58021C22.0109 9.99021 22.0109 12.2802 20.5909 13.7002Z"
        fill="currentColor"
      />
      <Path
        d="M15.9906 3.97016L3.62055 16.3302L2.71055 15.4202C1.30055 14.0102 1.30055 11.7202 2.72055 10.3002L9.95055 3.07016C11.3706 1.65016 13.6606 1.65016 15.0705 3.06016L15.9906 3.97016Z"
        fill="currentColor"
      />
      <Path
        d="M12.8903 17.5999L11.5403 18.9499C11.2603 19.2299 10.8103 19.2299 10.5303 18.9499C10.2503 18.6699 10.2503 18.2199 10.5303 17.9399L11.8803 16.5899C12.1603 16.3099 12.6103 16.3099 12.8903 16.5899C13.1703 16.8699 13.1703 17.3199 12.8903 17.5999Z"
        fill="currentColor"
      />
      <Path
        d="M17.2694 13.22L14.5794 15.91C14.2994 16.19 13.8494 16.19 13.5694 15.91C13.2894 15.63 13.2894 15.18 13.5694 14.9L16.2594 12.21C16.5394 11.93 16.9894 11.93 17.2694 12.21C17.5394 12.49 17.5394 12.94 17.2694 13.22Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardPosLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.92969 15.8792L15.8797 3.9292"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.1013 18.2791L12.3013 17.0791"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.793 15.5887L16.183 13.1987"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 21.9985H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CardPosOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.92914 16.6301C3.73914 16.6301 3.54914 16.5601 3.39914 16.4101C3.10914 16.1201 3.10914 15.6401 3.39914 15.3501L15.3491 3.40012C15.6391 3.11012 16.1191 3.11012 16.4091 3.40012C16.6991 3.69012 16.6991 4.17012 16.4091 4.46012L4.45914 16.4201C4.31914 16.5601 4.11914 16.6301 3.92914 16.6301Z"
        fill="currentColor"
      />
      <Path
        d="M11.0991 19.03C10.9091 19.03 10.7191 18.96 10.5691 18.81C10.2791 18.52 10.2791 18.04 10.5691 17.75L11.7691 16.55C12.0591 16.26 12.5391 16.26 12.8291 16.55C13.1191 16.84 13.1191 17.32 12.8291 17.61L11.6291 18.81C11.4891 18.95 11.2991 19.03 11.0991 19.03Z"
        fill="currentColor"
      />
      <Path
        d="M13.7905 16.3401C13.6005 16.3401 13.4105 16.2701 13.2605 16.1201C12.9705 15.8301 12.9705 15.3501 13.2605 15.0601L15.6505 12.6701C15.9405 12.3801 16.4205 12.3801 16.7105 12.6701C17.0005 12.9601 17.0005 13.4401 16.7105 13.7301L14.3205 16.1201C14.1805 16.2601 13.9805 16.3401 13.7905 16.3401Z"
        fill="currentColor"
      />
      <Path
        d="M11.1009 22.7499C10.1209 22.7499 9.14089 22.1499 7.95089 20.9599L3.04089 16.0499C0.650891 13.6599 0.660891 12.1199 3.07089 9.70991L9.71089 3.06991C12.1209 0.659914 13.6609 0.649914 16.0509 3.03991L20.9609 7.94991C23.3509 10.3399 23.3409 11.8799 20.9309 14.2899L14.2909 20.9299C13.0809 22.1399 12.0909 22.7499 11.1009 22.7499ZM12.9009 2.74991C12.3809 2.74991 11.7209 3.17991 10.7709 4.12991L4.13089 10.7699C3.18089 11.7199 2.75089 12.3799 2.75089 12.8899C2.75089 13.4099 3.15089 14.0399 4.10089 14.9899L9.01089 19.8999C9.96089 20.8499 10.5809 21.2499 11.1009 21.2499C11.1009 21.2499 11.1009 21.2499 11.1109 21.2499C11.6309 21.2499 12.2809 20.8199 13.2309 19.8699L19.8709 13.2299C20.8209 12.2799 21.2509 11.6199 21.2509 11.1099C21.2509 10.5899 20.8509 9.95991 19.9009 9.00991L14.9909 4.09991C14.0509 3.14991 13.4209 2.74991 12.9009 2.74991Z"
        fill="currentColor"
      />
      <Path
        d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CardPosTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.92969 15.8792L15.8797 3.9292"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.1016 18.2791L12.3016 17.0791"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M13.793 15.5887L16.183 13.1987"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 21.9985H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: CardPosBold,
  broken: CardPosBroken,
  bulk: CardPosBulk,
  linear: CardPosLinear,
  outline: CardPosOutline,
  twotone: CardPosTwotone,
};

export const CardPosIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
