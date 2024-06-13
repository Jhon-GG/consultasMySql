import { connection } from "../../helpers/conexion.js";


export const getAllLastName = async()=>{
    const [result] = await connection.query(`SELECT lastName FROM employees`);
    return result;
}

export const getAllFullNameJob = async()=>{
    const [result] = await connection.query(`SELECT CONCAT(firstName," ", lastName) as 'fullName', jobTitle FROM employees`);
    return result;
}

export const getAll = async()=>{
    const [result] = await connection.query(`SELECT lastName, firstName, extension, email, officeCode, reportsTo, jobTitle FROM employees`);
    return result;
}

export const getAllJobTitle = async({cargo} = {cargo: "Sales Rep"})=>{
    const [result] = await connection.execute(`SELECT CONCAT(firstName," ", lastName) as 'fullName' FROM employees where jobTitle = ?`, [cargo] );
    result["count"] = result.length;
    return result;
}





// Consultas clase 12/06/2024


// 2.Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):

export const getEmployeesByOffice = async () => {
    const result = await connection.query(`
        SELECT 
            employeeNumber, firstName, lastName, officeCode
        FROM employees
        WHERE officeCode = 6;
    `);
    return result;
}




// 7. Lista de todos los empleados con su jefe (si tienen):

export const getEmployeesWithReportsTo = async () => {
    const result = await connection.query(`
        SELECT 
            employeeNumber, firstName, lastName, reportsTo
        FROM employees
        WHERE reportsTo IS NOT NULL
        ORDER BY employeeNumber;
    `);
    return result;
}




// CONSULTAS MULTITABLA:

// 2. Listar todos los empleados junto con la oficina en la que trabajan:


export const fetchEmployees = async () => {
    const result = await connection.query(`
        SELECT 
            employeeNumber, firstName, extension, lastName, officeCode
        FROM employees;
    `);
    return result;
}

