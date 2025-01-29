import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MessageSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.28 12.91C18.28 13.11 18.27 13.31 18.25 13.5C18.07 15.62 16.82 16.68 14.52 16.68H14.2C14 16.68 13.81 16.77 13.7 16.93L12.76 18.19C12.34 18.75 11.67 18.75 11.25 18.19L10.31 16.93C10.21 16.8 9.98 16.68 9.81 16.68H9.49C6.98 16.68 5.73 16.06 5.73 12.92V9.76C5.73 7.46 6.79 6.21 8.91 6.03C9.08 6.01 9.28 6 9.49 6H14.52C17.03 6 18.28 7.26 18.28 9.76V12.91Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.28 9.76007V12.9001C18.28 13.1001 18.27 13.3 18.25 13.49C18.07 15.61 16.82 16.6701 14.52 16.6701H14.21C14.01 16.6701 13.82 16.7601 13.71 16.9201L12.77 18.1801C12.35 18.7401 11.68 18.7401 11.26 18.1801L10.32 16.9201C10.22 16.7901 9.99001 16.6701 9.82001 16.6701H9.51001C7.00001 16.6701 5.75 16.0501 5.75 12.9101V9.77005C5.75 7.47005 6.80999 6.22007 8.92999 6.04007C9.11999 6.02007 9.31999 6.01007 9.51999 6.01007H14.55C17.02 6.00007 18.28 7.26007 18.28 9.76007Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.28 9.75982V12.8998C18.28 13.0998 18.27 13.2998 18.25 13.4898C18.07 15.6098 16.82 16.6698 14.52 16.6698H14.21C14.01 16.6698 13.82 16.7598 13.71 16.9198L12.77 18.1798C12.35 18.7398 11.68 18.7398 11.26 18.1798L10.32 16.9198C10.22 16.7898 9.99001 16.6698 9.82001 16.6698H9.51001C7.00001 16.6698 5.75 16.0498 5.75 12.9098V9.7698C5.75 7.4698 6.80999 6.21982 8.92999 6.03982C9.11999 6.01982 9.31999 6.00982 9.51999 6.00982H14.55C17.02 5.99982 18.28 7.25982 18.28 9.75982Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.28 9.76007V12.9001C18.28 13.1001 18.27 13.3 18.25 13.49C18.07 15.61 16.82 16.6701 14.52 16.6701H14.21C14.01 16.6701 13.82 16.7601 13.71 16.9201L12.77 18.1801C12.35 18.7401 11.68 18.7401 11.26 18.1801L10.32 16.9201C10.22 16.7901 9.99001 16.6701 9.82001 16.6701H9.51001C7.00001 16.6701 5.75 16.0501 5.75 12.9101V9.77005C5.75 7.47005 6.80999 6.22007 8.92999 6.04007C9.11999 6.02007 9.31999 6.01007 9.51999 6.01007H14.55C17.02 6.00007 18.28 7.26007 18.28 9.76007Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageSquareOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M11.9987 19.3498C11.4787 19.3498 10.9888 19.0898 10.6388 18.6298L9.72876 17.4198H9.47876C6.76876 17.4198 4.96875 16.6498 4.96875 12.9098V9.76974C4.96875 7.08974 6.33874 5.49976 8.82874 5.28976C9.01874 5.26976 9.24876 5.25977 9.47876 5.25977H14.5088C17.4188 5.25977 19.0187 6.85974 19.0187 9.76974V12.9098C19.0187 13.1498 19.0088 13.3698 18.9788 13.5898C18.7688 16.0498 17.1787 17.4198 14.4987 17.4198H14.2487L13.3387 18.6298C13.0087 19.0898 12.5187 19.3498 11.9987 19.3498ZM9.48874 6.74976C9.31874 6.74976 9.14874 6.75975 8.98874 6.77975C7.23874 6.92975 6.46875 7.84974 6.46875 9.76974V12.9098C6.46875 15.4898 7.21876 15.9198 9.47876 15.9198H9.78876C10.1888 15.9198 10.6388 16.1397 10.8888 16.4597L11.8387 17.7298C11.8987 17.8098 11.9587 17.8498 11.9887 17.8498C12.0187 17.8498 12.0788 17.8098 12.1388 17.7298L13.0787 16.4698C13.3387 16.1198 13.7487 15.9198 14.1787 15.9198H14.4887C16.4087 15.9198 17.3288 15.1497 17.4788 13.4297C17.4988 13.2397 17.5088 13.0797 17.5088 12.8997V9.75977C17.5088 7.67977 16.5787 6.74976 14.4987 6.74976H9.48874Z"
        fill="currentColor"
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageSquareTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M18.28 9.75982V12.8998C18.28 13.0998 18.27 13.2998 18.25 13.4898C18.07 15.6098 16.82 16.6698 14.52 16.6698H14.21C14.01 16.6698 13.82 16.7598 13.71 16.9198L12.77 18.1798C12.35 18.7398 11.68 18.7398 11.26 18.1798L10.32 16.9198C10.22 16.7898 9.99001 16.6698 9.82001 16.6698H9.51001C7.00001 16.6698 5.75 16.0498 5.75 12.9098V9.7698C5.75 7.4698 6.80999 6.21982 8.92999 6.03982C9.11999 6.01982 9.31999 6.00982 9.51999 6.00982H14.55C17.02 5.99982 18.28 7.25982 18.28 9.75982Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MessageSquareBold,
  broken: MessageSquareBroken,
  bulk: MessageSquareBulk,
  linear: MessageSquareLinear,
  outline: MessageSquareOutline,
  twotone: MessageSquareTwotone,
};

export const MessageSquareIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MessageSquareIcon;
