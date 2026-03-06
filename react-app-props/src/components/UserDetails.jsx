function UserDetails() {
    return (
        <UserContext.Consumer>
           <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
        </UserContext.Consumer>
      
    );
  }
  
  export default UserDetails;