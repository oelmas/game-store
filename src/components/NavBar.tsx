import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

export default function NavBar() {
    return (
        <HStack>
            <Image src={logo} alt="logo" boxSize="60px" />
            <Text fontSize="2xl" fontWeight="light">NavBar</Text>
        </HStack>
    );
}
