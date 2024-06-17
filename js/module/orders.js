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


// Segunda parte de las consultas


// 6 . Obtener detalles de los pedidos, incluyendo la información del cliente y los productos ordenados:


export const getAllOrdersWithClientsAndOrderedProducts = async () => {
    const result = await connection.query(`
        SELECT 
            o.orderNumber,
            o.orderDate,
            o.status,
            c.customerName,
            c.contactLastName,
            c.contactFirstName,
            c.phone,
            p.productName,
            od.quantityOrdered,
            od.priceEach
        FROM 
            orders o
        JOIN 
            customers c ON o.customerNumber = c.customerNumber
        JOIN 
            orderdetails od ON o.orderNumber = od.orderNumber
        JOIN 
            products p ON od.productCode = p.productCode
        ORDER BY 
            o.orderNumber;
        `);
    return result;
}


// 9. Listar todos los pedidos con detalles del cliente y el nombre del representante de ventas:


export const getAllClientsWithSalesRepresentatives = async () => {
    const result = await connection.query(`
    SELECT 
        o.orderNumber,
        o.orderDate,
        o.status,
        c.customerName,
        c.contactLastName,
        c.contactFirstName,
        e.firstName AS salesRepFirstName,
        e.lastName AS salesRepLastName
    FROM 
        orders o
    JOIN 
        customers c ON o.customerNumber = c.customerNumber
    LEFT JOIN 
        employees e ON c.salesRepEmployeeNumber = e.employeeNumber
    ORDER BY 
        o.orderDate;
        `);
    return result;
}


