import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="releaseDate">Release Date</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
