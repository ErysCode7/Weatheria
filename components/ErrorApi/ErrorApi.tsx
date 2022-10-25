import { Text, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";

const ErrorApi: NextPage = () => {
  const textColor = useColorModeValue("#333", "#d1d8e0");

  return (
    <>
      <div className="flex flex-col items-center mt-10 md:mt-0 ">
        <div className=" relative h-[400px] w-full md:h-[350px] md:w-[400px] lg:w-[500px] ">
          <Image src="/svg/504.svg" alt="" layout="fill" objectFit="contain" />
        </div>
        <Text
          className="text-xl md:text-2xl w-[85%] md:w-[70%] font-bold"
          color={textColor}
        >
          Weather BIT API exceeds request! minimun 25 request per day please
          comeback tomorrow.
        </Text>
      </div>
    </>
  );
};

export default ErrorApi;
