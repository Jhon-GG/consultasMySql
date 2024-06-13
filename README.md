1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   SELECT employeeNumber, firstName, lastName, officeCode FROM employees WHERE officeCode = 6;
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerNumber, customerName, phone, city, creditLimit FROM customers WHERE customerNumber = 398;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerNumber, checkNumber, paymentDate, amount FROM payments WHERE customerNumber = 398;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   SELECT orderNumber, orderDate, requiredDate, status FROM orders WHERE status = 'Shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   SELECT SUM(quantityInStock) FROM products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   SELECT employeeNumber, firstName, lastName, reportsTo FROM employees WHERE reportsTo NOT IN ('NULL') ORDER BY employeeNumber;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   SELECT officeCode, city, phone, state, postalCode, country FROM offices WHERE country = 'USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   SELECT customerNumber, customerName, phone, city FROM customers WHERE city = 'Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    SELECT productCode, productName, quantityInStock, buyPrice FROM products WHERE buyPrice > 50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   SELECT * FROM customers JOIN payments ON  customers.customerNumber = payments.customerNumber WHERE customers.customerNumber = 398;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   SELECT employeeNumber, firstName, extension, lastName, officeCode FROM employees;
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   SELECT customerNumber, customerName, phone, city, salesRepEmployeeNumber FROM customers;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT products.productName, SUM(orderdetails.quantityOrdered) AS total_ordered
   FROM products
   JOIN orderdetails ON products.productCode = orderdetails.productCode
   GROUP BY products.productName;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   SELECT offices.officeCode, offices.city, COUNT(employees.employeeNumber) AS numEmpleados
   FROM offices
   LEFT JOIN employees ON offices.officeCode = employees.officeCode
   GROUP BY offices.officeCode, offices.city;
   ```

