import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

export function DroidSansText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "DroidSans" }]} />;
}

export function DroidSansBoldText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "DroidSansBold" }]} />
  );
}
