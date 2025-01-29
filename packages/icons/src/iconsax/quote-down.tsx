import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const QuoteDownBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.9082 12.3714H20.5982C20.5182 17.0414 19.5982 17.8114 16.7282 19.5114C16.3982 19.7114 16.2882 20.1314 16.4882 20.4714C16.6882 20.8014 17.1082 20.9114 17.4482 20.7114C20.8282 18.7114 22.0082 17.4914 22.0082 11.6714V6.28141C22.0082 4.57141 20.6182 3.19141 18.9182 3.19141H15.9182C14.1582 3.19141 12.8282 4.52141 12.8282 6.28141V9.28141C12.8182 11.0414 14.1482 12.3714 15.9082 12.3714Z"
        fill="currentColor"
      />
      <Path
        d="M5.09 12.3714H9.78C9.7 17.0414 8.78 17.8114 5.91 19.5114C5.58 19.7114 5.47 20.1314 5.67 20.4714C5.87 20.8014 6.29 20.9114 6.63 20.7114C10.01 18.7114 11.19 17.4914 11.19 11.6714V6.28141C11.19 4.57141 9.8 3.19141 8.1 3.19141H5.1C3.33 3.19141 2 4.52141 2 6.28141V9.28141C2 11.0414 3.33 12.3714 5.09 12.3714Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteDownBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.63 3.85992C12.63 2.43992 13.68 1.27997 15.21 1.27997L18.42 1.27997C19.84 1.27997 21 2.43992 21 3.85992L21 9.65991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 9.6499L15.2 9.6499C14.24 9.6499 13.48 9.19989 13.04 8.50989"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 9.65002C21 15.7 19.87 16.7 16.47 18.72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.37086 9.6499L3.57086 9.6499C2.04086 9.6499 0.990859 8.48988 0.990859 7.06988L0.99086 3.84985C0.99086 2.42985 2.04086 1.2699 3.57086 1.2699L6.80086 1.2699C8.22086 1.2699 9.38086 2.42985 9.38086 3.84985L9.38086 9.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.37109 9.65002C9.37109 15.7 8.24109 16.7 4.84109 18.72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const QuoteDownBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.9101 12.3699H20.6001C20.5201 17.0399 19.6001 17.8099 16.7301 19.5099C16.4001 19.7099 16.2901 20.1299 16.4901 20.4699C16.6901 20.7999 17.1101 20.91 17.4501 20.71C20.8301 18.71 22.0101 17.4899 22.0101 11.6699V6.27997C22.0101 4.56997 20.6201 3.18994 18.9201 3.18994H15.9201C14.1601 3.18994 12.8301 4.51997 12.8301 6.27997V9.27997C12.8201 11.04 14.1501 12.3699 15.9101 12.3699Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.08982 12.3699H9.77982C9.69982 17.0399 8.77982 17.8099 5.90982 19.5099C5.57982 19.7099 5.46982 20.1299 5.66982 20.4699C5.86982 20.7999 6.28982 20.91 6.62982 20.71C10.0098 18.71 11.1898 17.4899 11.1898 11.6699V6.27997C11.1898 4.56997 9.79982 3.18994 8.09982 3.18994H5.09982C3.33982 3.18994 2.00982 4.51997 2.00982 6.27997V9.27997C1.99982 11.04 3.32982 12.3699 5.08982 12.3699Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteDownLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9999 11.65H16.1999C14.6699 11.65 13.6199 10.49 13.6199 9.07001V5.84998C13.6199 4.42998 14.6699 3.27002 16.1999 3.27002H19.4199C20.8399 3.27002 21.9999 4.42998 21.9999 5.84998V11.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 11.6499C22 17.6999 20.87 18.6998 17.47 20.7198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.37 11.65H4.56999C3.03999 11.65 1.98999 10.49 1.98999 9.07001V5.84998C1.98999 4.42998 3.03999 3.27002 4.56999 3.27002H7.79999C9.21999 3.27002 10.38 4.42998 10.38 5.84998V11.65"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3701 11.6499C10.3701 17.6999 9.24009 18.6998 5.84009 20.7198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const QuoteDownOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0011 12.4H16.2011C14.3011 12.4 12.8711 10.97 12.8711 9.07001V5.84998C12.8711 3.94998 14.3011 2.52002 16.2011 2.52002H19.4211C21.2511 2.52002 22.7511 4.00998 22.7511 5.84998V11.65C22.7511 12.07 22.4111 12.4 22.0011 12.4ZM16.2011 4.03003C15.1411 4.03003 14.3711 4.79999 14.3711 5.85999V9.08002C14.3711 10.14 15.1411 10.91 16.2011 10.91H21.2511V5.85999C21.2511 4.84999 20.4311 4.03003 19.4211 4.03003H16.2011Z"
        fill="currentColor"
      />
      <Path
        d="M17.4705 21.4698C17.2105 21.4698 16.9605 21.3399 16.8205 21.0999C16.6105 20.7399 16.7305 20.2799 17.0805 20.0699C20.3105 18.1499 21.2505 17.3499 21.2505 11.6499C21.2505 11.2399 21.5905 10.8999 22.0005 10.8999C22.4105 10.8999 22.7505 11.2399 22.7505 11.6499C22.7505 17.8999 21.4805 19.2099 17.8505 21.3599C17.7305 21.4399 17.6005 21.4698 17.4705 21.4698Z"
        fill="currentColor"
      />
      <Path
        d="M10.3702 12.4H4.57023C2.67023 12.4 1.24023 10.97 1.24023 9.07001V5.84998C1.24023 3.94998 2.67023 2.52002 4.57023 2.52002H7.80023C9.63023 2.52002 11.1302 4.00998 11.1302 5.84998V11.65C11.1202 12.07 10.7902 12.4 10.3702 12.4ZM4.58023 4.03003C3.52023 4.03003 2.75023 4.79999 2.75023 5.85999V9.08002C2.75023 10.14 3.52023 10.91 4.58023 10.91H9.63023V5.85999C9.63023 4.84999 8.81024 4.03003 7.80023 4.03003H4.58023Z"
        fill="currentColor"
      />
      <Path
        d="M5.83964 21.4698C5.57964 21.4698 5.32964 21.3399 5.18964 21.0999C4.97964 20.7399 5.09964 20.2799 5.44964 20.0699C8.67964 18.1499 9.61964 17.3499 9.61964 11.6499C9.61964 11.2399 9.95964 10.8999 10.3696 10.8999C10.7796 10.8999 11.1196 11.2399 11.1196 11.6499C11.1196 17.8999 9.84964 19.2099 6.21964 21.3599C6.09964 21.4399 5.96964 21.4698 5.83964 21.4698Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const QuoteDownTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.9991 11.65H16.1991C14.6691 11.65 13.6191 10.49 13.6191 9.07001V5.84998C13.6191 4.42998 14.6691 3.27002 16.1991 3.27002H19.4191C20.8391 3.27002 21.9991 4.42998 21.9991 5.84998V11.65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9988 11.6499C21.9988 17.6999 20.8688 18.6998 17.4688 20.7198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M10.3702 11.65H4.57023C3.04023 11.65 1.99023 10.49 1.99023 9.07001V5.84998C1.99023 4.42998 3.04023 3.27002 4.57023 3.27002H7.80023C9.22023 3.27002 10.3802 4.42998 10.3802 5.84998V11.65"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.3698 11.6499C10.3698 17.6999 9.23984 18.6998 5.83984 20.7198"
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
  bold: QuoteDownBold,
  broken: QuoteDownBroken,
  bulk: QuoteDownBulk,
  linear: QuoteDownLinear,
  outline: QuoteDownOutline,
  twotone: QuoteDownTwotone,
};

export const QuoteDownIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default QuoteDownIcon;
