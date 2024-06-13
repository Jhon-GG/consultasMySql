import { 
    getAllLastNameASC, 
    getAllLastNameDESC,
    getCustomerInfoById,
    getCustomersByCity,
    getAllCustomers,
    fetchCustomerPayments
} from "./js/module/customers.js";

import { getAll, 
    getAllLastName, 
    getAllFullNameJob, 
    getAllJobTitle ,
    getEmployeesByOffice,
    getEmployeesWithReportsTo,
    fetchEmployees
} from "./js/module/employees.js";


import { 
    fetchOfficesByCountry,
    fetchOfficeEmployeeCounts
} from "./js/module/offices.js";

import { 
    fetchShippedOrders
} from "./js/module/orders.js";


import { 
    fetchCustomerPaymentsByCustomerNumber
} from "./js/module/payments.js";

import { 
    getProductStock,
    getTotalStockQuantity,
    getProductsByPriceGreaterThan50,
    getProductTotalOrdered
} from "./js/module/products.js";




/* 
console.log(await getAllLastNameDESC()); */


/* console.log(await getCustomerInfoById()); */

/* console.log(await getCustomersByCity()); */

/* console.log(await getAllCustomers()); */


/* console.log(await getEmployeesByOffice()); */

/* console.log(await getEmployeesWithReportsTo()); */

/* console.log(await fetchEmployees()); */
/* 
console.log(await fetchOfficesByCountry()); */


/* console.log(await fetchOfficeEmployeeCounts()); */
/* 
console.log(await fetchShippedOrders()); */

/* 
console.log(await fetchCustomerPayments()); */


/* 
console.log(await fetchCustomerPaymentsByCustomerNumber()); */


/* console.log(await getProductStock()); */

/* console.log(await getTotalStockQuantity()); */

/* console.log(await getProductsByPriceGreaterThan50()); */

console.log(await getProductTotalOrdered());