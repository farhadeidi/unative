import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const DislikeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.609 5.49953V15.6595C15.609 16.0595 15.489 16.4495 15.269 16.7795L12.539 20.8395C12.109 21.4895 11.039 21.9495 10.129 21.6095C9.14904 21.2795 8.49904 20.1795 8.70904 19.1995L9.22904 15.9295C9.26904 15.6295 9.18904 15.3595 9.01904 15.1495C8.84904 14.9595 8.59904 14.8395 8.32904 14.8395H4.21904C3.42904 14.8395 2.74904 14.5195 2.34904 13.9595C1.96904 13.4195 1.89904 12.7195 2.14904 12.0095L4.60904 4.51953C4.91904 3.27953 6.26904 2.26953 7.60904 2.26953H11.509C12.179 2.26953 13.119 2.49953 13.549 2.92953L14.829 3.91953C15.319 4.29953 15.609 4.87953 15.609 5.49953Z"
        fill="currentColor"
      />
      <Path
        d="M18.7894 17.6084H19.8194C21.3694 17.6084 21.9994 17.0084 21.9994 15.5284V5.47844C21.9994 3.99844 21.3694 3.39844 19.8194 3.39844H18.7894C17.2394 3.39844 16.6094 3.99844 16.6094 5.47844V15.5384C16.6094 17.0084 17.2394 17.6084 18.7894 17.6084Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DislikeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.51973 12.05C2.01973 13.45 2.91973 14.65 4.41973 14.65H8.41973C9.01973 14.65 9.51973 15.15 9.41973 15.85L8.91973 19.05C8.71973 19.95 9.31973 20.95 10.2197 21.25C11.0197 21.55 12.0197 21.15 12.4197 20.55L16.5197 14.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5193 5.65002L13.4193 3.25002C13.0193 2.85002 12.1193 2.65002 11.5193 2.65002H7.7193C6.5193 2.65002 5.2193 3.55002 4.9193 4.75002L3.7793 8.22002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.6191 5.65V15.45C21.6191 16.85 21.0191 17.35 19.6191 17.35H18.6191C17.2191 17.35 16.6191 16.85 16.6191 15.45V5.65C16.6191 4.25 17.2191 3.75 18.6191 3.75H19.6191C21.0191 3.75 21.6191 4.25 21.6191 5.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DislikeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.34904 13.96C2.73904 14.52 3.42904 14.84 4.21904 14.84H8.31904C8.58904 14.84 8.83904 14.95 9.00904 15.15C9.18904 15.35 9.25904 15.63 9.21904 15.92L8.70904 19.2C8.48904 20.18 9.13904 21.28 10.119 21.61C11.029 21.95 12.099 21.49 12.529 20.84L16.739 14.57L16.859 14.37V5.53003L16.709 5.38003L13.539 2.93003C13.119 2.51003 12.169 2.28003 11.499 2.28003H7.59904C6.25904 2.28003 4.90904 3.29003 4.60904 4.52003L2.14904 12.01C1.89904 12.72 1.96904 13.42 2.34904 13.96Z"
        fill="currentColor"
      />
      <Path
        d="M18.7894 17.6099H19.8194C21.3694 17.6099 21.9994 17.0099 21.9994 15.5299V5.4799C21.9994 3.9999 21.3694 3.3999 19.8194 3.3999H18.7894C17.2394 3.3999 16.6094 3.9999 16.6094 5.4799V15.5399C16.6094 17.0099 17.2394 17.6099 18.7894 17.6099Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DislikeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.52 5.65002L13.42 3.25002C13.02 2.85002 12.12 2.65002 11.52 2.65002H7.71998C6.51998 2.65002 5.21998 3.55002 4.91998 4.75002L2.51998 12.05C2.01998 13.45 2.91998 14.65 4.41998 14.65H8.41998C9.01998 14.65 9.51998 15.15 9.41998 15.85L8.91998 19.05C8.71998 19.95 9.31998 20.95 10.22 21.25C11.02 21.55 12.02 21.15 12.42 20.55L16.52 14.45"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M21.62 5.65V15.45C21.62 16.85 21.02 17.35 19.62 17.35H18.62C17.22 17.35 16.62 16.85 16.62 15.45V5.65C16.62 4.25 17.22 3.75 18.62 3.75H19.62C21.02 3.75 21.62 4.25 21.62 5.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const DislikeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7996 22.0999C10.5096 22.0999 10.2196 22.0499 9.94955 21.9499C8.69955 21.5399 7.89955 20.1599 8.17955 18.8799L8.66955 15.7299C8.67955 15.6599 8.67955 15.5599 8.60955 15.4799C8.55955 15.4299 8.48955 15.3999 8.40955 15.3999H4.40955C3.42955 15.3999 2.57955 14.9899 2.07955 14.2799C1.58955 13.5899 1.48955 12.6799 1.80955 11.7999L4.19955 4.5199C4.56955 3.0699 6.11955 1.8999 7.71955 1.8999H11.5196C12.0796 1.8999 13.2996 2.0699 13.9496 2.7199L16.9796 5.0599L16.0596 6.2499L12.9596 3.8499C12.7096 3.5999 12.0796 3.3999 11.5196 3.3999H7.71955C6.81955 3.3999 5.84955 4.1199 5.64955 4.9299L3.22955 12.2799C3.06955 12.7199 3.09955 13.1199 3.30955 13.4099C3.52955 13.7199 3.92955 13.8999 4.41955 13.8999H8.41955C8.93955 13.8999 9.41955 14.1199 9.74955 14.4999C10.0896 14.8899 10.2396 15.4099 10.1596 15.9499L9.65955 19.1599C9.53955 19.7199 9.91955 20.3499 10.4596 20.5299C10.9396 20.7099 11.5796 20.4499 11.7996 20.1299L15.8996 14.0299L17.1396 14.8699L13.0396 20.9699C12.5696 21.6699 11.6796 22.0999 10.7996 22.0999Z"
        fill="currentColor"
      />
      <Path
        d="M19.6191 18.1H18.6191C16.7691 18.1 15.8691 17.23 15.8691 15.45V5.65C15.8691 3.87 16.7691 3 18.6191 3H19.6191C21.4691 3 22.3691 3.87 22.3691 5.65V15.45C22.3691 17.23 21.4691 18.1 19.6191 18.1ZM18.6191 4.5C17.5291 4.5 17.3691 4.76 17.3691 5.65V15.45C17.3691 16.34 17.5291 16.6 18.6191 16.6H19.6191C20.7091 16.6 20.8691 16.34 20.8691 15.45V5.65C20.8691 4.76 20.7091 4.5 19.6191 4.5H18.6191Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const DislikeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.5197 5.6499L13.4197 3.2499C13.0197 2.8499 12.1197 2.6499 11.5197 2.6499H7.71973C6.51973 2.6499 5.21973 3.5499 4.91973 4.7499L2.51973 12.0499C2.01973 13.4499 2.91973 14.6499 4.41973 14.6499H8.41973C9.01973 14.6499 9.51973 15.1499 9.41973 15.8499L8.91973 19.0499C8.71973 19.9499 9.31973 20.9499 10.2197 21.2499C11.0197 21.5499 12.0197 21.1499 12.4197 20.5499L16.5197 14.4499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M21.6191 5.65V15.45C21.6191 16.85 21.0191 17.35 19.6191 17.35H18.6191C17.2191 17.35 16.6191 16.85 16.6191 15.45V5.65C16.6191 4.25 17.2191 3.75 18.6191 3.75H19.6191C21.0191 3.75 21.6191 4.25 21.6191 5.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: DislikeBold,
  broken: DislikeBroken,
  bulk: DislikeBulk,
  linear: DislikeLinear,
  outline: DislikeOutline,
  twotone: DislikeTwotone,
};

export const DislikeIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
