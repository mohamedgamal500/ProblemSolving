/* write your SQL query below */

/*
SELECT a.ID ,a.Name ,c.DivisionName, b.Name AS ManagerName ,a.Salary 
FROM  maintable_37W3Z a 
join cb_companydivisions C on  a.DivisionID = C.ID 
join maintable_37W3Z b on a.ManagerID = b.ID
where a.ManagerID is NOT NULL
ORDER BY a.Salary DESC LIMIT 1,1
*/
