import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const GallerySlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
      <Path
        d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z"
        fill="currentColor"
      />
      <Path
        d="M21.6084 5.39062L20.3884 6.61063C20.4684 6.98063 20.4984 7.38063 20.4984 7.81063V12.6106L20.3684 12.5006C19.5884 11.8306 18.3284 11.8306 17.5484 12.5006L13.3884 16.0706C12.6784 16.6806 11.5584 16.7406 10.7784 16.2206L5.39844 21.6006C5.43844 21.6206 5.47844 21.6306 5.51844 21.6406C5.78844 21.7306 6.05844 21.8006 6.34844 21.8606C6.44844 21.8806 6.54844 21.9006 6.65844 21.9106C7.02844 21.9606 7.40844 22.0006 7.80844 22.0006H16.1884C19.8284 22.0006 21.9984 19.8306 21.9984 16.1906V7.81063C21.9984 6.91063 21.8684 6.10062 21.6084 5.39062Z"
        fill="currentColor"
      />
      <Path
        d="M21.6106 5.39062L20.3906 6.61063C20.4706 6.98063 20.5006 7.38063 20.5006 7.81063V12.6106L20.3706 12.5006C19.5906 11.8306 18.3306 11.8306 17.5506 12.5006L13.3906 16.0706C12.6806 16.6806 11.5606 16.7406 10.7806 16.2206L5.39062 21.6106C6.10062 21.8706 6.91063 22.0006 7.81063 22.0006H16.1906C19.8306 22.0006 22.0006 19.8306 22.0006 16.1906V7.81063C22.0006 6.91063 21.8706 6.10062 21.6106 5.39062Z"
        fill="currentColor"
      />
      <Path
        d="M20.46 3.54L19.4 4.6C18.68 3.87 17.6 3.5 16.19 3.5H7.81C4.99 3.5 3.5 4.99 3.5 7.81V16.19C3.5 16.95 3.63 17.6 3.85 18.16L7.59 15.65C7.93 15.42 8.32 15.3 8.71 15.29L3.54 20.46C3.14 20.06 2.81 19.58 2.56 19.03C2.19 18.23 2 17.28 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C18.01 2 19.46 2.54 20.46 3.54Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GallerySlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 9C2 4 4 2 9 2H15C17.19 2 18.8 2.38 19.92 3.23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.37 20.1C2.43 18.97 2 17.31 2 15V12.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9709 7.98999C21.9909 8.30999 22.0009 8.64999 22.0009 8.99999V15C22.0009 20 20.0009 22 15.0009 22H9.00094C8.26094 22 7.58094 21.96 6.96094 21.86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4297 16.45C11.7297 16.75 12.2197 16.75 12.5197 16.45L17.5497 11.41C18.3297 10.63 19.5897 10.63 20.3697 11.41L21.9997 13.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GallerySlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.46 3.54L3.54 20.46C2.54 19.46 2 18.01 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C18.01 2 19.46 2.54 20.46 3.54Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.9993 7.81014V13.9001L20.3693 12.5001C19.5893 11.8301 18.3293 11.8301 17.5493 12.5001L13.3893 16.0701C12.6793 16.6801 11.5593 16.7401 10.7793 16.2201L21.6093 5.39014C21.7493 5.77014 21.8493 6.17014 21.9093 6.60014C21.9693 6.98014 21.9993 7.39014 21.9993 7.81014Z"
        fill="currentColor"
      />
      <Path
        d="M22.0006 13.9001V16.1901C22.0006 19.8301 19.8306 22.0001 16.1906 22.0001H7.81063C7.39062 22.0001 6.98063 21.9701 6.60063 21.9101C6.17063 21.8501 5.77062 21.7501 5.39062 21.6101L10.7806 16.2201C11.5606 16.7401 12.6806 16.6801 13.3906 16.0701L17.5506 12.5001C18.3306 11.8301 19.5906 11.8301 20.3706 12.5001L22.0006 13.9001Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
      <Path
        d="M7.99914 10.3801C9.31358 10.3801 10.3791 9.31456 10.3791 8.00012C10.3791 6.68568 9.31358 5.62012 7.99914 5.62012C6.6847 5.62012 5.61914 6.68568 5.61914 8.00012C5.61914 9.31456 6.6847 10.3801 7.99914 10.3801Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GallerySlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.37 20.1C2.43 18.97 2 17.31 2 15V9C2 4 4 2 9 2H15C17.19 2 18.8 2.38 19.92 3.23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 7.98999C21.99 8.30999 22 8.64999 22 8.99999V15C22 20 20 22 15 22H8.99996C8.25996 22 7.57996 21.96 6.95996 21.86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.4301 16.45C11.7301 16.75 12.2201 16.75 12.5201 16.45L17.5501 11.41C18.3301 10.63 19.5901 10.63 20.3701 11.41L22.0001 13.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GallerySlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.38 20.85C3.17 20.85 2.95 20.76 2.81 20.58C1.74 19.33 1.25 17.55 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C17.39 1.25 19.14 1.7 20.38 2.63C20.71 2.88 20.78 3.35 20.53 3.68C20.28 4.01 19.81 4.08 19.48 3.83C18.51 3.1 17.05 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 17.15 3.14 18.66 3.95 19.62C4.22 19.94 4.18 20.41 3.86 20.68C3.72 20.79 3.55 20.85 3.38 20.85Z"
        fill="currentColor"
      />
      <Path
        d="M14.999 22.7502H8.99903C8.20903 22.7502 7.49903 22.7002 6.84903 22.6102C6.43903 22.5502 6.15903 22.1702 6.21903 21.7602C6.27903 21.3502 6.66903 21.0702 7.06903 21.1302C7.63903 21.2102 8.28903 21.2602 8.99903 21.2602H14.999C19.609 21.2602 21.249 19.6202 21.249 15.0102V9.00017C21.249 8.67017 21.239 8.34017 21.219 8.04017C21.189 7.63017 21.509 7.27017 21.919 7.24017C22.349 7.22017 22.689 7.53017 22.719 7.94017C22.739 8.28017 22.749 8.63017 22.749 9.00017V15.0002C22.749 20.4302 20.429 22.7502 14.999 22.7502Z"
        fill="currentColor"
      />
      <Path
        d="M8 10.75C6.48 10.75 5.25 9.52 5.25 8C5.25 6.48 6.48 5.25 8 5.25C9.52 5.25 10.75 6.48 10.75 8C10.75 9.52 9.52 10.75 8 10.75ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
      <Path
        d="M11.9809 17.4299C11.5909 17.4299 11.2009 17.2799 10.9109 16.9899C10.6209 16.6999 10.6209 16.2199 10.9109 15.9299C11.2009 15.6399 11.6809 15.6399 11.9709 15.9299C11.9809 15.9399 11.9909 15.9399 12.0009 15.9299L17.0309 10.8899C18.0709 9.84986 19.8809 9.84986 20.9109 10.8899L22.5409 12.5199C22.8309 12.8099 22.8309 13.2899 22.5409 13.5799C22.2509 13.8699 21.7709 13.8699 21.4809 13.5799L19.8509 11.9499C19.3809 11.4799 18.5609 11.4799 18.0909 11.9499L13.0609 16.9899C12.7609 17.2799 12.3709 17.4299 11.9809 17.4299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GallerySlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.37 20.1C2.43 18.97 2 17.31 2 15V9C2 4 4 2 9 2H15C17.19 2 18.8 2.38 19.92 3.23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M21.9709 7.99023C21.9909 8.31023 22.0009 8.65023 22.0009 9.00023V15.0002C22.0009 20.0002 20.0009 22.0002 15.0009 22.0002H9.00094C8.26094 22.0002 7.58094 21.9602 6.96094 21.8602"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.4297 16.4502C11.7297 16.7502 12.2197 16.7502 12.5197 16.4502L17.5497 11.4102C18.3297 10.6302 19.5897 10.6302 20.3697 11.4102L21.9997 13.0502"
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
  bold: GallerySlashBold,
  broken: GallerySlashBroken,
  bulk: GallerySlashBulk,
  linear: GallerySlashLinear,
  outline: GallerySlashOutline,
  twotone: GallerySlashTwotone,
};

export const GallerySlashIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
