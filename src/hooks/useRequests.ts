// import { useEffect, useState } from "react"
// import { database } from '../services/firebase'
// import { LogBox } from 'react-native';
// import { ProductType } from "./useProducts";
// import UseAuthFirebase from "./useAuth";

import { useContext } from "react"
import { RequestContext } from "../contexts/RequestContext"

// type RequestType = {
//   id: string
//   author: string
//   deliveryPlace: {
//     complement: string
//     homeNumber: string
//     latitude: number
//     longitude: number
//     referencePoint: string
//     residenceType: string
//     street: string
//   }
//   paymenthMethod: {
//     method: string
//     paymenth: string
//   }
//   items: Array<ProductType>
//   total: string
//   deliveryDate: string
//   whenDone: string
// }

// export function useRequests(){
//   // const { userId } = UseAuthFirebase()
//   // const [ request, setRequest ] = useState<RequestType[]>()
//   LogBox.ignoreLogs(['Setting a timer']);



  
//   useEffect(() => {
//     // const requestsRef = database.ref('orders/')
    
//     // requestsRef.orderByChild(userId).equalTo(true).on("author/id", (Data) => {
//     //   console.log(Data.val(), Data.key);
//     // }

//     // if(userId){
//       // requestsRef.orderByChild("author/id").equalTo(userId)
//       // requestsRef.orderByChild("author/").equalTo(userId).on("child_added", function(data) {
//       //   console.log(data);
//       //   console.log("Equal to filter: " + data.val());
//       // });
//     // }
//     // console.log('---')
    
//   //   requestsRef.orderByChild("author/").equalTo(userId).on("child_added", requests =>{
//   //     const data = requests.val()
//   //     console.log(data)
//   //     if(data){
//   //         const parsedRequests = Object.entries(data).map(([key, value]) =>{
//   //           return{
//   //             id: key,
//   //             author: value.author,
//   //             deliveryPlace: {
//   //               complement: value.complement,
//   //               homeNumber: value.homeNumber,
//   //               latitude: value.latitude,
//   //               longitude: value.longitude,
//   //               referencePoint: value.referencePoint,
//   //               residenceType: value.residenceType,
//   //               street: value.street,
//   //             },
//   //             paymenthMethod: {
//   //               method: value.method,
//   //               paymenth: value.paymenth,
//   //             },
//   //             // items: Array<ProductType>,
//   //             total: value.total,
//   //             deliveryDate: value.deliveryDate,
//   //             whenDone: value.whenDone,
//   //         }
//   //       }) 
//   //       setRequest(parsedRequests)
//   //     }
//   // })
//   },[])
//   return{
//     request
//   }
// }

const useRequests = () => {
  const value = useContext(RequestContext)
  return value
}
export default useRequests
