import { useAuth0 } from "@auth0/auth0-react";

const Profile = () =>{
    const { user , isAuthenticated } = useAuth0();
    
    return(

        isAuthenticated &&(       <div>
            <h1>Bienvenido</h1>
            <h1>{user.name}</h1>
            <img src={user.picture}/>
            <p>{user.email}</p>
            </div>
        )
    )
}
export default Profile;