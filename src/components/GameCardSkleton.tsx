import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkleton = () => {
  return (
<Card overflow="hidden" bg="gray.600" borderRadius={10}>
    <Skeleton height="350px" width="300px" />
    <CardBody>
        <SkeletonText noOfLines={1} skeletonHeight="20px" width="100%" />
    </CardBody>
    </Card>
  );
};

export default GameCardSkleton;