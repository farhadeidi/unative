import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const FilterTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.9209 10.12C17.5909 10.04 17.2409 10 16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.1909 17.82 13.7009 18.35 14.3209 18.73C15.0609 19.22 15.9409 19.5 16.8809 19.5C18.6209 19.5 20.1309 18.57 20.9509 17.2C21.3909 16.48 21.6309 15.64 21.6309 14.75C21.6309 12.49 20.0509 10.59 17.9209 10.12ZM19.2509 14.13L16.7109 16.47C16.5709 16.6 16.3809 16.67 16.2009 16.67C16.0109 16.67 15.8209 16.6 15.6709 16.45L14.5009 15.28C14.2109 14.99 14.2109 14.51 14.5009 14.22C14.7909 13.93 15.2709 13.93 15.5609 14.22L16.2209 14.88L18.2309 13.03C18.5409 12.75 19.0109 12.77 19.2909 13.07C19.5709 13.38 19.5509 13.85 19.2509 14.13Z"
        fill="currentColor"
      />
      <Path
        d="M20.5799 4.02V6.24C20.5799 7.05 20.0799 8.06 19.5799 8.57L19.3999 8.73C19.2599 8.86 19.0499 8.89 18.8699 8.83C18.6699 8.76 18.4699 8.71 18.2699 8.66C17.8299 8.55 17.3599 8.5 16.8799 8.5C13.4299 8.5 10.6299 11.3 10.6299 14.75C10.6299 15.89 10.9399 17.01 11.5299 17.97C12.0299 18.81 12.7299 19.51 13.4899 19.98C13.7199 20.13 13.8099 20.45 13.6099 20.63C13.5399 20.69 13.4699 20.74 13.3999 20.79L11.9999 21.7C10.6999 22.51 8.90992 21.6 8.90992 19.98V14.63C8.90992 13.92 8.50992 13.01 8.10992 12.51L4.31992 8.47C3.81992 7.96 3.41992 7.05 3.41992 6.45V4.12C3.41992 2.91 4.31992 2 5.40992 2H18.5899C19.6799 2 20.5799 2.91 20.5799 4.02Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6309 14.75C21.6309 15.64 21.3909 16.48 20.9509 17.2C20.1309 18.57 18.6209 19.5 16.8809 19.5C15.9409 19.5 15.0609 19.22 14.3209 18.73C13.7009 18.35 13.1909 17.82 12.8209 17.2C12.3809 16.48 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C17.2409 10 17.5908 10.04 17.9208 10.12C20.0508 10.59 21.6309 12.49 21.6309 14.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0293 14.7501L16.1993 15.9201L18.7292 13.5801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.33057 2H18.6705C19.7805 2 20.6906 2.90999 20.6906 4.01999V6.23999C20.6906 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2406 10 16.8806 10C14.2606 10 12.1306 12.13 12.1306 14.75C12.1306 15.64 12.3806 16.48 12.8206 17.2C13.1906 17.82 13.7006 18.35 14.3206 18.73V19.07C14.3206 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87054 21.6 8.87054 19.98V14.63C8.87054 13.92 8.46055 13.01 8.06055 12.51L4.22052 8.47C3.72052 7.96 3.31055 7.05001 3.31055 6.45001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.9208 10.12C17.5908 10.04 17.2409 10 16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.1909 17.82 13.7009 18.35 14.3209 18.73C15.0609 19.22 15.9409 19.5 16.8809 19.5C18.6209 19.5 20.1309 18.57 20.9509 17.2C21.3909 16.48 21.6309 15.64 21.6309 14.75C21.6309 12.49 20.0508 10.59 17.9208 10.12ZM19.2509 14.13L16.7109 16.47C16.5709 16.6 16.3809 16.67 16.2009 16.67C16.0109 16.67 15.8208 16.6 15.6708 16.45L14.5009 15.28C14.2109 14.99 14.2109 14.51 14.5009 14.22C14.7909 13.93 15.2709 13.93 15.5609 14.22L16.2208 14.88L18.2308 13.03C18.5408 12.75 19.0108 12.77 19.2908 13.07C19.5708 13.38 19.5509 13.85 19.2509 14.13Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.41016 2H18.5802C19.6802 2 20.5802 2.90999 20.5802 4.01999V6.23999C20.5802 7.04999 20.0802 8.06 19.5802 8.56L15.2902 12.4C14.6902 12.91 14.2902 13.92 14.2902 14.72V19.06C14.2902 19.67 13.8902 20.47 13.3902 20.78L11.9902 21.69C10.6902 22.5 8.90021 21.59 8.90021 19.97V14.62C8.90021 13.91 8.50016 13 8.10016 12.5L4.31018 8.45999C3.81018 7.94999 3.41016 7.05 3.41016 6.44V4.12C3.42016 2.91 4.32016 2 5.41016 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.63 14.75C21.63 15.64 21.39 16.48 20.95 17.2C20.13 18.57 18.62 19.5 16.88 19.5C15.94 19.5 15.06 19.22 14.32 18.73C13.7 18.35 13.19 17.82 12.82 17.2C12.38 16.48 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C17.24 10 17.59 10.04 17.92 10.12C20.05 10.59 21.63 12.49 21.63 14.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.03 14.75L16.2 15.92L18.73 13.58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.6901 4.01999V6.23999C20.6901 7.04999 20.1801 8.06001 19.6801 8.57001L17.92 10.12C17.59 10.04 17.2401 10 16.8801 10C14.2601 10 12.1301 12.13 12.1301 14.75C12.1301 15.64 12.3801 16.48 12.8201 17.2C13.1901 17.82 13.7001 18.35 14.3201 18.73V19.07C14.3201 19.68 13.92 20.49 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.46006 13.01 8.06006 12.51L4.22003 8.47C3.72003 7.96 3.31006 7.05001 3.31006 6.45001V4.12C3.31006 2.91 4.22008 2 5.33008 2H18.67C19.78 2 20.6901 2.90999 20.6901 4.01999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8789 20.25C15.8189 20.25 14.7889 19.94 13.9089 19.35C13.2189 18.93 12.6189 18.31 12.1789 17.58C11.6589 16.73 11.3789 15.75 11.3789 14.75C11.3789 11.72 13.8489 9.25 16.8789 9.25C17.2989 9.25 17.7089 9.30001 18.0989 9.39001C20.5789 9.94001 22.3789 12.19 22.3789 14.75C22.3789 15.76 22.1089 16.74 21.5889 17.59C20.6089 19.23 18.7989 20.25 16.8789 20.25ZM16.8789 10.75C14.6689 10.75 12.8789 12.54 12.8789 14.75C12.8789 15.48 13.0789 16.19 13.4589 16.81C13.7789 17.34 14.2089 17.78 14.7089 18.09C15.3689 18.53 16.1089 18.75 16.8789 18.75C18.2789 18.75 19.5889 18.01 20.3089 16.81C20.6889 16.19 20.8789 15.48 20.8789 14.75C20.8789 12.89 19.5689 11.25 17.7589 10.85C17.4689 10.78 17.1789 10.75 16.8789 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.1988 16.6701C16.0088 16.6701 15.8187 16.6001 15.6687 16.4501L14.4988 15.2801C14.2088 14.9901 14.2088 14.5101 14.4988 14.2201C14.7887 13.9301 15.2687 13.9301 15.5587 14.2201L16.2187 14.8801L18.2287 13.0301C18.5387 12.7501 19.0087 12.7701 19.2887 13.0701C19.5687 13.3701 19.5488 13.8501 19.2488 14.1301L16.7088 16.4701C16.5688 16.6001 16.3788 16.6701 16.1988 16.6701Z"
        fill="currentColor"
      />
      <Path
        d="M10.9308 22.75C10.4508 22.75 9.97077 22.63 9.54077 22.39C8.65077 21.89 8.12079 20.99 8.12079 19.98V14.63C8.12079 14.12 7.79076 13.37 7.47076 12.98L3.67078 8.98999C3.04078 8.33999 2.55078 7.25001 2.55078 6.45001V4.12C2.55078 2.51 3.7708 1.25 5.3208 1.25H18.6608C20.1908 1.25 21.4308 2.48999 21.4308 4.01999V6.23999C21.4308 7.28999 20.8108 8.47 20.2008 9.09L18.4008 10.68C18.2208 10.84 17.9708 10.9 17.7308 10.85C17.4608 10.78 17.1708 10.75 16.8708 10.75C14.6608 10.75 12.8708 12.54 12.8708 14.75C12.8708 15.48 13.0708 16.19 13.4508 16.81C13.7708 17.34 14.2008 17.78 14.7008 18.09C14.9208 18.23 15.0608 18.47 15.0608 18.73V19.07C15.0608 19.86 14.5808 20.97 13.7808 21.44L12.4008 22.33C11.9608 22.61 11.4408 22.75 10.9308 22.75ZM5.33081 2.75C4.62081 2.75 4.06079 3.35 4.06079 4.12V6.45001C4.06079 6.81001 4.3608 7.54 4.7608 7.94L8.61078 11.99C9.12078 12.62 9.6308 13.68 9.6308 14.63V19.98C9.6308 20.64 10.0908 20.97 10.2808 21.08C10.7108 21.32 11.2208 21.31 11.6108 21.07L13.0108 20.17C13.2808 20.01 13.5508 19.5 13.5708 19.14C13.0208 18.73 12.5408 18.2 12.1808 17.6C11.6608 16.75 11.3808 15.77 11.3808 14.77C11.3808 11.74 13.8508 9.26999 16.8808 9.26999C17.1608 9.26999 17.4408 9.28999 17.7008 9.32999L19.1808 8.01999C19.5208 7.66999 19.9408 6.84 19.9408 6.25V4.03C19.9408 3.33 19.3708 2.76001 18.6708 2.76001H5.33081V2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6309 14.75C21.6309 15.64 21.3909 16.48 20.9509 17.2C20.1309 18.57 18.6209 19.5 16.8809 19.5C15.9409 19.5 15.0609 19.22 14.3209 18.73C13.7009 18.35 13.1909 17.82 12.8209 17.2C12.3809 16.48 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C17.2409 10 17.5908 10.04 17.9208 10.12C20.0508 10.59 21.6309 12.49 21.6309 14.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0293 14.7501L16.1993 15.9201L18.7292 13.5801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.6906 4.01999V6.23999C20.6906 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2406 10 16.8806 10C14.2606 10 12.1306 12.13 12.1306 14.75C12.1306 15.64 12.3806 16.48 12.8206 17.2C13.1906 17.82 13.7006 18.35 14.3206 18.73V19.07C14.3206 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87054 21.6 8.87054 19.98V14.63C8.87054 13.92 8.46055 13.01 8.06055 12.51L4.22052 8.47C3.72052 7.96 3.31055 7.05001 3.31055 6.45001V4.12C3.31055 2.91 4.22057 2 5.33057 2H18.6705C19.7805 2 20.6906 2.90999 20.6906 4.01999Z"
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
  bold: FilterTickBold,
  broken: FilterTickBroken,
  bulk: FilterTickBulk,
  linear: FilterTickLinear,
  outline: FilterTickOutline,
  twotone: FilterTickTwotone,
};

export const FilterTickIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
