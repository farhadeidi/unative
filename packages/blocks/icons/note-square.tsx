import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const NoteSquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6189 12.099L20.9989 11.889L19.3289 11.339C18.7489 11.149 18.1589 11.219 17.7089 11.539C17.2689 11.869 17.0089 12.399 17.0089 13.019V17.809C16.6089 17.589 16.1589 17.449 15.6689 17.449C14.1289 17.449 12.8789 18.709 12.8789 20.249C12.8789 20.509 12.9189 20.759 12.9789 20.999C13.3089 22.189 14.3889 23.049 15.6689 23.049C17.1989 23.049 18.4389 21.829 18.4689 20.309V15.699C18.4889 15.699 18.4989 15.709 18.5189 15.719L20.7989 16.479C20.8389 16.489 20.8889 16.509 20.9289 16.509C21.1089 16.559 21.2689 16.579 21.4389 16.579C21.7989 16.579 22.1389 16.479 22.4189 16.269C22.8689 15.949 23.1189 15.419 23.1189 14.799V14.199C23.1189 13.289 22.4789 12.389 21.6189 12.099ZM15.6689 21.589C15.2089 21.589 14.8089 21.359 14.5689 20.999C14.4189 20.789 14.3389 20.529 14.3389 20.249C14.3389 19.519 14.9389 18.919 15.6689 18.919C16.4089 18.919 17.0089 19.519 17.0089 20.249C17.0089 20.479 16.9489 20.689 16.8489 20.869C16.6289 21.299 16.1789 21.589 15.6689 21.589Z"
        fill="currentColor"
      />
      <Path
        d="M23.1189 14.199V14.799C23.1189 15.419 22.8689 15.949 22.4189 16.269C22.1389 16.479 21.7989 16.579 21.4389 16.579C21.2689 16.579 21.1089 16.559 20.9289 16.509C20.8889 16.509 20.8389 16.489 20.7989 16.479L18.5189 15.719C18.4989 15.709 18.4889 15.699 18.4689 15.699V20.309C18.4389 21.829 17.1989 23.049 15.6689 23.049C14.3889 23.049 13.3089 22.189 12.9789 20.999C12.9189 20.759 12.8789 20.509 12.8789 20.249C12.8789 18.709 14.1289 17.449 15.6689 17.449C16.1589 17.449 16.6089 17.589 17.0089 17.809V13.019C17.0089 12.399 17.2689 11.869 17.7089 11.539C18.1589 11.219 18.7489 11.149 19.3289 11.339L20.9989 11.889L21.6189 12.099C22.4789 12.389 23.1189 13.289 23.1189 14.199Z"
        fill="currentColor"
      />
      <Path
        d="M21 7.52V9.62C21 9.96 20.67 10.2 20.34 10.09L19.8 9.91C18.75 9.58 17.68 9.72 16.81 10.34C15.98 10.96 15.51 11.94 15.51 13.02V15.47C15.51 15.74 15.3 15.96 15.03 16C12.97 16.31 11.38 18.1 11.38 20.25C11.38 20.3 11.38 20.35 11.38 20.4C11.39 20.71 11.16 21 10.84 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NoteSquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 13.01V15C2 20 4 22 9 22H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5098 22C16.6143 22 17.5098 21.1046 17.5098 20C17.5098 18.8954 16.6143 18 15.5098 18C14.4052 18 13.5098 18.8954 13.5098 20C13.5098 21.1046 14.4052 22 15.5098 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5098 19.9998V13.0098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.8198 12.0699L21.0298 12.8099C21.5598 12.9899 21.9998 13.5899 21.9998 14.1599V14.7499C21.9998 15.5099 21.4098 15.9399 20.6898 15.6999L18.4797 14.9599C17.9497 14.7799 17.5098 14.1799 17.5098 13.6099V13.0199C17.5098 12.2499 18.0998 11.8299 18.8198 12.0699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NoteSquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21 7.52002V15.48C21 15.84 20.98 16.19 20.93 16.51C20.89 16.51 20.84 16.49 20.8 16.48L18.52 15.72C18.5 15.71 18.49 15.7 18.47 15.7V20.31C17.99 20.58 17.45 20.77 16.85 20.87C16.95 20.69 17.01 20.48 17.01 20.25C17.01 19.52 16.41 18.92 15.67 18.92C14.94 18.92 14.34 19.52 14.34 20.25C14.34 20.53 14.42 20.79 14.57 21H7.52002C4.07002 21 2 18.94 2 15.48V7.52002C2 4.06002 4.07002 2 7.52002 2H15.48C18.93 2 21 4.06002 21 7.52002Z"
        fill="currentColor"
      />
      <Path
        d="M21.6208 12.0999L21.0009 11.89L19.3309 11.34C18.7509 11.15 18.1609 11.2199 17.7109 11.5399C17.2709 11.8699 17.0109 12.4 17.0109 13.02V17.81C16.6109 17.59 16.1608 17.45 15.6708 17.45C14.1308 17.45 12.8809 18.71 12.8809 20.25C12.8809 20.51 12.9208 20.76 12.9808 21C13.3108 22.19 14.3908 23.05 15.6708 23.05C17.2008 23.05 18.4408 21.83 18.4708 20.31V15.7C18.4908 15.7 18.5009 15.7099 18.5209 15.7199L20.8008 16.4799C20.8408 16.4899 20.8908 16.51 20.9308 16.51C21.1108 16.56 21.2709 16.58 21.4409 16.58C21.8009 16.58 22.1408 16.48 22.4208 16.27C22.8708 15.95 23.1208 15.42 23.1208 14.8V14.2C23.1208 13.29 22.4808 12.3899 21.6208 12.0999ZM15.6708 21.59C15.2108 21.59 14.8109 21.36 14.5709 21C14.4209 20.79 14.3409 20.53 14.3409 20.25C14.3409 19.52 14.9408 18.92 15.6708 18.92C16.4108 18.92 17.0109 19.52 17.0109 20.25C17.0109 20.48 16.9508 20.69 16.8508 20.87C16.6308 21.3 16.1808 21.59 15.6708 21.59Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NoteSquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.51 22C16.6146 22 17.51 21.1046 17.51 20C17.51 18.8954 16.6146 18 15.51 18C14.4054 18 13.51 18.8954 13.51 20C13.51 21.1046 14.4054 22 15.51 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.51 19.9998V13.0098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.82 12.0699L21.03 12.8099C21.56 12.9899 22 13.5899 22 14.1599V14.7499C22 15.5099 21.41 15.9399 20.69 15.6999L18.48 14.9599C17.95 14.7799 17.51 14.1799 17.51 13.6099V13.0199C17.51 12.2499 18.1 11.8299 18.82 12.0699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const NoteSquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V10C22.75 10.41 22.41 10.75 22 10.75C21.59 10.75 21.25 10.41 21.25 10V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H11C11.41 21.25 11.75 21.59 11.75 22C11.75 22.41 11.41 22.75 11 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.5098 22.75C13.9998 22.75 12.7598 21.52 12.7598 20C12.7598 18.48 13.9898 17.25 15.5098 17.25C17.0298 17.25 18.2598 18.48 18.2598 20C18.2598 21.52 17.0198 22.75 15.5098 22.75ZM15.5098 18.76C14.8198 18.76 14.2598 19.32 14.2598 20.01C14.2598 20.7 14.8198 21.26 15.5098 21.26C16.1998 21.26 16.7598 20.7 16.7598 20.01C16.7598 19.32 16.1998 18.76 15.5098 18.76Z"
        fill="currentColor"
      />
      <Path
        d="M17.5098 20.7498C17.0998 20.7498 16.7598 20.4098 16.7598 19.9998V13.0098C16.7598 12.5998 17.0998 12.2598 17.5098 12.2598C17.9198 12.2598 18.2598 12.5998 18.2598 13.0098V19.9998C18.2598 20.4198 17.9198 20.7498 17.5098 20.7498Z"
        fill="currentColor"
      />
      <Path
        d="M21.0798 16.4998C20.8698 16.4998 20.6598 16.4698 20.4498 16.3898L18.2397 15.6597C17.3897 15.3797 16.7598 14.4897 16.7598 13.5997V13.0098C16.7598 12.3998 17.0098 11.8698 17.4598 11.5498C17.9098 11.2298 18.4898 11.1597 19.0598 11.3497L21.2698 12.0898C22.1198 12.3698 22.7498 13.2598 22.7498 14.1498V14.7398C22.7498 15.3498 22.4997 15.8798 22.0497 16.1998C21.7697 16.3998 21.4298 16.4998 21.0798 16.4998ZM18.4297 12.7498C18.3897 12.7498 18.3498 12.7598 18.3298 12.7698C18.2898 12.7998 18.2598 12.8698 18.2598 13.0098V13.5997C18.2598 13.8397 18.4897 14.1598 18.7197 14.2398L20.9297 14.9697C21.0597 15.0097 21.1497 14.9997 21.1797 14.9797C21.2197 14.9497 21.2598 14.8798 21.2598 14.7398V14.1498C21.2598 13.9098 21.0297 13.5898 20.7997 13.5098L18.5898 12.7798C18.5198 12.7598 18.4697 12.7498 18.4297 12.7498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const NoteSquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M15.5098 22C16.6143 22 17.5098 21.1046 17.5098 20C17.5098 18.8954 16.6143 18 15.5098 18C14.4052 18 13.5098 18.8954 13.5098 20C13.5098 21.1046 14.4052 22 15.5098 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.5098 19.9998V13.0098"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.8198 12.0699L21.0298 12.8099C21.5598 12.9899 21.9998 13.5899 21.9998 14.1599V14.7499C21.9998 15.5099 21.4098 15.9399 20.6898 15.6999L18.4797 14.9599C17.9497 14.7799 17.5098 14.1799 17.5098 13.6099V13.0199C17.5098 12.2499 18.0998 11.8299 18.8198 12.0699Z"
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
  bold: NoteSquareBold,
  broken: NoteSquareBroken,
  bulk: NoteSquareBulk,
  linear: NoteSquareLinear,
  outline: NoteSquareOutline,
  twotone: NoteSquareTwotone,
};

export const NoteSquareIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
