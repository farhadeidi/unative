import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const BagCross1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.24 5.57859H18.84L15.46 2.19859C15.19 1.92859 14.75 1.92859 14.47 2.19859C14.2 2.46859 14.2 2.90859 14.47 3.18859L16.86 5.57859H7.14L9.53 3.18859C9.8 2.91859 9.8 2.47859 9.53 2.19859C9.26 1.92859 8.82 1.92859 8.54 2.19859L5.17 5.57859H4.77C3.87 5.57859 2 5.57859 2 8.13859C2 9.10859 2.2 9.74859 2.62 10.1686C2.86 10.4186 3.15 10.5486 3.46 10.6186C3.75 10.6886 4.06 10.6986 4.36 10.6986H19.64C19.95 10.6986 20.24 10.6786 20.52 10.6186C21.36 10.4186 22 9.81859 22 8.13859C22 5.57859 20.13 5.57859 19.24 5.57859Z"
        fill="currentColor"
      />
      <Path
        d="M19.0897 12H4.90971C4.28971 12 3.81971 12.55 3.91971 13.16L4.75971 18.3C5.03971 20.02 5.78971 22 9.11971 22H14.7297C18.0997 22 18.6997 20.31 19.0597 18.42L20.0697 13.19C20.1897 12.57 19.7197 12 19.0897 12ZM13.9197 18.89C13.7797 19.04 13.5897 19.11 13.3897 19.11C13.1997 19.11 13.0097 19.04 12.8597 18.89L12.0197 18.04L11.1397 18.92C10.9897 19.07 10.7997 19.14 10.6097 19.14C10.4097 19.14 10.2197 19.07 10.0797 18.92C9.77971 18.63 9.77971 18.16 10.0797 17.86L10.9597 16.98L10.1097 16.14C9.80971 15.84 9.80971 15.37 10.1097 15.08C10.3997 14.78 10.8697 14.78 11.1697 15.08L12.0197 15.92L12.8297 15.11C13.1297 14.81 13.5997 14.81 13.8897 15.11C14.1897 15.4 14.1897 15.87 13.8897 16.17L13.0797 16.98L13.9197 17.83C14.2197 18.13 14.2197 18.6 13.9197 18.89Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagCross1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.0692 16.11L10.9492 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.0497 14.02L10.9297 16.14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.8108 16.56L4.0408 18.43C4.2608 20.39 4.9808 22 9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BagCross1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1894 8.8599C15.7994 8.8599 15.4894 8.5499 15.4894 8.1599V6.8799C15.4894 5.8999 15.0694 4.9599 14.3494 4.2999C13.6094 3.6299 12.6594 3.3199 11.6594 3.4099C9.97937 3.5699 8.50938 5.2799 8.50938 7.0599V7.9599C8.50938 8.3499 8.19937 8.6599 7.80937 8.6599C7.41937 8.6599 7.10938 8.3499 7.10938 7.9599V7.0599C7.10938 4.5599 9.12938 2.2499 11.5194 2.0199C12.9094 1.8899 14.2494 2.3299 15.2794 3.2699C16.2994 4.1899 16.8794 5.5099 16.8794 6.8799V8.1599C16.8794 8.5499 16.5694 8.8599 16.1894 8.8599Z"
        fill="currentColor"
      />
      <Path
        d="M19.9597 8.96008C19.1197 8.03008 17.7397 7.58008 15.7197 7.58008H8.27975C6.25975 7.58008 4.87975 8.03008 4.03975 8.96008C3.06975 10.0401 3.09975 11.4801 3.20975 12.4801L3.90975 18.0501C4.11975 20.0001 4.90975 22.0001 9.20975 22.0001H14.7897C19.0897 22.0001 19.8797 20.0001 20.0897 18.0601L20.7897 12.4701C20.8997 11.4801 20.9297 10.0401 19.9597 8.96008ZM11.9997 18.5801C9.90975 18.5801 8.20975 16.8801 8.20975 14.7901C8.20975 12.7001 9.90975 11.0001 11.9997 11.0001C14.0897 11.0001 15.7897 12.7001 15.7897 14.7901C15.7897 16.8801 14.0897 18.5801 11.9997 18.5801Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M12.0009 18.58C14.0941 18.58 15.7909 16.8832 15.7909 14.79C15.7909 12.6968 14.0941 11 12.0009 11C9.90778 11 8.21094 12.6968 8.21094 14.79C8.21094 16.8832 9.90778 18.58 12.0009 18.58Z"
        fill="currentColor"
      />
      <Path
        d="M13.5991 15.3099L13.0691 14.7799L13.5691 14.2799C13.8591 13.9899 13.8591 13.5099 13.5691 13.2199C13.2791 12.9299 12.7991 12.9299 12.5091 13.2199L12.0091 13.7199L11.4791 13.1899C11.1891 12.8999 10.7091 12.8999 10.4191 13.1899C10.1291 13.4799 10.1291 13.9599 10.4191 14.2499L10.9491 14.7799L10.3991 15.3299C10.1091 15.6199 10.1091 16.0999 10.3991 16.3899C10.5491 16.5399 10.7391 16.6099 10.9291 16.6099C11.1191 16.6099 11.3091 16.5399 11.4591 16.3899L12.0091 15.8399L12.5391 16.3699C12.6891 16.5199 12.8791 16.5899 13.0691 16.5899C13.2591 16.5899 13.4491 16.5199 13.5991 16.3699C13.8891 16.0799 13.8891 15.6099 13.5991 15.3099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagCross1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.07 16.11L10.95 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.05 14.02L10.93 16.14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H8C3.73 8 3.03 9.99 3.3 12.43L4.05 18.43C4.26 20.39 4.98 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BagCross1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.3903 18.11C13.2003 18.11 13.0103 18.04 12.8603 17.89L10.1003 15.13C9.81031 14.84 9.81031 14.36 10.1003 14.07C10.3903 13.78 10.8703 13.78 11.1603 14.07L13.9203 16.83C14.2103 17.12 14.2103 17.6 13.9203 17.89C13.7803 18.04 13.5903 18.11 13.3903 18.11Z"
        fill="currentColor"
      />
      <Path
        d="M10.6108 18.1401C10.4208 18.1401 10.2308 18.0701 10.0808 17.9201C9.79078 17.6301 9.79078 17.1501 10.0808 16.8601L12.8408 14.1001C13.1308 13.8101 13.6108 13.8101 13.9008 14.1001C14.1908 14.3901 14.1908 14.8701 13.9008 15.1601L11.1408 17.9201C10.9908 18.0701 10.8008 18.1401 10.6108 18.1401Z"
        fill="currentColor"
      />
      <Path
        d="M5.19086 6.37994C5.00086 6.37994 4.80086 6.29994 4.66086 6.15994C4.37086 5.86994 4.37086 5.38994 4.66086 5.09994L8.29086 1.46994C8.58086 1.17994 9.06086 1.17994 9.35086 1.46994C9.64086 1.75994 9.64086 2.23994 9.35086 2.52994L5.72086 6.15994C5.57086 6.29994 5.38086 6.37994 5.19086 6.37994Z"
        fill="currentColor"
      />
      <Path
        d="M18.8091 6.37994C18.6191 6.37994 18.4291 6.30994 18.2791 6.15994L14.6491 2.52994C14.3591 2.23994 14.3591 1.75994 14.6491 1.46994C14.9391 1.17994 15.4191 1.17994 15.7091 1.46994L19.3391 5.09994C19.6291 5.38994 19.6291 5.86994 19.3391 6.15994C19.1991 6.29994 18.9991 6.37994 18.8091 6.37994Z"
        fill="currentColor"
      />
      <Path
        d="M20.21 10.6001C20.14 10.6001 20.07 10.6001 20 10.6001H19.77H4C3.3 10.6101 2.5 10.6101 1.92 10.0301C1.46 9.5801 1.25 8.8801 1.25 7.8501C1.25 5.1001 3.26 5.1001 4.22 5.1001H19.78C20.74 5.1001 22.75 5.1001 22.75 7.8501C22.75 8.8901 22.54 9.5801 22.08 10.0301C21.56 10.5501 20.86 10.6001 20.21 10.6001ZM4.22 9.1001H20.01C20.46 9.1101 20.88 9.1101 21.02 8.9701C21.09 8.9001 21.24 8.6601 21.24 7.8501C21.24 6.7201 20.96 6.6001 19.77 6.6001H4.22C3.03 6.6001 2.75 6.7201 2.75 7.8501C2.75 8.6601 2.91 8.9001 2.97 8.9701C3.11 9.1001 3.54 9.1001 3.98 9.1001H4.22Z"
        fill="currentColor"
      />
      <Path
        d="M14.8907 22.75H8.86073C5.28073 22.75 4.48073 20.62 4.17073 18.77L2.76073 10.12C2.69073 9.71 2.97073 9.33 3.38073 9.26C3.79073 9.19 4.17073 9.47 4.24073 9.88L5.65073 18.52C5.94073 20.29 6.54073 21.25 8.86073 21.25H14.8907C17.4607 21.25 17.7507 20.35 18.0807 18.61L19.7607 9.86C19.8407 9.45 20.2307 9.18 20.6407 9.27C21.0507 9.35 21.3107 9.74 21.2307 10.15L19.5507 18.9C19.1607 20.93 18.5107 22.75 14.8907 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagCross1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M13.0692 16.11L10.9492 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.0497 14.0195L10.9297 16.1395"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
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
  bold: BagCross1Bold,
  broken: BagCross1Broken,
  bulk: BagCross1Bulk,
  linear: BagCross1Linear,
  outline: BagCross1Outline,
  twotone: BagCross1Twotone,
};

export const BagCross1Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
