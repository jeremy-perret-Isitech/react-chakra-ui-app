import { Fragment, useEffect, useState } from "react";
import Header from "../../component/features/header/Header";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../services/Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import ListMovie from "./ListMovie";
import { useCallback } from "react";
import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

const ListMoviesPage = () => {
    const db = getFirestore(firebaseApp());
    const [isLoading, setLoading] = useState(false);

    const [movies, setMovies]: any[] = useState([]);
    let totalMovies: number = movies.lenght;

    const findAllMovies = useCallback(async () => {
        setLoading(true);
        const newMovies: any[] = [];
        const FirebaseMovies = await getDocs(collection(db, "Films"));

        FirebaseMovies.forEach(movie => {
            setMovies()
            newMovies.push(movie.data());
        })
        setMovies(newMovies);
        setLoading(false);
    }, []);


    useEffect(() => {
        findAllMovies();

    }, [findAllMovies]);

    return (
        <Fragment>
            <Header></Header>
            <Container pt={5} maxW='container.xl'>
                <Button onClick={findAllMovies}>
                    <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                        <RepeatIcon className={isLoading ? "loadingAnimation": ''}/>
                        <Text>Refresh list</Text>
                    </Flex>
                </Button>
                <ListMovie movies={movies} totalMovies={totalMovies}></ListMovie>
            </Container>
        </Fragment>
    )
}

export default ListMoviesPage;