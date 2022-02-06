import { Avatar, AvatarBadge, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Highlighter from "react-highlight-words";

const ContactTiles = ({ data,searchText }) => {
  const {image, name, phone}=data
  return (
    <HStack mt={1}>
      <Avatar boxSize="2em" src={image}>
        <AvatarBadge
          boxSize=".8em"
          bg={data?.status == "1" ? "green" : "#FF6347"}
        />
      </Avatar>
      <Stack textAlign="left" pl={2}>
        <Text fontSize="16px" mb="-2" color={"#1A1C1D"} fontWeight="bold">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[searchText]}
            autoEscape={true}
            highlightStyle={{ backgroundColor: "rgba(179, 164, 255, 0.5)" }}
            textToHighlight={name}
          />
        </Text>

        <Text fontSize="14px" mb="-2" color={"#8083A3"} >
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[searchText]}
            autoEscape={true}
            highlightStyle={{ backgroundColor: "rgba(179, 164, 255, 0.5)" }}
            textToHighlight={phone}
          />
        </Text>
        
      </Stack>
    </HStack>
  );
};

export default ContactTiles;
