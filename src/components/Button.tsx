import clsx from "clsx";
import { StyledProps } from "nativewind";
import colors from "tailwindcss/colors";
import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

interface ButtonProps extends StyledProps<TouchableOpacityProps> {
  loading?: boolean;
}

function Button({ children, className, loading, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx(
        "w-full",
        "bg-primary",
        "h-14",
        "rounded-3xl",
        "flex",
        "items-center",
        "justify-center",
        className
      )}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text className="text-white font-medium text-sm">{children}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
