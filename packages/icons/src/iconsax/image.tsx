import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ImageBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0187 16.8203L18.8887 9.50027C18.3187 8.16027 17.4687 7.40027 16.4987 7.35027C15.5387 7.30027 14.6087 7.97027 13.8987 9.25027L11.9987 12.6603C11.5987 13.3803 11.0287 13.8103 10.4087 13.8603C9.77867 13.9203 9.14867 13.5903 8.63867 12.9403L8.41867 12.6603C7.70867 11.7703 6.82867 11.3403 5.92867 11.4303C5.02867 11.5203 4.25867 12.1403 3.74867 13.1503L2.01867 16.6003C1.39867 17.8503 1.45867 19.3003 2.18867 20.4803C2.91867 21.6603 4.18867 22.3703 5.57867 22.3703H18.3387C19.6787 22.3703 20.9287 21.7003 21.6687 20.5803C22.4287 19.4603 22.5487 18.0503 22.0187 16.8203Z"
        fill="currentColor"
      />
      <Path
        d="M6.96984 8.38109C8.83657 8.38109 10.3498 6.86782 10.3498 5.00109C10.3498 3.13437 8.83657 1.62109 6.96984 1.62109C5.10312 1.62109 3.58984 3.13437 3.58984 5.00109C3.58984 6.86782 5.10312 8.38109 6.96984 8.38109Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ImageBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3298 12.8399C11.3698 14.5699 9.57978 14.7199 8.33978 13.1699L8.11978 12.8899C6.82978 11.2699 5.00978 11.4699 4.07978 13.3199L2.35978 16.7699C1.15978 19.1699 2.90978 21.9999 5.58978 21.9999H18.3498C20.9398 21.9999 22.6898 19.3499 21.6698 16.9599L18.5398 9.64988C17.4798 7.16988 15.5298 7.06988 14.2198 9.42988"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.9707 5C9.9707 6.66 8.6307 8 6.9707 8C5.3107 8 3.9707 6.66 3.9707 5C3.9707 3.34 5.3107 2 6.9707 2C7.3307 2 7.6707 2.06 7.9807 2.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ImageBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0206 16.8198L18.8906 9.49978C18.3206 8.15978 17.4706 7.39978 16.5006 7.34978C15.5406 7.29978 14.6106 7.96978 13.9006 9.24978L12.0006 12.6598C11.6006 13.3798 11.0306 13.8098 10.4106 13.8598C9.78063 13.9198 9.15063 13.5898 8.64063 12.9398L8.42063 12.6598C7.71063 11.7698 6.83063 11.3398 5.93063 11.4298C5.03063 11.5198 4.26063 12.1398 3.75063 13.1498L2.02063 16.5998C1.40063 17.8498 1.46063 19.2998 2.19063 20.4798C2.92063 21.6598 4.19063 22.3698 5.58063 22.3698H18.3406C19.6806 22.3698 20.9306 21.6998 21.6706 20.5798C22.4306 19.4598 22.5506 18.0498 22.0206 16.8198Z"
        fill="currentColor"
      />
      <Path
        d="M6.96984 8.38012C8.83657 8.38012 10.3498 6.86684 10.3498 5.00012C10.3498 3.13339 8.83657 1.62012 6.96984 1.62012C5.10312 1.62012 3.58984 3.13339 3.58984 5.00012C3.58984 6.86684 5.10312 8.38012 6.96984 8.38012Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ImageLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6799 16.9599L18.5499 9.64988C17.4899 7.16988 15.5399 7.06988 14.2299 9.42988L12.3399 12.8399C11.3799 14.5699 9.58993 14.7199 8.34993 13.1699L8.12993 12.8899C6.83993 11.2699 5.01993 11.4699 4.08993 13.3199L2.36993 16.7699C1.15993 19.1699 2.90993 21.9999 5.58993 21.9999H18.3499C20.9499 21.9999 22.6999 19.3499 21.6799 16.9599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96997 8C8.62682 8 9.96997 6.65685 9.96997 5C9.96997 3.34315 8.62682 2 6.96997 2C5.31312 2 3.96997 3.34315 3.96997 5C3.96997 6.65685 5.31312 8 6.96997 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ImageOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.3608 22.7499H5.59084C4.07084 22.7499 2.68084 21.9799 1.88084 20.6799C1.08084 19.3799 1.01084 17.7999 1.69084 16.4299L3.41084 12.9799C3.97084 11.8599 4.87084 11.1599 5.88084 11.0499C6.89084 10.9399 7.92084 11.4399 8.70084 12.4099L8.92084 12.6899C9.36084 13.2299 9.87084 13.5199 10.3708 13.4699C10.8708 13.4299 11.3308 13.0699 11.6708 12.4599L13.5608 9.04993C14.3408 7.63993 15.3808 6.90993 16.5108 6.95993C17.6308 7.01993 18.5908 7.85993 19.2308 9.33993L22.3608 16.6499C22.9408 17.9999 22.8008 19.5399 21.9908 20.7699C21.1908 22.0199 19.8308 22.7499 18.3608 22.7499ZM6.16084 12.5499C6.12084 12.5499 6.08084 12.5499 6.04084 12.5599C5.54084 12.6099 5.08084 13.0099 4.75084 13.6599L3.03084 17.1099C2.58084 17.9999 2.63084 19.0499 3.15084 19.8999C3.67084 20.7499 4.59084 21.2599 5.59084 21.2599H18.3508C19.3308 21.2599 20.2008 20.7899 20.7408 19.9699C21.2808 19.1499 21.3708 18.1699 20.9808 17.2699L17.8508 9.95993C17.4708 9.05993 16.9408 8.50993 16.4308 8.48993C15.9608 8.45993 15.3508 8.95993 14.8708 9.80993L12.9808 13.2199C12.4008 14.2599 11.4908 14.9099 10.5008 14.9999C9.51084 15.0799 8.50084 14.5999 7.75084 13.6599L7.53084 13.3799C7.11084 12.8299 6.63084 12.5499 6.16084 12.5499Z"
        fill="currentColor"
      />
      <Path
        d="M6.9707 8.75C4.9107 8.75 3.2207 7.07 3.2207 5C3.2207 2.93 4.9007 1.25 6.9707 1.25C9.0407 1.25 10.7207 2.93 10.7207 5C10.7207 7.07 9.0407 8.75 6.9707 8.75ZM6.9707 2.75C5.7307 2.75 4.7207 3.76 4.7207 5C4.7207 6.24 5.7307 7.25 6.9707 7.25C8.2107 7.25 9.2207 6.24 9.2207 5C9.2207 3.76 8.2107 2.75 6.9707 2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ImageTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6809 16.9601L18.5509 9.65013C17.4909 7.17013 15.5409 7.07013 14.2309 9.43013L12.3409 12.8401C11.3809 14.5701 9.5909 14.7201 8.3509 13.1701L8.1309 12.8901C6.8409 11.2701 5.0209 11.4701 4.0909 13.3201L2.3709 16.7701C1.1609 19.1701 2.9109 22.0001 5.5909 22.0001H18.3509C20.9509 22.0001 22.7009 19.3501 21.6809 16.9601Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.9707 8C8.62756 8 9.9707 6.65685 9.9707 5C9.9707 3.34315 8.62756 2 6.9707 2C5.31385 2 3.9707 3.34315 3.9707 5C3.9707 6.65685 5.31385 8 6.9707 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ImageBold,
  broken: ImageBroken,
  bulk: ImageBulk,
  linear: ImageLinear,
  outline: ImageOutline,
  twotone: ImageTwotone,
};

export const ImageIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default ImageIcon;
