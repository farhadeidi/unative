import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Like1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.39062 18.4907V8.33071C8.39062 7.93071 8.51062 7.54071 8.73062 7.21071L11.4606 3.15071C11.8906 2.50071 12.9606 2.04071 13.8706 2.38071C14.8506 2.71071 15.5006 3.81071 15.2906 4.79071L14.7706 8.06071C14.7306 8.36071 14.8106 8.63071 14.9806 8.84071C15.1506 9.03071 15.4006 9.15071 15.6706 9.15071H19.7806C20.5706 9.15071 21.2506 9.47071 21.6506 10.0307C22.0306 10.5707 22.1006 11.2707 21.8506 11.9807L19.3906 19.4707C19.0806 20.7107 17.7306 21.7207 16.3906 21.7207H12.4906C11.8206 21.7207 10.8806 21.4907 10.4506 21.0607L9.17062 20.0707C8.68062 19.7007 8.39062 19.1107 8.39062 18.4907Z"
        fill="currentColor"
      />
      <Path
        d="M5.21 6.37891H4.18C2.63 6.37891 2 6.97891 2 8.45891V18.5189C2 19.9989 2.63 20.5989 4.18 20.5989H5.21C6.76 20.5989 7.39 19.9989 7.39 18.5189V8.45891C7.39 6.97891 6.76 6.37891 5.21 6.37891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Like1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L20.3205 15.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.38086 18.35V8.55002C2.38086 7.15002 2.98086 6.65002 4.38086 6.65002H5.38086C6.78086 6.65002 7.38086 7.15002 7.38086 8.55002V18.35C7.38086 19.75 6.78086 20.25 5.38086 20.25H4.38086C2.98086 20.25 2.38086 19.75 2.38086 18.35Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Like1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6509 10.03C21.2609 9.46997 20.5709 9.14997 19.7809 9.14997H15.6809C15.4109 9.14997 15.1609 9.03998 14.9909 8.83998C14.8109 8.63998 14.7409 8.35997 14.7809 8.06997L15.2909 4.78997C15.5109 3.80997 14.8609 2.70998 13.8809 2.37998C12.9709 2.03998 11.9009 2.49998 11.4709 3.14998L7.25086 9.41998L7.13086 9.61998V18.46L7.28086 18.61L10.4509 21.06C10.8709 21.48 11.8209 21.71 12.4909 21.71H16.3909C17.7309 21.71 19.0809 20.7 19.3809 19.47L21.8409 11.98C22.1009 11.27 22.0309 10.58 21.6509 10.03Z"
        fill="currentColor"
      />
      <Path
        d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Like1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Like1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.2794 22.1H12.4794C11.9194 22.1 10.6994 21.93 10.0494 21.28L7.01937 18.94L7.93937 17.75L11.0394 20.15C11.2894 20.39 11.9194 20.59 12.4794 20.59H16.2794C17.1794 20.59 18.1494 19.87 18.3494 19.06L20.7694 11.71C20.9294 11.27 20.8994 10.87 20.6894 10.58C20.4694 10.27 20.0694 10.09 19.5794 10.09H15.5794C15.0594 10.09 14.5794 9.86999 14.2494 9.48999C13.9094 9.09999 13.7594 8.57999 13.8394 8.03999L14.3394 4.82999C14.4594 4.26999 14.0794 3.63999 13.5394 3.45999C13.0494 3.27999 12.4194 3.53999 12.1994 3.85999L8.09938 9.95999L6.85938 9.12999L10.9594 3.02999C11.5894 2.08999 12.9694 1.63999 14.0494 2.04999C15.2994 2.45999 16.0994 3.83999 15.8194 5.11999L15.3294 8.26999C15.3194 8.33999 15.3194 8.43999 15.3894 8.51999C15.4394 8.56999 15.5094 8.59999 15.5894 8.59999H19.5894C20.5694 8.59999 21.4194 9.00999 21.9194 9.71999C22.4094 10.41 22.5094 11.32 22.1894 12.2L19.7994 19.48C19.4294 20.93 17.8894 22.1 16.2794 22.1Z"
        fill="currentColor"
      />
      <Path
        d="M5.38086 20.9999H4.38086C2.53086 20.9999 1.63086 20.1299 1.63086 18.3499V8.5499C1.63086 6.7699 2.53086 5.8999 4.38086 5.8999H5.38086C7.23086 5.8999 8.13086 6.7699 8.13086 8.5499V18.3499C8.13086 20.1299 7.23086 20.9999 5.38086 20.9999ZM4.38086 7.3999C3.29086 7.3999 3.13086 7.6599 3.13086 8.5499V18.3499C3.13086 19.2399 3.29086 19.4999 4.38086 19.4999H5.38086C6.47086 19.4999 6.63086 19.2399 6.63086 18.3499V8.5499C6.63086 7.6599 6.47086 7.3999 5.38086 7.3999H4.38086Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Like1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M2.38086 18.3499V8.5499C2.38086 7.1499 2.98086 6.6499 4.38086 6.6499H5.38086C6.78086 6.6499 7.38086 7.1499 7.38086 8.5499V18.3499C7.38086 19.7499 6.78086 20.2499 5.38086 20.2499H4.38086C2.98086 20.2499 2.38086 19.7499 2.38086 18.3499Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Like1Bold,
  broken: Like1Broken,
  bulk: Like1Bulk,
  linear: Like1Linear,
  outline: Like1Outline,
  twotone: Like1Twotone,
};

export const Like1Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Like1Icon;
