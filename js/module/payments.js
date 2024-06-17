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


// 7. Listar todos los pagos realizados, junto con la información del cliente y su representante de ventas:

export const getAllPaymentsWithClientsInformationAndSalesRepre = async () => {
    const result = await connection.query(`
    SELECT 
        p.customerNumber,
        c.customerName,
        c.contactLastName,
        c.contactFirstName,
        c.phone,
        e.firstName AS salesRepFirstName,
        e.lastName AS salesRepLastName,
        p.checkNumber,
        p.paymentDate,
        p.amount
    FROM 
        payments p
    JOIN 
        customers c ON p.customerNumber = c.customerNumber
    LEFT JOIN 
        employees e ON c.salesRepEmployeeNumber = e.employeeNumber
    ORDER BY 
        p.paymentDate;
    `);
    return result;
}


// 10. Obtener el total de pagos realizados por cada cliente y el nombre del representante de ventas asignado:

export const getAllPaymentsAndSalesRepresentativeName = async () => {
    const result = await connection.query(`
    SELECT 
        p.customerNumber,
        c.customerName,
        c.contactLastName,
        c.contactFirstName,
        e.firstName AS salesRepFirstName,
        e.lastName AS salesRepLastName,
        SUM(p.amount) AS totalPayments
    FROM 
        payments p
    JOIN 
        customers c ON p.customerNumber = c.customerNumber
    LEFT JOIN 
        employees e ON c.salesRepEmployeeNumber = e.employeeNumber
    GROUP BY 
        p.customerNumber, c.customerName, c.contactLastName, c.contactFirstName, e.firstName, e.lastName
    ORDER BY 
        totalPayments DESC;
    `);
    return result;
}