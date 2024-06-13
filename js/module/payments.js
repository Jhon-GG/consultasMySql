import { connection } from "../../helpers/conexion.js";


// 4. Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):

export const fetchCustomerPaymentsByCustomerNumber = async () => {
    const result = await connection.query(`
        SELECT customerNumber, checkNumber, paymentDate, amount
        FROM payments
        WHERE customerNumber = 398;
    `);
    return result;
}
