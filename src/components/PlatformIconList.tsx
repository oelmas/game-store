import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaAndroid,
    FaApple,
    FaLinux,
    FaGlobe,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import type { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        android: FaAndroid,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: FaGlobe,
    };
    return (
        <HStack marginX="10px" marginY="10px" spacing={2}>
            {platforms.map((platform) => (
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color="orange.500"
                    boxSize="24px"
                />
            ))}
        </HStack>
    );
};
