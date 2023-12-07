import sql from 'mssql';

export const getCart = async (req, res) => {
    try {
        const { id } = req.params;
        let query = `EXEC Xem_Gio_Hang @id_khach_hang = ${id};`;
        const {recordset: data} = await sql.query(query);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}



export const addToCart = async (req, res) => {
    try {
        const { ID_Tai_Khoan, ID_San_Pham, Thong_So_Rieng } = req.body;
        let query = `EXEC Them_Vao_Gio @id_khach_hang=${ID_Tai_Khoan}, @id_san_pham=${ID_San_Pham}, @thong_so_rieng = '${Thong_So_Rieng}';`;
        const {recordset: data} = await sql.query(query);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}

export const removeFromCart = async (req, res) => {
    try {
        const {ID_Tai_Khoan, ID_San_Pham, Thong_So_Rieng } = req.body;
        let query = `EXEC Lay_Khoi_Gio @id_khach_hang=${ID_Tai_Khoan}, @id_san_pham=${ID_San_Pham}, @thong_so_rieng = '${Thong_So_Rieng}';`;
        const {recordset: data} = await sql.query(query);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}