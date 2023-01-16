import { Button, Text } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Fragment, useState } from "react";
import { firebaseApp } from "./firebaseConfig";

const FirebaseFirestore = () => {
    const app = firebaseApp();
    const db = getFirestore(app);
    const [docSnap, setDocSnap]: any = useState();

    const getDbf = async () => {
        const res: any[] = [];
        const fr = await getDocs(collection(db, "Films"));
        fr.forEach(film => {
            res.push(film.data());
        })
    }

    return (
        <Fragment>
            <Button onClick={getDbf}>Retreive data</Button>
            { docSnap && <Text>{JSON.stringify(docSnap)}</Text>}
        </Fragment>
    );
}

export default FirebaseFirestore;