import { useSelector, useDispatch } from "react-redux";
import { profilUser, updateProfilInfos } from "../reduxcode/profil/profilDispatch";
import { updateProfileName } from '../reduxcode/profil/actionRedux';
import { useEffect, useState } from "react";
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
    const [editMode, setEditMode] = useState(false);
    const [firstName, setFirstName] = useState(profile?.firstName);
    const [lastName, setLastName] = useState(profile?.lastName);
    

    useEffect(() => {
        if(token) {
            dispatch(profilUser(token));
            if(localStorage.getItem("remember")){
                localStorage.setItem("user", JSON.stringify({token, profile}))
                } else {
                    localStorage.removeItem("user");
                }
        }
       
    }, [token, dispatch]);


    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        dispatch(updateProfileName(firstName, lastName));
        dispatch(updateProfilInfos(token, firstName, lastName));
        setEditMode(false);
    };

    const handleEditClose = () => {
        setEditMode(false);
    };

    return(
    <div> 
    <main className="main bg-dark">
      <div className="header"><h1>Welcome back</h1>

       {editMode ? (
                        <div className="edition-container">
                            <div className="edition-input-firstname">
                              <input type="text" placeholder = {profile.firstName} 
                              value={firstName} onChange={(e) => setFirstName(e.target.value || profile.lastName)} />
                              <button onClick={handleEditClose}>Close</button>
                            </div>
                            <div className="edition-input-lastname">
                              <input type="text" placeholder = {profile.lastName}
                              value={lastName} onChange={(e) => setLastName(e.target.value || profile.lastName)} />
                              <button onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1>{profile?.firstName + " " + profile?.lastName}!</h1>
                            <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                        </>
                    )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {listAccount.map((element, i) =>(<Account key={i} title= {element.title} solde = {element.solde} description = {element.description}/>)
      )}
    </main>
          </div>
          )
}

export default DashboardPage;