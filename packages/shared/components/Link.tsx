import React from "react";
import {
  Text,
  TextProperties,
  TouchableOpacity
} from "react-native";

interface TextLinkProps extends TextProperties {
  children: React.ReactNode;
  href: string;
}

function TextLink(props: TextLinkProps) {
  return (
    <Text accessibilityRole="link" {...props} />
  )
}

interface Props {
  children: React.ReactNode;
  componentType: "web" | "native";
  route: string;
}

function Link(props: Props) {
  const { children, componentType, route } = props;

  const handleOnPress = () => {
    console.log("Pressed");
  };

  return (
    <>
      {
        componentType === "web"?
          <TextLink href={route}>
            {children}
          </TextLink>:
          <TouchableOpacity onPress={handleOnPress}>
            {children}
          </TouchableOpacity>
      }
    </>
  );
}

export default Link;