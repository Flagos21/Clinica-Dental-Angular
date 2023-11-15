export default interface User{
    nombre: String;
    correo: String;
    uid: String;
    password: String;
    perfil: 'admin' | 'usuario'
}