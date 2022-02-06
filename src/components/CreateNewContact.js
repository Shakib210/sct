import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { createContact } from "../stateManagement/contacts/contactActions";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  Loading: state.contactReducer.loading,
  error: state.contactReducer.error,
});

const CreateNewContact = ({ createContact, Loading, error, pageChange }) => {
  const [status, setStatus] = useState("1");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      phone: "",
      name: "",
      email: "",
      company: "",
      relation: "",
    },
  });

  //Submit Data for create contact
  const onSubmit = async (data) => {
    data.status = status;
    await createContact(data);
    reset({ image: "" });
  };


  return (
    <Box
      width="100%"
      textAlign="center"
      display={"flex"}
      justifyContent="center"
      minH="100vh"
      
    >
      <Box w={["100%", "100%", "80%", "30%"]}  bg="#FAF9FF">
        <Flex
          height={"50px"}
          justifyContent="flex-start"
          borderBottom="1px solid #ECEEF5"
        >
          <Box
            mt={2}
            ml={5}
            bg="white"
            borderRadius={"5px"}
            height={"60%"}
            p={1}
            boxShadow="sm"
            borderBottom="1px solid #ECEEF5"
            onClick={pageChange}
            cursor="pointer"
          >
            <Icon mb={2} w={5} h={5} as={ArrowBackIcon} color="#8083A3" />
          </Box>

          <Text p="2" fontSize="18px" fontWeight={"bold"}>
            Add New Contact
          </Text>
        </Flex>

        <Stack px={3} pt={5}>
          <FormControl>
            <FormLabel htmlFor="phone" color="#B3A4FF">
              Contact Number
            </FormLabel>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true, message: "Company name is required!" }}
              render={({ field }) => (
                <Input
                  id="phone"
                  _focus={{ borderWidth: "2px", borderColor: "#B3A4FF" }}
                  borderColor={"#B3A4FF"}
                  // type="number"
                  {...field}
                />
              )}
            />
            {errors?.phone && (
              <Text fontSize="14px" textAlign={"left"} color="red">
                Phone is required!
              </Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="name" color="#B3A4FF">
              Name
            </FormLabel>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, message: "Company name is required!" }}
              render={({ field }) => (
                <Input
                  id="name"
                  _focus={{ borderWidth: "2px", borderColor: "#B3A4FF" }}
                  borderColor={"#B3A4FF"}
                  {...field}
                />
              )}
            />
            {errors?.name && (
              <Text fontSize="14px" textAlign={"left"} color="red">
                Name is required!
              </Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email" color="#B3A4FF">
              Email
            </FormLabel>
            <Controller
              name="email"
              control={control}
              rules={{ required: true, message: "Company name is required!" }}
              render={({ field }) => (
                <Input
                  id="email"
                  _focus={{ borderWidth: "2px", borderColor: "#B3A4FF" }}
                  borderColor={"#B3A4FF"}
                  {...field}
                />
              )}
            />
            {errors?.email && (
              <Text fontSize="14px" textAlign={"left"} color="red">
                Email is required!
              </Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="company" color="#B3A4FF">
              Company
            </FormLabel>
            <Controller
              name="company"
              control={control}
              rules={{ required: true, message: "Company name is required!" }}
              render={({ field }) => (
                <Input
                  id="company"
                  _focus={{ borderWidth: "2px", borderColor: "#B3A4FF" }}
                  borderColor={"#B3A4FF"}
                  {...field}
                />
              )}
            />
            {errors?.company && (
              <Text fontSize="14px" textAlign={"left"} color="red">
                Company is required!
              </Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="relation" color="#B3A4FF">
              Relation
            </FormLabel>
            <Controller
              name="relation"
              control={control}
              rules={{ required: true, message: "Company name is required!" }}
              render={({ field }) => (
                <Input
                  id="relation"
                  _focus={{ borderWidth: "2px", borderColor: "#B3A4FF" }}
                  borderColor={"#B3A4FF"}
                  {...field}
                />
              )}
            />
            {errors?.relation && (
              <Text textAlign={"left"} fontSize="14px" color="red">
                Relation is required!
              </Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="image" color="#B3A4FF">
              Image URL (Optional)
            </FormLabel>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <Input
                  id="relation"
                  _focus={{ borderWidth: "2px", borderColor: "#B3A4FF" }}
                  borderColor={"#B3A4FF"}
                  {...field}
                />
              )}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="image" color="#B3A4FF">
              Status (Optional)
            </FormLabel>
            <RadioGroup onChange={setStatus} value={status}>
              <Stack direction="row" spacing={5}>
                <Radio value="1">Active</Radio>
                <Radio value="0">Inactive</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <Box width={"100%"} pb={5}>
            <Button
              mt={"100px"}
              onClick={handleSubmit(onSubmit)}
              width={"100%"}
              colorScheme="blue"
              isLoading={Loading}
              loadingText="Saving"
            >
              Save
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default connect(mapStateToProps, { createContact })(CreateNewContact);
