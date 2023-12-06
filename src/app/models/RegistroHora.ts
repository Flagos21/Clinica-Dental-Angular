export class RegistroHora {
    title: string
    funcionario: string;
    date: Date;
    time: Date;
    email: string;
    tel:string;

    constructor(title:string,funcionario: string, date:Date, time: Date, email: string, tel:string){
        this.funcionario=funcionario;
        this.date= date;
        this.time = time;
        this.email = email;
        this.tel = tel;
        this.title=title;
    }

}