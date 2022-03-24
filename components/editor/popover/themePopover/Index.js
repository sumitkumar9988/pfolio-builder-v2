import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  VStack,
  HStack,
  Heading,
  Flex,
  Spacer,
  Icon,
  Text,
  Circle,
  Divider,
  Stack,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";

const ThemeDemo = () => {
  return (
    <Box cursor={"pointer"} className="tw-w-24  tw-h-12 tw-my-2">
      <Stack gap={1} borderWidth={"2px"} p={2} bg={"blue.400"} rounded={"xl"}>
        <Box height="20px" width={"60px"} bg="red.500" />
        <Box height="20px" bg="White" />
      </Stack>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      <PopoverContent w={"380px"} px="12px" py="12px">
        <PopoverArrow />
        <PopoverBody>
          <Box h="80vh" overflowY={"scroll"}>
            <VStack spacing={8} align="stretch">
              <VStack spacing={4} align="stretch">
                <Heading
                  fontSize="lg"
                  fontFamily={"heading"}
                  fontWeight="bold"
                  textAlign={"start"}
                >
                  Presets
                </Heading>
                <Flex column-gap={4} row-gap={2} wrap={"wrap"}>
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />
                  <ThemeDemo />

                </Flex>
              </VStack>
              <Box>
                <Heading
                  fontSize="lg"
                  fontFamily={"heading"}
                  fontWeight="bold"
                  textAlign={"start"}
                >
                  Edit theme
                </Heading>
              </Box>
              <Box>
                <VStack spacing={4} align="stretch">
                  <Flex>
                    <Heading
                      fontSize="md"
                      fontFamily={"heading"}
                      fontWeight="bold"
                      textAlign={"start"}
                    >
                      Colors
                    </Heading>
                    <Spacer />

                    <Icon as={AddIcon} cursor={"pointer"} />
                  </Flex>
                  <VStack spacing={4} align="stretch">
                    <Flex>
                      <Text
                        fontSize="md"
                        fontFamily={"body"}
                        fontWeight="bold"
                        textAlign={"start"}
                      >
                        Background
                      </Text>
                      <Spacer />
                      <Circle
                        size="28px"
                        border={"2px"}
                        borderColor="black"
                        bg="white"
                        color="white"
                        cursor={"pointer"}
                      />
                    </Flex>
                    <Flex>
                      <Text
                        fontSize="md"
                        fontFamily={"body"}
                        fontWeight="bold"
                        textAlign={"start"}
                      >
                        Primary
                      </Text>
                      <Spacer />
                      <Circle
                        size="28px"
                        bg="green.500"
                        color="white"
                        cursor={"pointer"}
                      />
                    </Flex>{" "}
                    <Flex>
                      <Text
                        fontSize="md"
                        fontFamily={"body"}
                        fontWeight="bold"
                        textAlign={"start"}
                      >
                        Secondary
                      </Text>
                      <Spacer />
                      <HStack spacing={2}>
                        <Circle
                          size="28px"
                          border={"2px"}
                          borderColor="black"
                          bg="black"
                          cursor={"pointer"}
                          color="black"
                        />
                        <Circle
                          size="28px"
                          border={"2px"}
                          borderColor="black"
                          bg="blue.500"
                          color="white"
                          cursor={"pointer"}
                        />
                      </HStack>
                    </Flex>
                  </VStack>
                </VStack>
              </Box>
              <Divider borderWidth={"1px"} borderColor={"gray.500"} />
              <Box>
                <VStack spacing={4} align="stretch">
                  <Flex>
                    <Heading
                      fontSize="md"
                      fontFamily={"heading"}
                      fontWeight="bold"
                      textAlign={"start"}
                    >
                      Fonts
                    </Heading>
                    <Spacer />
                    <Icon as={AddIcon} cursor={"pointer"} />
                  </Flex>
                  <Flex>
                    <Popover placement="right">
                      <PopoverTrigger>
                        <Button w={80} px={40}>
                          Trigger
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                          Are you sure you want to have that milkshake?
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Box>
  );
};

export default Index;
