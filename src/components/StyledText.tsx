import { Text, TextProps } from 'src/components/Themed';

export function MonoText(props: TextProps) {
  const { style } = props;

  return (
    <Text
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={[style, { fontFamily: 'space-mono' }]}
    />
  );
}
