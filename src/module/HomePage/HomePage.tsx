import { Fragment } from "react";
import Header from "../../component/features/header/Header";
import { Container } from "@chakra-ui/react";
import { makeDefaultUserDetails } from "../../utils/UserDetails";
import UserAccount from "../../component/User/UserAccount";

const HomePage = () => {
    const userDetails = makeDefaultUserDetails();

    return (
        <Fragment>
            <Header></Header>
            <Container pt={5} maxW='container.xl'>
               <UserAccount userData={userDetails}></UserAccount>
            </Container>

        </Fragment>
    );
};

export default HomePage;