export interface UserI{
    nombre: string;
    email: string;
    uid: string;
    password: string;
    perfil: 'usuario' | 'admin',
}