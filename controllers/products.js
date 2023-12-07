import sql from 'mssql';

export const getAllProducts = async (req, res) => {
    try {
        let query = `SELECT sp.ID, sp.Ten, sp.ID_Loai, hsx.Ten AS Hang_San_Xuat FROM San_Pham sp LEFT JOIN Hang_San_Xuat hsx ON sp.ID_Hang = hsx.ID ORDER BY ID`;
        const { recordset: products } = await sql.query(query);
        for (let i = 0; i < products.length; i++) {
            query = `SELECT * FROM Bien_The_San_Pham btsp WHERE ID_San_Pham = ${products[i].ID} ORDER BY Gia`;
            const { recordset: variants } = await sql.query(query);
            products[i].Bien_The_San_Pham = variants;
        }
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let query = `
            SELECT sp.ID, sp.Ten, l.Ten AS Loai_San_Pham, hsx.Ten AS Hang_San_Xuat FROM San_Pham sp
            LEFT JOIN Hang_San_Xuat hsx ON sp.ID_Hang = hsx.ID
            LEFT JOIN Loai l ON sp.ID_Loai = l.ID
            WHERE sp.ID = ${id}`;
        const { recordset: product } = await sql.query(query);

        query = `SELECT * FROM Noi_Dung_Thong_So ndts  WHERE ID_San_Pham = ${id} ORDER BY Ten`;
        const { recordset: info } = await sql.query(query);

        query = `SELECT * FROM Bien_The_San_Pham btsp  WHERE ID_San_Pham = ${id} ORDER BY Gia`;
        const { recordset: variants } = await sql.query(query);

        res.json({...product[0], Bien_The_San_Pham: variants, Noi_Dung_Thong_So: info});
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}

export const addToCart = async (req, res) => {
    try {
        let query = ``;
        const data = await sql.query(query);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}

