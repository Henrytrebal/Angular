export interface Productos {

    idProducto: number;
    nombre: string;
    detalle: string;
    monto: number;

}

export interface Empresa {

    idEmpresa: number;
    razonSocial: string;
    ruc: string;
    pais: string;

}
export interface Ventas {

    idVentas: number;
    idclientes: number;
    idproductos: number;
    cantidad: number;
    precioUnitario: number;
    total: number;
    fechaVenta: string;
    producto: string;
    cliente: string;

}

export interface Clientes {

    idCliente: number;
    nombre: string;
    correo: string;
    telefono: number;

}