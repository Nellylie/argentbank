import { useSelector, useDispatch } from "react-redux";
import { profilUser } from "../reduxcode/profil/profilDispatch";
import { useEffect } from "react";
import Account from "../components/Account";

const listAccount = [
  {
  title:"Argent Bank Checking (x8349)",
  solde:"$2,082.79",
  description:"Available Balance"
  },
  {
  title:"Argent Bank Savings (x6712)",
  solde:"$10,928.42",
  description:"Available Balance"
  },
  {
  title:"Argent Bank Credit Card (x8349)",
  solde:"$184.30",
  description:"Current Balance"
  }
]



function DashboardPage(){
    const profile = useSelector((state) => state.profil.profilInfos);
    const token = useSelector((state) => state.authentification.token);
    const dispatch = useDispatch();
    console.log("profil infos", profile);
    useEffect(() => {
        if(token) {
            dispatch(profilUser(token));
        }
    }, [token, dispatch]);

    return(
    <div> 
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{profile?.firstName + " " + profile?.lastName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {listAccount.map((element) =>(<Account title= {element.title} solde = {element.solde} description = {element.description}/>)
      )}
    </main>
          </div>
          )
}

export default DashboardPage;