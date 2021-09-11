/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
let employeeMap = new Map();
var GetImportance = function(employees, id) {
    // dfs
    // create a hashmap to query employees
    // apply dfs recursively to calculate importance
    // time complexity - O(n)
    // space complexity - O(n)
    for(let i=0; i<employees.length; i++){
        employeeMap.set(employees[i].id, employees[i]);
    }
   return dfs(id);
};
function dfs(id){
    let employee = employeeMap.get(id);
    let ans  = employee.importance;
    for(let subId of employee.subordinates){
        ans = ans + dfs(subId);
    }
    return ans;
}