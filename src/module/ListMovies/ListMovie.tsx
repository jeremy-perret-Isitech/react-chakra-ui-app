import MovieCard from "./MovieCard";
import { Flex } from "@chakra-ui/react";
const ListMovie = (props: any) => {
    return (
        <Flex>
            {
                props.movies.map((movie: any, index: number) => (
                    <MovieCard key={index} movie={movie} />
                ))
            }
        </Flex>
    )
}

export default ListMovie;