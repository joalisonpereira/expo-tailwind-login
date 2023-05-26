import cn from "clsx";
import { StyledProps } from "nativewind";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends StyledProps<TextInputProps> {}

function Input({ className, ...props }: InputProps) {
  return (
    <TextInput
      className={cn(
        "w-full",
        "bg-slate-800",
        "h-14",
        "rounded-3xl",
        "px-3",
        "text-white",
        className
      )}
      placeholderTextColor="#666"
      {...props}
    />
  );
}

export default Input;
