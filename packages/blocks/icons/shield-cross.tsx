import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ShieldCrossBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5408 4.11984L13.0408 2.05984C12.4708 1.84984 11.5408 1.84984 10.9708 2.05984L5.47078 4.11984C4.41078 4.51984 3.55078 5.75984 3.55078 6.88984V14.9898C3.55078 15.7998 4.08078 16.8698 4.73078 17.3498L10.2308 21.4598C11.2008 22.1898 12.7908 22.1898 13.7608 21.4598L19.2608 17.3498C19.9108 16.8598 20.4408 15.7998 20.4408 14.9898V6.88984C20.4508 5.75984 19.5908 4.51984 18.5408 4.11984ZM14.6808 13.9698C14.5308 14.1198 14.3408 14.1898 14.1508 14.1898C13.9608 14.1898 13.7708 14.1198 13.6208 13.9698L12.0308 12.3798L10.3908 14.0198C10.2408 14.1698 10.0508 14.2398 9.86078 14.2398C9.67078 14.2398 9.48078 14.1698 9.33078 14.0198C9.04078 13.7298 9.04078 13.2498 9.33078 12.9598L10.9708 11.3198L9.37078 9.71984C9.08078 9.42984 9.08078 8.94984 9.37078 8.65984C9.66078 8.36984 10.1408 8.36984 10.4308 8.65984L12.0208 10.2498L13.5708 8.69984C13.8608 8.40984 14.3408 8.40984 14.6308 8.69984C14.9208 8.98984 14.9208 9.46984 14.6308 9.75984L13.0808 11.3098L14.6708 12.8998C14.9708 13.1998 14.9708 13.6698 14.6808 13.9698Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldCrossBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.1504 13.4399L9.90039 9.18994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.0996 9.23999L9.84961 13.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5902 7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V11.0301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldCrossBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9608 2.06008L5.46078 4.12008C4.41078 4.52008 3.55078 5.76008 3.55078 6.89008V14.9901C3.55078 15.8001 4.08078 16.8701 4.73078 17.3501L10.2308 21.4601C11.2008 22.1901 12.7908 22.1901 13.7608 21.4601L19.2608 17.3501C19.9108 16.8601 20.4408 15.8001 20.4408 14.9901V6.89008C20.4408 5.77008 19.5808 4.52008 18.5308 4.13008L13.0308 2.07008C12.4708 1.85008 11.5308 1.85008 10.9608 2.06008Z"
        fill="currentColor"
      />
      <Path
        d="M14.6808 12.9099L13.0908 11.3199L14.6408 9.76989C14.9308 9.47989 14.9308 8.99989 14.6408 8.70989C14.3508 8.41989 13.8708 8.41989 13.5808 8.70989L12.0308 10.2599L10.4408 8.66989C10.1508 8.37989 9.67078 8.37989 9.38078 8.66989C9.09078 8.95989 9.09078 9.43989 9.38078 9.72989L10.9708 11.3199L9.33078 12.9599C9.04078 13.2499 9.04078 13.7299 9.33078 14.0199C9.48078 14.1699 9.67078 14.2399 9.86078 14.2399C10.0508 14.2399 10.2408 14.1699 10.3908 14.0199L12.0308 12.3799L13.6208 13.9699C13.7708 14.1199 13.9608 14.1899 14.1508 14.1899C14.3408 14.1899 14.5308 14.1199 14.6808 13.9699C14.9708 13.6699 14.9708 13.1999 14.6808 12.9099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldCrossLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.49 2.23006L5.49997 4.11006C4.34997 4.54006 3.40997 5.90006 3.40997 7.12006V14.5501C3.40997 15.7301 4.18997 17.2801 5.13997 17.9901L9.43997 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.15 13.4399L9.90002 9.18994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1 9.23999L9.84998 13.49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ShieldCrossOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0004 22.7599C10.9104 22.7599 9.83039 22.4399 8.98039 21.8099L4.68039 18.5999C3.54039 17.7499 2.65039 15.9699 2.65039 14.5599V7.11994C2.65039 5.57994 3.78039 3.93994 5.23039 3.39994L10.2204 1.52994C11.2104 1.15994 12.7704 1.15994 13.7604 1.52994L18.7504 3.39994C20.2004 3.93994 21.3304 5.57994 21.3304 7.11994V14.5499C21.3304 15.9699 20.4404 17.7399 19.3004 18.5899L15.0004 21.7999C14.1704 22.4399 13.0904 22.7599 12.0004 22.7599ZM10.7504 2.93994L5.76039 4.80994C4.91039 5.12994 4.16039 6.20994 4.16039 7.12994V14.5599C4.16039 15.5099 4.83039 16.8399 5.58039 17.3999L9.88039 20.6099C11.0304 21.4699 12.9704 21.4699 14.1304 20.6099L18.4304 17.3999C19.1904 16.8299 19.8504 15.5099 19.8504 14.5599V7.11994C19.8504 6.20994 19.1004 5.12994 18.2504 4.79994L13.2604 2.92994C12.5804 2.68994 11.4204 2.68994 10.7504 2.93994Z"
        fill="currentColor"
      />
      <Path
        d="M14.1498 14.1899C13.9598 14.1899 13.7698 14.1199 13.6198 13.9699L9.36984 9.71988C9.07984 9.42988 9.07984 8.94988 9.36984 8.65988C9.65984 8.36988 10.1398 8.36988 10.4298 8.65988L14.6798 12.9099C14.9698 13.1999 14.9698 13.6799 14.6798 13.9699C14.5298 14.1099 14.3398 14.1899 14.1498 14.1899Z"
        fill="currentColor"
      />
      <Path
        d="M9.84906 14.2299C9.65906 14.2299 9.46906 14.1599 9.31906 14.0099C9.02906 13.7199 9.02906 13.2399 9.31906 12.9499L13.5691 8.69992C13.8591 8.40992 14.3391 8.40992 14.6291 8.69992C14.9191 8.98992 14.9191 9.46992 14.6291 9.75992L10.3791 14.0099C10.2391 14.1599 10.0391 14.2299 9.84906 14.2299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ShieldCrossTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M14.1504 13.4404L9.90039 9.19043"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.0996 9.24023L9.84961 13.4902"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ShieldCrossBold,
  broken: ShieldCrossBroken,
  bulk: ShieldCrossBulk,
  linear: ShieldCrossLinear,
  outline: ShieldCrossOutline,
  twotone: ShieldCrossTwotone,
};

export const ShieldCrossIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
