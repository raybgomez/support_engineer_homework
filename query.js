const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydatabase.db');

// How many organizations do not have account plans?

db.serialize(() => {
    db.all(`SELECT COUNT(*) AS count
            FROM organization
            WHERE id NOT IN (SELECT DISTINCT organizationId FROM account_plan);`,
        (err, rows) => {
            if (err) {
                throw err;
            }
            console.log(rows[0].count);
        });
});

// How many organizations have more than one account plan?

db.serialize(() => {
    db.all(`SELECT COUNT(*) AS count
            FROM (
            SELECT organizationId
            FROM account_plan
            GROUP BY organizationId
            HAVING COUNT(*) > 1 );`,
        (err, rows) => {
            if (err) {
                throw err;
            }
            console.log(rows[0].count);
        });
});

// List all organizations that have only one account plan.

db.serialize(() => {
    db.all(`SELECT o.orgName
            FROM organization o
            JOIN (
            SELECT organizationId
            FROM account_plan
            GROUP BY organizationId
            HAVING COUNT(*) = 1 )
            a ON o.id = a.organizationId;`,
        (err, rows) => {
            if (err) {
                throw err;
            }
            console.log('Organizations with one account plan:');
            rows.forEach(row => console.log(row.orgName));
        });
});

// List all organizations that have the PASSWORDLESS feature set to true.

db.serialize(() => {
    db.all(`SELECT o.orgName
            FROM organization o
            JOIN account_plan a ON o.id = a.organizationId
            WHERE a.features LIKE '%PASSWORDLESS%true%';`,
        (err, rows) => {
            if (err) {
                throw err;
            }
            console.log('Organizations with the PASSWORDLESS feature on:');
            rows.forEach(row => console.log(row.orgName));
        });
});

db.close();