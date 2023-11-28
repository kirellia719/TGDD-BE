import sql from 'mssql';

export const getAllEmployee = async (req, res) => {
    try {
        const s = req.query.s;
        const data = await sql.query(`select * from Employee`);
        res.json(data.recordset);
    } catch (error) {
        console.error(error);
        res.status(500).json("Error on server");
    }
}