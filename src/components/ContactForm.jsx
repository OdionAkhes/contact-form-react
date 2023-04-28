/** @format */
import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,

  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { nanoid } from "nanoid";


const ContactForm = () => {
  const [statusMessage, setStatusMessage] = React.useState(null);
  const [statusType, setStatusType] = React.useState(null);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, actions) => {
      try {
        await axios.post(
          "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
          {
            id: nanoid(),
            ...values,
          }
        );
        actions.resetForm();
        setStatusMessage("Form submitted successfully");
        setStatusType("success");
      } catch (error) {
        setStatusMessage("An error occurred while submitting the form");
        setStatusType("error");
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {statusMessage && (
        <Box
          mb={5}
          p={6}
          colorScheme="red"
          borderRadius="md"
          bgColor={`${statusType === "error" ? "red.100" : "green.100"}`}
        >
          {statusType === "error" && (
            <span role="img" aria-label="warning">
              ⚠️
            </span>
          )}
          {statusMessage}
        </Box>
      )}

      <VStack spacing={4}>
        <FormControl isInvalid={formik.errors.name && formik.touched.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Name"
            {...formik.getFieldProps("name")}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input
            id="subject"
            placeholder="Subject"
            {...formik.getFieldProps("subject")}
          />
        </FormControl>

        <FormControl
          isInvalid={formik.errors.message && formik.touched.message}
        >
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            placeholder="Message"
            {...formik.getFieldProps("message")}
          />
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          isLoading={formik.isSubmitting}
          colorScheme="blue"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default ContactForm

