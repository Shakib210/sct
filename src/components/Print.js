import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import ContactTiles from "./ContactTiles";

const Print = React.forwardRef(({contactList}, ref) => {
  return (
    <div ref={ref} style={{width:'100%'}}>
      <Stack mx={5} mt={10} width={"100%"} display='flex' justifyContent={'center'}>
        {contactList?.map((data) => (
          <Box pb={3}>
            <ContactTiles searchText={''} data={data} />
          </Box>
        ))}
      </Stack>
    </div>
  );
});

export default Print;
