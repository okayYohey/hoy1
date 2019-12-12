import * as firebase from "firebase"
import "firebase/firestore"
import 'firebase/analytics'
import 'firebase/auth'
import {firebaseConfig} from '@/components/firebaseConfig'
!firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
export default firebase

