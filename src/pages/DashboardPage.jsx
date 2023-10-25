import { useSelector, useDispatch } from "react-redux";
import { profilUser } from "../reduxcode/profil/profilDispatch";
import { useEffect } from "react";

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
    </main>
          </div>
          )
}

export default DashboardPage;