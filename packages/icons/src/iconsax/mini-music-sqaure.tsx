import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const MiniMusicSqaureBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.7117 17.5195C20.3417 18.7395 19.6117 19.6795 18.5717 20.2595C18.5317 20.0995 18.5117 19.9295 18.5117 19.7595C18.5117 18.5395 19.5017 17.5395 20.7117 17.5195Z"
        fill="currentColor"
      />
      <Path
        d="M21 7.52V9.48397C21 10.0065 20.586 10.4294 20.08 10.56L17.13 11.38C15.57 11.78 14.53 13.13 14.53 14.74V16.2849C14.53 16.7595 14.1873 17.1556 13.7612 17.3644C12.7457 17.8619 11.9698 18.8714 11.677 20.0107C11.5395 20.5456 11.1023 21 10.55 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z"
        fill="currentColor"
      />
      <Path
        d="M22.3091 12.251C22.0491 12.061 21.6291 11.861 20.9991 11.921C20.8391 11.931 20.6691 11.961 20.4791 12.011L17.4991 12.831C16.6091 13.061 16.0291 13.811 16.0291 14.741V18.651C15.7991 18.571 15.5491 18.521 15.2891 18.521C14.0491 18.521 13.0391 19.521 13.0391 20.761C13.0391 20.841 13.0391 20.921 13.0491 21.001C13.1691 22.121 14.1291 23.001 15.2891 23.001C16.5091 23.001 17.4991 22.011 17.5191 20.801C17.5191 20.781 17.5291 20.771 17.5291 20.761V17.071L20.9791 16.121L21.4991 15.981V17.661C21.2691 17.581 21.0191 17.521 20.7491 17.521H20.7091C19.4991 17.541 18.5091 18.541 18.5091 19.761C18.5091 19.931 18.5291 20.101 18.5691 20.261C18.7991 21.261 19.6891 22.011 20.7491 22.011C21.9791 22.011 22.9691 21.021 22.9891 19.801C22.9891 19.791 22.9991 19.781 22.9991 19.761V13.931C22.9991 13.171 22.7691 12.611 22.3091 12.251ZM15.2891 21.501C14.9591 21.501 14.6791 21.291 14.5891 21.001C14.5491 20.931 14.5391 20.841 14.5391 20.761C14.5391 20.351 14.8791 20.021 15.2891 20.021C15.6891 20.021 16.0291 20.351 16.0291 20.761C16.0291 20.841 16.0191 20.911 15.9891 20.981C15.8991 21.281 15.6191 21.501 15.2891 21.501ZM20.7491 20.511C20.3491 20.511 20.0091 20.171 20.0091 19.761C20.0091 19.361 20.3491 19.021 20.7491 19.021C21.1591 19.021 21.4991 19.361 21.4991 19.761C21.4991 20.171 21.1591 20.511 20.7491 20.511Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MiniMusicSqaureBroken = ({
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
        d="M2 12.98V15C2 20 4 22 9 22H11"
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
        d="M15.2701 22.0001C16.0654 22.0001 16.7101 21.3554 16.7101 20.5601C16.7101 19.7648 16.0654 19.1201 15.2701 19.1201C14.4748 19.1201 13.8301 19.7648 13.8301 20.5601C13.8301 21.3554 14.4748 22.0001 15.2701 22.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9992 19.6001V13.9601C21.9992 12.7601 21.2492 12.5901 20.4792 12.8001L17.5892 13.5901C17.0692 13.7301 16.6992 14.1501 16.6992 14.7501V15.7601V16.4401V20.5701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5591 21.0402C21.3544 21.0402 21.9991 20.3954 21.9991 19.6002C21.9991 18.8049 21.3544 18.1602 20.5591 18.1602C19.7638 18.1602 19.1191 18.8049 19.1191 19.6002C19.1191 20.3954 19.7638 21.0402 20.5591 21.0402Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.7109 16.43L22.0009 14.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MiniMusicSqaureBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.7098 17.52C20.3398 18.74 19.6098 19.68 18.5698 20.26C18.5298 20.1 18.5098 19.93 18.5098 19.76C18.5098 18.54 19.4998 17.54 20.7098 17.52Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21 7.52002V15.48C21 15.7 20.99 15.91 20.98 16.12L17.53 17.07V20.71C17.06 20.86 16.55 20.95 15.99 20.98C16.02 20.91 16.03 20.84 16.03 20.76C16.03 20.35 15.69 20.02 15.29 20.02C14.88 20.02 14.54 20.35 14.54 20.76C14.54 20.84 14.55 20.93 14.59 21H7.52C4.07 21 2 18.94 2 15.48V7.52002C2 4.06002 4.07 2 7.52 2H15.48C18.93 2 21 4.06002 21 7.52002Z"
        fill="currentColor"
      />
      <Path
        d="M22.3091 12.25C22.0491 12.06 21.6291 11.86 20.9991 11.92C20.8391 11.93 20.6691 11.96 20.4791 12.01L17.4991 12.8301C16.6091 13.0601 16.0291 13.81 16.0291 14.74V18.6501C15.7991 18.5701 15.5491 18.5201 15.2891 18.5201C14.0491 18.5201 13.0391 19.52 13.0391 20.76C13.0391 20.84 13.0391 20.92 13.0491 21C13.1691 22.12 14.1291 23 15.2891 23C16.5091 23 17.4991 22.01 17.5191 20.8C17.5191 20.78 17.5291 20.77 17.5291 20.76V17.07L20.9791 16.12L21.4991 15.98V17.66C21.2691 17.58 21.0191 17.5201 20.7491 17.5201H20.7091C19.4991 17.5401 18.5091 18.54 18.5091 19.76C18.5091 19.93 18.5291 20.1 18.5691 20.26C18.7991 21.26 19.6891 22.01 20.7491 22.01C21.9791 22.01 22.9691 21.02 22.9891 19.8C22.9891 19.79 22.9991 19.78 22.9991 19.76V13.93C22.9991 13.17 22.7691 12.61 22.3091 12.25ZM15.2891 21.5C14.9591 21.5 14.6791 21.29 14.5891 21C14.5491 20.93 14.5391 20.84 14.5391 20.76C14.5391 20.35 14.8791 20.0201 15.2891 20.0201C15.6891 20.0201 16.0291 20.35 16.0291 20.76C16.0291 20.84 16.0191 20.91 15.9891 20.98C15.8991 21.28 15.6191 21.5 15.2891 21.5ZM20.7491 20.51C20.3491 20.51 20.0091 20.17 20.0091 19.76C20.0091 19.36 20.3491 19.0201 20.7491 19.0201C21.1591 19.0201 21.4991 19.36 21.4991 19.76C21.4991 20.17 21.1591 20.51 20.7491 20.51Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MiniMusicSqaureLinear = ({
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
        d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.27 22.0001C16.0652 22.0001 16.71 21.3554 16.71 20.5601C16.71 19.7648 16.0652 19.1201 15.27 19.1201C14.4747 19.1201 13.83 19.7648 13.83 20.5601C13.83 21.3554 14.4747 22.0001 15.27 22.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 19.6001V13.9601C22 12.7601 21.2499 12.5901 20.4799 12.8001L17.59 13.5901C17.07 13.7301 16.7 14.1501 16.7 14.7501V15.7601V16.4401V20.5701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.56 21.0402C21.3553 21.0402 22 20.3954 22 19.6002C22 18.8049 21.3553 18.1602 20.56 18.1602C19.7647 18.1602 19.12 18.8049 19.12 19.6002C19.12 20.3954 19.7647 21.0402 20.56 21.0402Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.71 16.43L22 14.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MiniMusicSqaureOutline = ({
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
        d="M11 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V10C22.75 10.41 22.41 10.75 22 10.75C21.59 10.75 21.25 10.41 21.25 10V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H11C11.41 21.25 11.75 21.59 11.75 22C11.75 22.41 11.41 22.75 11 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.2701 22.7501C14.0601 22.7501 13.0801 21.7701 13.0801 20.5601C13.0801 19.3501 14.0601 18.3701 15.2701 18.3701C16.4801 18.3701 17.4601 19.3501 17.4601 20.5601C17.4601 21.7701 16.4801 22.7501 15.2701 22.7501ZM15.2701 19.8601C14.8901 19.8601 14.5801 20.1701 14.5801 20.5501C14.5801 20.9301 14.8901 21.2401 15.2701 21.2401C15.6501 21.2401 15.9601 20.9301 15.9601 20.5501C15.9601 20.1701 15.6501 19.8601 15.2701 19.8601Z"
        fill="currentColor"
      />
      <Path
        d="M16.7109 21.3098C16.3009 21.3098 15.9609 20.9698 15.9609 20.5598V14.7398C15.9609 13.8298 16.5209 13.0898 17.4009 12.8598L20.2909 12.0698C21.1909 11.8198 21.7509 12.0598 22.0709 12.2998C22.3809 12.5398 22.7509 13.0198 22.7509 13.9498V19.5898C22.7509 19.9998 22.4109 20.3398 22.0009 20.3398C21.5909 20.3398 21.2509 19.9998 21.2509 19.5898V13.9498C21.2509 13.6298 21.1809 13.5098 21.1509 13.4898C21.1209 13.4698 20.9809 13.4298 20.6709 13.5098L17.7809 14.2998C17.4809 14.3798 17.4509 14.5898 17.4509 14.7398V20.5598C17.4609 20.9698 17.1209 21.3098 16.7109 21.3098Z"
        fill="currentColor"
      />
      <Path
        d="M20.5611 21.7902C19.3511 21.7902 18.3711 20.8102 18.3711 19.6002C18.3711 18.3902 19.3511 17.4102 20.5611 17.4102C21.7711 17.4102 22.7511 18.3902 22.7511 19.6002C22.7511 20.8102 21.7711 21.7902 20.5611 21.7902ZM20.5611 18.9002C20.1811 18.9002 19.8711 19.2102 19.8711 19.5902C19.8711 19.9702 20.1811 20.2802 20.5611 20.2802C20.9411 20.2802 21.2511 19.9702 21.2511 19.5902C21.2511 19.2102 20.9411 18.9002 20.5611 18.9002Z"
        fill="currentColor"
      />
      <Path
        d="M16.7096 17.1799C16.3796 17.1799 16.0796 16.9599 15.9896 16.6299C15.8796 16.2299 16.1196 15.8199 16.5196 15.7099L21.8096 14.2699C22.2096 14.1599 22.6196 14.3999 22.7296 14.7999C22.8396 15.1999 22.5996 15.6098 22.1996 15.7198L16.9096 17.1598C16.8396 17.1698 16.7696 17.1799 16.7096 17.1799Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MiniMusicSqaureTwotone = ({
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
        d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M15.2701 21.9996C16.0654 21.9996 16.7101 21.3549 16.7101 20.5596C16.7101 19.7643 16.0654 19.1196 15.2701 19.1196C14.4748 19.1196 13.8301 19.7643 13.8301 20.5596C13.8301 21.3549 14.4748 21.9996 15.2701 21.9996Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.9992 19.5998V13.9599C21.9992 12.7599 21.2492 12.5898 20.4792 12.7998L17.5892 13.5899C17.0692 13.7299 16.6992 14.1498 16.6992 14.7498V15.7598V16.4398V20.5698"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.5611 21.0397C21.3564 21.0397 22.0011 20.395 22.0011 19.5997C22.0011 18.8044 21.3564 18.1597 20.5611 18.1597C19.7658 18.1597 19.1211 18.8044 19.1211 19.5997C19.1211 20.395 19.7658 21.0397 20.5611 21.0397Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.7109 16.4297L22.0009 14.9897"
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
  bold: MiniMusicSqaureBold,
  broken: MiniMusicSqaureBroken,
  bulk: MiniMusicSqaureBulk,
  linear: MiniMusicSqaureLinear,
  outline: MiniMusicSqaureOutline,
  twotone: MiniMusicSqaureTwotone,
};

export const MiniMusicSqaureIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default MiniMusicSqaureIcon;
