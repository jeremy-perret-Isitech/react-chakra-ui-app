import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { createContext, useReducer } from "react";
import ReducerOption from "../../services/reducer";
import { UserDetails } from "../../utils/UserDetails";
import { Heading, ListItem, useColorModeValue, Box, List } from "@chakra-ui/react";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import UserHistory from "./UserHistory";

export interface IUserHistory {
    id: string;
    action: string;
    newValue: string;
    date: Date;
}
const defaultValue: any[] = [];
export const UserContext = createContext(defaultValue);

// Data for example
const OTHER_USER_DATA: UserDetails = {
    uid: "007",
    accessToken: "Access Token",
    email: "another_mail@mail.com",
    emailVerified: false,
    createdAt: new Date("2016-11-08")
}

const UserAccount = (props: any) => {
    const userData: UserDetails = props.userData

    const userHistoryReducer = (userHistory: any[], action: ReducerOption): any[] => {
        switch (action.type) {
            case 'ADD_HISTORY_ACTION':
                return [action.payload, ...userHistory];
            default:
                console.log("Nothing changed");
                return userHistory;

        }
    };

    const userAccountReducer = (loggedUserData: any, action: ReducerOption) => {
        switch (action.type) {
            case 'MODIFY_USER_UID':
                return { ...loggedUserData, uid: action.payload.uid };

            case 'MODIFY_USER_MAIL':
                return { ...loggedUserData, email: action.payload.email };

            case 'MODIFY_USER_DATE':
                return { ...loggedUserData, createdAt: action.payload.createdAt };

            case 'MODIFY_USER_VERIFICATION':
                return { ...loggedUserData, emailVerified: action.payload.emailVerified };
            default:
                console.log("Nothing changed");
                return loggedUserData;

        }
    };

    const [storeUserData, dispatch] = useReducer(userAccountReducer, props.userData);
    const [userHistory, historyDispatch] = useReducer(userHistoryReducer, []);

    const handleUserActionHistory = (action: string, newValue: string) => {
        const userHistoryEvent: IUserHistory = {
            id: userHistory[userHistory.length + 1],
            action: action,
            newValue: newValue,
            date: new Date()
        }

        const reducerRequest: ReducerOption = { type: "ADD_HISTORY_ACTION", payload: userHistoryEvent }
        historyDispatch(reducerRequest);
        console.log(userHistory);

    }

    const changeUserUid = () => {
        const newUid = (storeUserData.uid === OTHER_USER_DATA.uid ? userData.uid : OTHER_USER_DATA.uid)
        const reducerRequest: ReducerOption = { type: "MODIFY_USER_UID", payload: { uid: newUid } }
        dispatch(reducerRequest);
        handleUserActionHistory('Changed uid', newUid)
    }

    const changeUserMail = () => {
        const newEmail = (storeUserData.email === OTHER_USER_DATA.email ? userData.email : OTHER_USER_DATA.email)
        const reducerRequest: ReducerOption = { type: "MODIFY_USER_MAIL", payload: { email: newEmail } }
        dispatch(reducerRequest);
        handleUserActionHistory('Changed mail', newEmail)
    }

    const changeUserDate = () => {
        const newDate = (storeUserData.createdAt === OTHER_USER_DATA.createdAt ? userData.createdAt : OTHER_USER_DATA.createdAt)
        const reducerRequest: ReducerOption = { type: "MODIFY_USER_DATE", payload: { createdAt: newDate } }
        dispatch(reducerRequest);
        handleUserActionHistory('Changed date', newDate.toDateString())
    }

    const changeUserDetail = () => {
        const newVerification = (storeUserData.emailVerified === OTHER_USER_DATA.emailVerified ? userData.emailVerified : OTHER_USER_DATA.emailVerified)
        const reducerRequest: ReducerOption = { type: "MODIFY_USER_VERIFICATION", payload: { emailVerified: newVerification } }
        dispatch(reducerRequest);
        handleUserActionHistory('Changed mail verification', newVerification ? "active" : "inactive")
    }
    return (
        <UserContext.Provider value={userHistory}>
            <Container size={'lg'}>
                <Box>
                    <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={useColorModeValue('yellow.500', 'yellow.300')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        User Details
                    </Text>
                    <List spacing={2}>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                UID :
                            </Text>{' '}
                            {storeUserData.uid}
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Email :
                            </Text>{' '}
                            {storeUserData.email}
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Creation Date :
                            </Text>{' '}
                            {(new Date(storeUserData.createdAt).toDateString())}
                        </ListItem>
                        <ListItem>
                            <Flex direction="column">
                                <Text fontWeight={'bold'}>
                                    Verified : {storeUserData.emailVerified ?
                                        <CheckIcon color='green.500' /> : <CloseIcon color='red.500' />
                                    }
                                </Text>
                            </Flex>
                        </ListItem>
                    </List>
                </Box>
            </Container>
            <Flex gap={5} mt={5} direction="row" alignItems="center" justifyContent="center">
                <Button onClick={changeUserUid}>
                    <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                        <Text>Change user uid</Text>
                    </Flex>
                </Button>
                <Button onClick={changeUserMail}>
                    <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                        <Text>Change user Mail</Text>
                    </Flex>
                </Button>
                <Button onClick={changeUserDate}>
                    <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                        <Text>Change user date</Text>
                    </Flex>
                </Button>
                <Button onClick={changeUserDetail}>
                    <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                        <Text>Change mail verification</Text>
                    </Flex>
                </Button>
            </Flex>
            <Flex mt={10} flexDirection="column">
                <Heading borderBottom='1px' borderColor='black' fontSize={24}>User Action History</Heading>
                <UserHistory></UserHistory>
            </Flex>
        </UserContext.Provider>
    )
}

export default UserAccount;