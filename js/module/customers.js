import { connection } from "../../helpers/conexion.js";

export const getAllLastNameASC = async()=>{
    const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname`);
    return result;
}

export const getAllLastNameDESC = async()=>{
    const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname DESC`);
    return result;
}




// Consultas clase 12/06/2024


// 3.Detalles de un cliente específico (por ejemplo, customerNumber = 101):


export const getCustomerInfoById = async () => {
    const [result] = await connection.query(`
        SELECT 
            customerNumber, customerName, phone, city, creditLimit
        FROM customers 
        WHERE customerNumber = 398
    `);
    return result;
}




// 9.Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):


export const getCustomersByCity = async () => {
    const result = await connection.query(`
        SELECT 
            customerNumber, customerName, phone, city
        FROM customers 
        WHERE city = 'Madrid'
    `);
    return result;
}





// CONSULTAS MULTITABLA


// 3. Listar todos los clientes junto con su representante de ventas:


export const getAllCustomers = async () => {
    const result = await connection.query(`
        SELECT 
            customerNumber, customerName, phone, city, salesRepEmployeeNumber
        FROM customers;
    `);
    return result;
}


// 1. Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:

export const fetchCustomerPayments = async () => {
    const result = await connection.query(`
        SELECT *
        FROM customers
        JOIN payments ON customers.customerNumber = payments.customerNumber
        WHERE customers.customerNumber = 398;
    `);
    return result;
}