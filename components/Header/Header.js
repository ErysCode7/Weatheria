import {
  Avatar,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useGetWeatherQuery } from "../../redux/services/weatherMapApi";
import { getQueryData } from "../../redux/slices/locationSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();

  const [search, setSearch] = useState("Pittsburgh");

  //dispatch the action on mount
  useEffect(() => {
    dispatch(getQueryData(search));
  }, []);

  //handle search
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getQueryData(search));
    setSearch("");
  };

  const { data: weather } = useGetWeatherQuery(search);

  return (
    <>
      <header className="w-full h-20 shadow-sm">
        <Flex className="items-center justify-between gap-5 w-[90%] md:w-[95%] m-auto h-full">
          <div className="hidden md:block">
            <Flex alignItems="center" gap={1} className="h-full">
              <ImLocation2 size="20px" />
              <Heading
                as="h3"
                fontSize={{ base: "16px", md: "27px" }}
                noOfLines={1}
              >
                {weather?.name
                  ? `${weather?.name}, ${weather?.sys?.country}`
                  : "Weatheria"}
              </Heading>
            </Flex>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-[50%]">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearch color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search city"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </form>
          <Flex alignItems="center" className="h-full gap-2 md:gap-5">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <BsSun />}
            </Button>
            <div className="hidden md:block">
              <Tooltip label="Hello, Greetings!" placement="bottom">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </Tooltip>
            </div>
          </Flex>
        </Flex>
      </header>
    </>
  );
};

export default Header;
