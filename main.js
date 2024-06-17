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
    fetchShippedOrders,
    getAllOrdersWithClientsAndOrderedProducts
} from "./js/module/orders.js";


import { 
    fetchCustomerPaymentsByCustomerNumber,
    getAllPaymentsWithClientsInformationAndSalesRepre
} from "./js/module/payments.js";

import { 
    getProductStock,
    getTotalStockQuantity,
    getProductsByPriceGreaterThan50,
    getProductTotalOrdered
} from "./js/module/products.js";





console.log(await getAllPaymentsWithClientsInformationAndSalesRepre());

