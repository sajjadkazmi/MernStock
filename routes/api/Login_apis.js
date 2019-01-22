const express = require('express');
const router = express.Router();
// const mysql = require('mysql');
const connection = require('../../config/connection');
var server = require('../../server')
router.post('/Login_user', (req, res) => {
    console.log("req", req.body)
    server.request.query(`SELECT * FROM Setup_User where Email='${req.body.email}' and Password='${req.body.password}'`, (error, result) => {
        if (error) {
            return res.send(error)
        }
        else {
            let RoleId = result.recordset[0].RoleId;
            server.request.query(`SELECT  smi.Id as MenuId,smi.MenuName,smi.MenuUrl,smi.ParentId from  Setup_Role sr join Setup_Roll_Access ra on sr.id=ra.RoleId join Setup_MenuItem smi on ra.MenuId=smi.Id where sr.id=${RoleId} `, (error2, result2) => {
                if (error2) {
                    return res.send(error2)
                }
                else {  
            return res.json({ data: result.recordset, isLogin: true,data2:result2.recordset })
        }
    })
}

            })
});


router.get('/', (req, res) => {

    server.request.query(`SELECT u.id as Userid ,CONCAT(u.FirstName,u.LastName) as FullName ,u.Email ,u.CreatedDate,u.CreatedBy,u.ModifiedBy,u.ModifiedBy,u.RoleId,r.RoleName, u.DepartmentId  ,d.DepartmentName FROM  Setup_User u join Setup_Role r on u.RoleId=r.Id join Setup_Department d on u.DepartmentId=d.Id  where u.Email='${req.body.email}' and u.Password='${req.body.password}' and u.IsActive='True'`, (error, result) => {
        if (error) {
            return res.send(error)
        }
        else {
        
}
})
});

module.exports = router;

