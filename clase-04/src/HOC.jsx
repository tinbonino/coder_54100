

function withAuth(Component){
    return function WithAuth(props){
        const isAuth= true; // Aqui iria  la lógica para determinar si pasa o no.
        return <Component {...props} isAuth={isAuth}/> // retorna true o false
    };
}


function Profile(props) {
  return (
    <div>
        {props.isAuth ? (
          <p>Bienvenido, usuario autorizado</p>  
        ):(
            <p>Inicie sesión para ingresar</p>
        )}
    </div>
  );
}

const ProfileWithAuth = withAuth(Profile)

function HOC(){
    return (
        <div>
            <h2>Ejemplo de High Order Component</h2>
            <ProfileWithAuth/>
        </div>
    )
}

export default HOC