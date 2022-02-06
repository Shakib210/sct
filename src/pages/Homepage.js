import React, { useEffect, useRef, useState } from "react";
import {
  fetchContactList,
  createContact,
} from "../stateManagement/contacts/contactActions";
import {
  HamburgerIcon,
  DownloadIcon,
  SmallAddIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { connect } from "react-redux";
import {
  Text,
  Box,
  Flex,
  Spacer,
  Icon,
  Stack,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useReactToPrint } from 'react-to-print';
import ContactTiles from "../components/ContactTiles";
import Print from "../components/Print";

const mapStateToProps = (state) => ({
  Loading: state.contactReducer.loading,
  contacts: state.contactReducer.allContacts,
  error: state.contactReducer.error,
  contact: state.contactReducer.contact,
});

const Homepage = ({ fetchContactList, contacts, pageChange, focus }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [contactList, setContactList] = useState([]);

  //This function handle print component.
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  //This handle search. User can search by using name,email and phone number. Some time user can see results but there is't any shown match. That's because of email.
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const keyword = e.target.value?.toLowerCase();
    
    if(keyword?.length > 1){
      const data = contacts?.filter(
        (data) =>
          data?.name?.toLowerCase()?.includes(keyword) ||
          data?.email?.toLowerCase()?.includes(keyword) ||
          data?.phone?.toLowerCase()?.includes(keyword)
      );
      setContactList(data);
    }else{
      setContactList(contacts);
    }
    
  };

  //Show search field after click on text
  const searchEnable = () => {
    setIsSearch(true);
  };

  useEffect(() => {
    setContactList(contacts);
  }, [contacts]);

  useEffect(() => {
    fetchContactList();
  }, [focus]);

  return (
    <Box
      width="100%"
      textAlign="center"
      display={"flex"}
      justifyContent="center"
      minH={'100vh'}
    >
      <Box
        w={["100%", "100%", "80%", "30%"]}
        height="100vh"
        bg="#FAF9FF"
        textAlign="center"
      >
        <Flex
          height={"50px"}
          justifyContent="center"
          borderBottom="1px solid #ECEEF5"
        >
          <Box
            mt={2}
            ml={5}
            bg="white"
            borderRadius={"5px"}
            height={"60%"}
            p={1}
            boxShadow="md"
          >
            <Icon mb={2} w={5} h={5} as={HamburgerIcon} color="#8083A3" />
          </Box>

          <Text p="2" fontSize="18px" fontWeight={"bold"}>
            Contacts
          </Text>
          <Spacer />

          <Box
            mt={2}
            bg="white"
            borderRadius={"5px"}
            height={"60%"}
            p={1}
            boxShadow="md"
            onClick={pageChange}
            cursor="pointer"
          >
            <Icon mb={2} w={5} h={5} as={SmallAddIcon} color="#8083A3" />
          </Box>

          <Box
            mt={2}
            mx={3}
            bg="white"
            borderRadius={"5px"}
            height={"60%"}
            p={1}
            boxShadow="md"
            onClick={handlePrint}
            cursor='pointer'
          >
            <Icon mb={2} w={5} h={5} as={DownloadIcon} color="#8083A3" />
          </Box>
        </Flex>

        <Stack ml={5} mt={3}>
          <Text color="#8083A3" textAlign={"left"}>
            Search for a contact
          </Text>
          <HStack>
            {isSearch ? (
              <Box
                width="80%"
                color="#1A1C1D"
                textAlign={"left"}
                fontWeight="bold"
                onClick={searchEnable}
              >
                <Input
                  width="100%"
                  bg="white"
                  borderColor={"transparent"}
                  autoFocus
                  placeholder=""
                  onChange={handleSearch}
                  value={searchText}
                />
              </Box>
            ) : (
              <Box
                width="80%"
                color="#1A1C1D"
                textAlign={"left"}
                fontWeight="bold"
                onClick={searchEnable}
                cursor='pointer'
              >
                <Text>Name, email or phone number</Text>
              </Box>
            )}

            <Box>
              <Icon mb={2} w={5} h={5} as={Search2Icon} color="#8083A3" />
            </Box>
          </HStack>
        </Stack>

        <Stack ml={5} mt={3}>
          {contactList?.map((data) => (
            <Box pb={3}>
              <ContactTiles searchText={searchText} data={data} />
            </Box>
          ))}
        </Stack>
      </Box>

      <Box display='none'>
           <Print ref={componentRef} contactList={contactList} />
      </Box>
    </Box>
  );
};

export default connect(mapStateToProps, { fetchContactList, createContact })(
  Homepage
);
