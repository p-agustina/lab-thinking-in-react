import ProductRow from "./ProductRow";

function ProductTable({products, query, stock}) {
    return ( 
        <div className="TableCont" style={{ display: 'flex', justifyContent: 'center'}}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <ProductRow products={products} query={query} stock={stock}/>
        </table>
    </div>
    );
}

export default ProductTable;