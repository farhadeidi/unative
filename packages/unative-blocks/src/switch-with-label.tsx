import {
  Box,
  BoxProps,
  cn,
  getPlatformInfo,
  Label,
  Switch,
} from "@unative/universal";

export type SwitchWithLabelProps = BoxProps & {
  isChecked: boolean;
  onCheckedChange: (isChecked: boolean) => void;
};
export const SwitchWithLabel = ({
  className,
  children,
  isChecked,
  onCheckedChange,
  ...props
}: SwitchWithLabelProps) => {
  return (
    <Box
      className={cn(
        "my-4 flex flex-row gap-2 rounded-lg border border-border p-4",
        className,
      )}
      {...props}
    >
      <Box className="flex-1">
        <Label
          htmlFor="my-checkbox"
          onPress={
            getPlatformInfo().isReactNative
              ? () => {
                  onCheckedChange(!isChecked);
                }
              : undefined
          }
        >
          Mark as primary content
        </Label>
      </Box>
      <Switch
        id="my-checkbox"
        checked={isChecked}
        onCheckedChange={onCheckedChange}
      />
    </Box>
  );
};
