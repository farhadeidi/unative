import { HTMLAttributes } from "react";
import { cn } from "unative/lib";

export type LogoProps = {
  className?: string;
  size?: number;
};

export const Logo = ({ className, size = 36 }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={cn("fill-foreground text-foreground", className)}
    >
      <g>
        <path d="m250 0c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250zm99.768 261c0 56.663-39.84 93.571-99.657 93.571s-99.879-36.909-99.879-93.571v-115.57h69.751v112.535c0 21.376 11.49 33.946 30.128 33.946s29.906-12.784 29.906-33.946v-112.535h69.751z"></path>
      </g>
    </svg>
  );
};

export const LogoType = ({
  className,
  textProps,
  logoProps,
  description,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  textProps?: HTMLAttributes<HTMLDivElement>;
  logoProps?: LogoProps;
  description?: string;
}) => {
  return (
    <div
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      <Logo {...logoProps} />
      <div className="-mt-1 flex-1">
        <div {...textProps} className={cn("text-lg font-bold", className)}>
          Unative
        </div>
        {!!description && (
          <div className={cn("text-sm leading-3 text-muted-foreground")}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
