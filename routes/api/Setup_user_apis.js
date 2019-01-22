const express = require('express');
const router = express.Router();
var server = require('../../server')



router.put('/DeleteUser', (req, res) => {
    server.request.query(`Update Setup_User SET IsActive='false' where id =${req.body.UserId}`, (err, result) => {
        if (err) {
            return res.send(err)
            console.log("error", err)
        }
        else {
            console.log("result", result);
            server.request.query(`select u.Id as UserId, r.id as RoleId ,r.RoleName,u.FullName,u.Email,d.Id as DepartmentId , d.DepartmentName ,u.CreatedBy,u.CreatedDate,u.ModifiedBy,u.ModifiedDate from Setup_User u join Setup_Role r on u.RoleId=r.Id join Setup_Department d on u.DepartmentId=d.Id where u.IsActive='True'`, (error0, result0) => {
                if (error0) {
                    return res.send(error0)
                }
                else {
                    server.request.query(`select * from Setup_Role where IsActive='True'`, (error1, result1) => {
                        if (error1) {
                            return res.send(error1)
                        }
                        else {
                            server.request.query(`select * from Setup_Department where IsActive='True'`, (error2, result2) => {
                                if (error2) {
                                    return res.send(error2)
                                }
                                else {
                                    return res.send({
                                        data0: result0.recordset,
                                        data1: result1.recordset,
                                        data2: result2.recordset
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})


router.put('/EditUser', (req, res) => {
    let table_column_name = Object.getOwnPropertyNames(req.body);
    let table_column_value = Object.values(req.body);
    var que = '';
    for (var i = 1; i < table_column_value.length; i++) {

        if (typeof table_column_value[i] == 'string') {
            que += `${table_column_name[i]} ='${table_column_value[i]}',`;
        }
        else if (typeof table_column_value[i] == 'boolean') {
            que += `${table_column_name[i]} ='${table_column_value[i]}',`;
        }
        else if (table_column_value[i] == null) {
            que += `${table_column_name[i]} =${table_column_value[i]},`;
        }
        else {
            que += `${table_column_name[i]} =${table_column_value[i]},`;
        }
    }
    var query = `UPDATE Setup_User SET `;
    query += que.slice(0, -1) + ` Where Id=${req.body.id}`;
    console.log(query);
    server.request.query(query, function (error, result) {
        if (error) {
            return res.send(error)
        }
        else {
            server.request.query(`select u.Id as UserId, r.id as RoleId ,r.RoleName,u.FullName,u.Email,d.Id as DepartmentId , d.DepartmentName ,u.CreatedBy,u.CreatedDate,u.ModifiedBy,u.ModifiedDate from Setup_User u join Setup_Role r on u.RoleId=r.Id join Setup_Department d on u.DepartmentId=d.Id where u.IsActive='True'`, (error0, result0) => {
                if (error0) {
                    return res.send(error0)
                }
                else {
                    server.request.query(`select * from Setup_Role where IsActive='True'`, (error1, result1) => {
                        if (error1) {
                            return res.send(error1)
                        }
                        else {
                            server.request.query(`select * from Setup_Department where IsActive='True'`, (error2, result2) => {
                                if (error2) {
                                    return res.send(error2)
                                }
                                else {
                                    return res.send({
                                        data0: result0.recordset,
                                        data1: result1.recordset,
                                        data2: result2.recordset
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });

})

router.post('/AddUser', (req, res) => {
    let value = "";
    let name = "";
    var table_column_name = Object.getOwnPropertyNames(req.body);
    for (var j = 0; j < table_column_name.length; j++) {
        name += JSON.stringify(table_column_name[j]) + ",";
    }
    let table_column_value = Object.values(req.body);
    for (var i = 0; i < table_column_value.length; i++) {

        if (typeof table_column_value[i] == 'string') {
            value += "'" + (table_column_value[i]) + "',";
        }
        else if (typeof table_column_value[i] == 'boolean') {
            value += "'" + table_column_value[i] + "',";
        }
        else if (typeof table_column_value[i] == 'number') {
            value += table_column_value[i] + ","
        }
        else if (table_column_value[i] == null) {
            value += table_column_value[i] + ","
        }
    }
    value = value.slice(0, -1);
    name = name.slice(0, -1);
    console.log('value', value);
    var query = `INSERT INTO Setup_User (${name}) VALUES(${value})`
    console.log(query);
    server.request.query(`INSERT INTO Setup_User (${name}) VALUES(${value})`, (error, result) => {
        if (error) {
            console.log("error", error);
            return res.send(error)
        }
        else {
            console.log("result", result);
            server.request.query(`select u.Id as UserId, r.id as RoleId ,r.RoleName,u.FullName,u.Email,d.Id as DepartmentId , d.DepartmentName ,u.CreatedBy,u.CreatedDate,u.ModifiedBy,u.ModifiedDate from Setup_User u join Setup_Role r on u.RoleId=r.Id join Setup_Department d on u.DepartmentId=d.Id where u.IsActive='True'`, (error0, result0) => {
                if (error0) {
                    return res.send(error0)
                }
                else {
                    server.request.query(`select * from Setup_Role where IsActive='True'`, (error1, result1) => {
                        if (error1) {
                            return res.send(error1)
                        }
                        else {
                            server.request.query(`select * from Setup_Department where IsActive='True'`, (error2, result2) => {
                                if (error2) {
                                    return res.send(error2)
                                }
                                else {
                                    return res.send({
                                        data0: result0.recordset,
                                        data1: result1.recordset,
                                        data2: result2.recordset
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });

})




router.post('/AddingUser', (req, res) => {

    server.request.query(`INSERT INTO Setup_Employee (emp_name
        ,emp_email
        ,location_id
        ,department_id,
        isActive) VALUES('${req.body.name}','${req.body.email}','${req.body.LocationId}','${req.body.DepartmentId}',1)`, (error, result) => {
            if (error) {
                console.log("error", error);
                // return res.send(error)
            }
            else {
                console.log("result", result);
                server.request.query(` 
                SELECT Setup_Employee.id,Setup_Employee.emp_name,Setup_Employee.emp_email,Setup_Department.DepartmentName,Setup_Location.city
                from Setup_Employee 
                join Setup_Department on Setup_Department.Id=Setup_Employee.department_id
                 join Setup_Location on Setup_Location.id=Setup_Employee.location_id `, (error0, result0) => {
                    if (error0) {
                        console.log("error", error0);
                        // return res.send(error0)
                    }
                    else {
                        console.log("result0 me kya aya", result0);

                        return res.send({ data1: result0.recordset, })
                    }
                })
            }
        })
});


router.post('/AddingLocation', (req, res) => {

    server.request.query(`INSERT INTO Setup_Location (city
        ,isActive,CreatedDate) VALUES('${req.body.name}',1,${req.body.CreatedDate})`, (error, result) => {
            if (error) {
                console.log("error", error);
                // return res.send(error)
            }
            else {
                console.log("result", result);
                server.request.query(`  select * from Setup_Location where isActive='True'`, (error0, result0) => {
                    if (error0) {
                        console.log("error", error0);
                        // return res.send(error0)
                    }
                    else {

                        return res.send({ data1: result0.recordset, })
                    }
                })
            }
        })
});

router.post('/AddDepartment', (req, res) => {

    server.request.query(`INSERT INTO Setup_Department (DepartmentName
        ,IsActive) VALUES('${req.body.name}',1)`, (error, result) => {
            if (error) {
                console.log("error", error);
                // return res.send(error)
            }
            else {
                console.log("result", result);
                server.request.query(`  select * from Setup_Department where IsActive='True'`, (error0, result0) => {
                    if (error0) {
                        console.log("error", error0);
                        // return res.send(error0)
                    }
                    else {

                        return res.send({ data1: result0.recordset, })
                    }
                })
            }
        })
});


router.post('/CheckBox', (req, res) => {

    server.request.query(`   UPDATE Setup_Roll_Access set isActive = 'false' WHERE RoleId=${req.body.Role} AND MenuId=${req.body.Mitem}`, (error, result) => {
            if (error) {
                console.log("error", error);
                // return res.send(error)
            }
            else {
                server.request.query(`  select * from Setup_Roll_Access`, (error0, result0) => {
                    if (error0) {
                        console.log("error", error0);
                        
                    }
                    else {

                        return res.send({ data1: result0.recordset, })
                    }
                })
            }
        })
});

router.post('/Checkedinn', (req, res) => {

    server.request.query(` UPDATE Setup_Roll_Access set isActive = 'true' WHERE RoleId=${req.body.Role} AND MenuId=${req.body.Mitem} `, (error, result) => {
            if (error) {
                console.log("error", error);
                // return res.send(error)
            }
            else {
                server.request.query(`  select * from Setup_Roll_Access`, (error0, result0) => {
                    if (error0) {
                        console.log("error", error0);
                        
                    }
                    else {

                        return res.send({ data1: result0.recordset, })
                    }
                })
            }
        })
});








router.get('/Setup_User', (req, res) => {
    server.request.query(`select u.Id as UserId, r.id as RoleId ,r.RoleName,u.FullName,u.Email,d.Id as DepartmentId,d.DepartmentName ,u.CreatedBy,u.CreatedDate,u.ModifiedBy,u.ModifiedDate from Setup_User u join Setup_Role r on u.RoleId=r.Id join Setup_Department d on u.DepartmentId=d.Id where u.IsActive='True'`, (error, result) => {
        if (error) {
            return res.send(error)
        }
        else {
            server.request.query(`select * from Setup_Role where IsActive='True'`, (error1, result1) => {
                if (error1) {
                    return res.send(error1)
                }
                else {
                    server.request.query(`select * from Setup_Department where IsActive='True'`, (error2, result2) => {
                        if (error2) {
                            return res.send(error2)
                        }
                        else {
                            server.request.query(`
                            SELECT Setup_Employee.id,Setup_Employee.emp_name,Setup_Employee.emp_email,Setup_Department.DepartmentName,Setup_Location.city
                                         from Setup_Employee 
                                         join Setup_Department on Setup_Department.Id=Setup_Employee.department_id
                                          join Setup_Location on Setup_Location.id=Setup_Employee.location_id`, (error3, result3) => {
                                if (error3) {
                                    return res.send(error3)
                                }
                                else {
                                    server.request.query(`select * from Setup_Location where isActive='True'`, (error4, result4) => {
                                        if (error4) {
                                            return res.send(error4)
                                        }
                                        else {
                                            server.request.query(`select * from Setup_MenuItem`, (error5, result5) => {
                                                if (error5) {
                                                    return res.send(error5)
                                                }
                                                else {
                                                    server.request.query(`select * from Setup_Roll_Access`, (error6, result6) => {
                                                        if (error6) {
                                                            return res.send(error6)
                                                        }
                                                        else {
                                                            return res.send({
                                                                data0: result.recordset,
                                                                data1: result1.recordset,
                                                                data2: result2.recordset,
                                                                data3: result3.recordset,
                                                                data4: result4.recordset,
                                                                data5: result5.recordset,
                                                                data6: result6.recordset,
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
});









module.exports = router;
