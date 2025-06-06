export class FormatearFechas {
    public static formatear(fecha:Date):Date {
        
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // +1 porque enero es 0
    const dia = String(fecha.getDate()).padStart(2, '0');

    return new Date(`${año}-${mes}-${dia}`);
        
    }
}