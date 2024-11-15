export const loginMock = (users, email, password) => {

    const user = users.find( (element) => element.email == email);
    if(!user) {
        return {
            ok: false,
            error: "El email no está registrado",
        };
    }

    if(user.password != password) {
        return {
            ok: false,
            error: "La contraseña no es correcta",
        };
    }

    delete user.password;

    return{
        ok: true,
        user,
    }
};