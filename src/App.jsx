import { SunIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  useToast,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [isLoadingTurnOn, setIsLoadingTurnOn] = useState(false);
  const [isLoadingLock, setIsLoadingLock] = useState(false);

  const toast = useToast();

  const turnOnButton = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    setIsLoadingTurnOn(true);
    try {
      await axios.post(`${backendUrl}/requests`, {
        valueOne: "1",
        valueTwo: "abc",
        valueThree: "1",
      });
      toast({
        title: "Exito.",
        description: "Se encendera el LED.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsLoadingTurnOn(false);
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ha ocurrido un error.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsLoadingTurnOn(false);
    }
  };

  const turnOffButton = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    setIsLoadingLock(true);
    try {
      await axios.post(`${backendUrl}/requests`, {
        valueOne: "2",
        valueTwo: "abc",
        valueThree: "1",
      });
      toast({
        title: "Exito.",
        description: "Se abrira la puerta.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsLoadingLock(false);
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ha ocurrido un error.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsLoadingLock(false);
    }
  };

  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box>
        <Box marginBlockEnd={"10px"}>
          <Heading>Elaborado por:</Heading>
          <UnorderedList>
            <ListItem>Katherine Sofia Delgado Lopez</ListItem>
            <ListItem>Jonathan de Jesus Mejia Guadamuz</ListItem>
            <ListItem>Edgardo Moises Bermudez Plata</ListItem>
            <ListItem>Salvador Antonio Perez Montiel</ListItem>
          </UnorderedList>
        </Box>
        <Button
          size={"lg"}
          mx={"10px"}
          colorScheme={"yellow"}
          color={"black"}
          leftIcon={<SunIcon />}
          onClick={turnOnButton}
          isLoading={isLoadingTurnOn}
        >
          Luz
        </Button>
        <Button
          size={"lg"}
          colorScheme={"linkedin"}
          color={"black"}
          leftIcon={<UnlockIcon />}
          onClick={turnOffButton}
          isLoading={isLoadingLock}
        >
          Puerta
        </Button>
      </Box>
    </Box>
  );
}

export default App;
