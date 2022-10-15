import {
  Avatar,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useGetSixDayForecastQuery } from "../../redux/services/weatherBitApi";
import {
  getQueryData,
  latitude,
  longtitude,
} from "../../redux/slices/locationSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();

  const [search, setSearch] = useState("Taguig");

  useEffect(() => {
    dispatch(getQueryData(search));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getQueryData(search));
    setSearch("");
  };

  const lat = useSelector(latitude);
  const lon = useSelector(longtitude);
  const { data: weekForeCast } = useGetSixDayForecastQuery({ lat, lon });

  return (
    <>
      <header className="w-full h-20 md:h-28 shadow-sm">
        <Flex className="items-center justify-between gap-5 w-[90%] md:w-[95%] m-auto h-full">
          <div className="hidden md:block">
            <Flex alignItems="center" gap={1} className="h-full">
              <Heading
                as="h1"
                fontSize={{ base: "24px", md: "50px" }}
                noOfLines={1}
              >
                Weatheria
              </Heading>
              {/* <ImLocation2 size="20px" />
            <Heading
              as="h3"
              fontSize={{ base: "16px", md: "27px" }}
              noOfLines={1}
            >
              Weatheria, USA
            </Heading> */}
            </Flex>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
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
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </div>
          </Flex>
        </Flex>
      </header>
    </>
  );
};

export default Header;
