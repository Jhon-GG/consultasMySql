import { connection } from "../../helpers/conexion.js";


// 5. Obtener todos los pedidos con estado 'Shipped':

export const fetchShippedOrders = async () => {
    const result = await connection.query(`
        SELECT orderNumber, orderDate, requiredDate, status
        FROM orders
        WHERE status = 'Shipped';
    `);
    return result;
}








