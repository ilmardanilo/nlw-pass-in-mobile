import { colors } from '@/styles/colors';
import QRCodeSvg from 'react-native-qrcode-svg';

interface IProps {
  value: string;
  size: number;
}

export function QRCode({ value, size }: IProps) {
  return (
    <QRCodeSvg
      value={value}
      size={size}
      color={colors.white}
      backgroundColor="transparent"
    />
  );
}
