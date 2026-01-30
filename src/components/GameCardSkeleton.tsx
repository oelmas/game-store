import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
    return (
        <GameCardContainer>
            <Card >
                <Skeleton height="350px" width="300px" />
                <CardBody>
                    <SkeletonText noOfLines={1} skeletonHeight="20px" width="100%" />
                </CardBody>
            </Card>
        </GameCardContainer>

    );
};

export default GameCardSkeleton;