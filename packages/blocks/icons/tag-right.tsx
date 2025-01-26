import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TagRightBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.8796 6.12156L3.9196 20.0816C3.4896 20.5116 2.7696 20.4716 2.4196 19.9816C1.9196 19.2916 1.8196 18.3316 2.3396 17.5016L5.0996 13.0716C5.4696 12.4816 5.4696 11.5216 5.0996 10.9316L2.3396 6.50156C1.4096 5.02156 2.4796 3.10156 4.2196 3.10156H15.6696C16.3496 3.10156 17.1896 3.57156 17.5496 4.14156L18.0196 4.88156C18.2596 5.28156 18.2096 5.79156 17.8796 6.12156Z"
        fill="currentColor"
      />
      <Path
        d="M21.6299 13.1119L16.4499 20.0119C16.0899 20.5019 15.2899 20.9019 14.6699 20.9019H7.50987C6.61987 20.9019 6.16987 19.8219 6.79987 19.1919L18.3199 7.68195C18.7699 7.23195 19.5399 7.31195 19.8799 7.86195L21.7299 10.8319C22.1299 11.4719 22.0899 12.5019 21.6299 13.1119Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagRightBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.21948 3.1001C2.46948 3.1001 1.40953 5.0201 2.32953 6.5101L5.09949 10.9401C5.46949 11.5301 5.46949 12.4901 5.09949 13.0801L2.32953 17.5101C1.39953 18.9901 2.46948 20.9201 4.21948 20.9201H14.6695C15.2795 20.9201 16.0795 20.5201 16.4495 20.0301L21.6295 13.1301C22.0895 12.5201 22.1295 11.4901 21.7295 10.8501L17.5495 4.1701C17.1895 3.5901 16.3395 3.1201 15.6595 3.1201H8.65949"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TagRightBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.8794 6.12009L3.92936 20.0701C3.49936 20.5001 2.77936 20.4601 2.42936 19.9701C1.92936 19.2801 1.82937 18.3201 2.34937 17.4901L5.10937 13.0601C5.47937 12.4701 5.47937 11.5101 5.10937 10.9201L2.34937 6.49009C1.41937 5.01009 2.48936 3.09009 4.22936 3.09009H15.6794C16.3594 3.09009 17.1994 3.56009 17.5594 4.13009L18.0294 4.87009C18.2594 5.28009 18.2094 5.79009 17.8794 6.12009Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.6299 13.11L16.4499 20.01C16.0899 20.5 15.2899 20.9 14.6699 20.9H7.50986C6.61986 20.9 6.16987 19.82 6.79987 19.19L18.3099 7.67999C18.7599 7.22999 19.5299 7.30999 19.8699 7.85999L21.7199 10.83C22.1299 11.47 22.0899 12.5 21.6299 13.11Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagRightLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.21995 3.09998H15.6599C16.3399 3.09998 17.19 3.56998 17.55 4.14998L21.73 10.83C22.13 11.48 22.09 12.5 21.63 13.11L16.45 20.01C16.08 20.5 15.28 20.9 14.67 20.9H4.21995C2.46995 20.9 1.40999 18.98 2.32999 17.49L5.09995 13.06C5.46995 12.47 5.46995 11.51 5.09995 10.92L2.32999 6.48998C1.40999 5.01998 2.47995 3.09998 4.21995 3.09998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TagRightOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.6694 21.6501H4.21943C3.11943 21.6501 2.14945 21.0801 1.61945 20.1201C1.08945 19.1601 1.11947 18.0301 1.69947 17.1001L4.46943 12.6701C4.68943 12.3201 4.68943 11.6701 4.46943 11.3301L1.69947 6.9001C1.11947 5.9701 1.08945 4.8401 1.61945 3.8801C2.14945 2.9201 3.12943 2.3501 4.21943 2.3501H15.6594C16.5994 2.3501 17.6894 2.9501 18.1794 3.7501L22.3594 10.4301C22.9194 11.3301 22.8694 12.7101 22.2294 13.5601L17.0494 20.4601C16.5394 21.1401 15.5194 21.6501 14.6694 21.6501ZM4.21943 3.8501C3.67943 3.8501 3.18945 4.1301 2.92945 4.6101C2.66945 5.0901 2.67943 5.6501 2.96943 6.1101L5.73945 10.5401C6.25945 11.3801 6.25945 12.6401 5.73945 13.4801L2.96943 17.9101C2.67943 18.3701 2.66945 18.9301 2.92945 19.4101C3.18945 19.8901 3.67943 20.1701 4.21943 20.1701H14.6694C15.0494 20.1701 15.6194 19.8801 15.8494 19.5801L21.0295 12.6801C21.2995 12.3201 21.3295 11.6301 21.0895 11.2501L16.9094 4.5701C16.6894 4.2101 16.0794 3.8801 15.6594 3.8801H4.21943V3.8501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TagRightTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.21915 3.1001H15.6592C16.3392 3.1001 17.1892 3.5701 17.5492 4.1501L21.7292 10.8301C22.1292 11.4801 22.0892 12.5001 21.6292 13.1101L16.4492 20.0101C16.0792 20.5001 15.2792 20.9001 14.6692 20.9001H4.21915C2.46915 20.9001 1.4092 18.9801 2.3292 17.4901L5.09916 13.0601C5.46916 12.4701 5.46916 11.5101 5.09916 10.9201L2.3292 6.4901C1.4092 5.0201 2.47915 3.1001 4.21915 3.1001Z"
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
  bold: TagRightBold,
  broken: TagRightBroken,
  bulk: TagRightBulk,
  linear: TagRightLinear,
  outline: TagRightOutline,
  twotone: TagRightTwotone,
};

export const TagRightIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
