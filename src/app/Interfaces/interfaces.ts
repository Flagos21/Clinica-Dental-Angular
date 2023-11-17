export interface UserI{
    nombre: String;
    email: String;
    uid: String;
    password: String;
    perfil: 'usuario' | 'admin',
}