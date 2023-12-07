import sql from 'mssql';

export const order = async (req, res) => {
    try {
        const { ID_Khach_Hang, ID_Chi_Nhanh, Ghi_Chu } = req.body;
        let query = `EXEC Dat_Hang @id_tai_khoan=${ID_Khach_Hang}, @id_chi_nhanh = ${ID_Chi_Nhanh}, @ghi_chu ='${Ghi_Chu}';`;
        const {recordset: data} = await sql.query(query);
        res.json(data);
    } catch (error) {
        // console.error(error);
        res.status(500).json(error.message);
    }
}