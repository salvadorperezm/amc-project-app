import { SunIcon, UnlockIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";

function App() {
  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Button
        size={"lg"}
        mx={"10px"}
        colorScheme={"yellow"}
        color={"white"}
        leftIcon={<SunIcon />}
      >
        Encender
      </Button>
      <Button
        size={"lg"}
        mx={"10px"}
        colorScheme={"linkedin"}
        color={"white"}
        leftIcon={<UnlockIcon />}
      >
        Apagar
      </Button>
    </Box>
  );
}

export default App;
