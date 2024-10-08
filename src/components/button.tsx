import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...props }: IButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-green-500 text-base font-bold uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
