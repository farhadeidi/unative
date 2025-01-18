import {
  Box,
  BoxProps,
  cn,
  getPlatformInfo,
  Label,
  Switch,
  Text,
} from "@unative/universal";

export type SwitchWithLabelProps = BoxProps & {
  isChecked: boolean;
  onCheckedChange: (isChecked: boolean) => void;
  label: string | JSX.Element;
  description?: string | JSX.Element;
};
export const SwitchWithLabel = ({
  className,
  children,
  isChecked,
  onCheckedChange,
  label,
  description,
  ...props
}: SwitchWithLabelProps) => {
  return (
    <Box
      className={cn("my-4 flex flex-row gap-2 rounded-lg p-4", className)}
      {...props}
    >
      <Box className="flex-1">
        <Label
          htmlFor="my-checkbox"
          className="flex flex-col gap-2"
          onPress={
            getPlatformInfo().isReactNative
              ? () => {
                  onCheckedChange(!isChecked);
                }
              : undefined
          }
        >
          <Text className="font-bold">{label}</Text>
          {!!description && (
            <Text className="leading-snug text-muted-foreground">
              {description}
            </Text>
          )}
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
