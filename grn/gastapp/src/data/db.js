export const categorias = [
    {
        "id" : 1,
        "nombre" : "Servicios"
    }, {
        "id" : 2,
        "nombre" : "Mascotas"
    }, {
        "id" : 3,
        "nombre" : "Transporte"
    }, {
        "id" : 4,
        "nombre" : "Entretenimiento"
    }, {
        "id" : 5,
        "nombre" : "Salud"
    }, {
        "id" : 6,
        "nombre" : "Supermercado"
    }, {
        "id" : 7,
        "nombre" : "Hogar"
    }, {
        "id" : 8,
        "nombre" : "Educación"
    }, {
        "id" : 9,
        "nombre" : "Indumentaria"
    }, {
        "id" : 10,
        "nombre" : "Tecnología"
    }, {
        "id" : 11,
        "nombre" : "Otros"
    }
]

export const tipo_medio_pago = [
    {
        "id" : 1,
        "nombre" : "Efectivo"
    }, {
        "id" : 2,
        "nombre" : "Tarjeta Crédito"
    }, {
        "id" : 3,
        "nombre" : "Tarjeta Débito"
    }, {
        "id" : 4,
        "nombre" : "Cuenta Remunerada"
    }, {
        "id" : 5,
        "nombre" : "Fondo Común de Inversión"
    }, {
        "id" : 6,
        "nombre" : "Tarjeta Prepaga"
    }
]

export const medios_pagos = [
    {
        "id" : 1,
        "tipo_medio_pago_id" : 2,
        "banco" : "Santander",
        "financiera" : "VISA"
    }, {
        "id" : 2,
        "tipo_medio_pago_id" : 2,
        "banco" : "Santander",
        "financiera" : "AMEX"
    }, {
        "id" : 3,
        "tipo_medio_pago_id" : 2,
        "banco" : "Mercado Pago",
        "financiera" : "MasterCard"
    }, {
        "id" : 4,
        "tipo_medio_pago_id" : 3,
        "banco" : "Santander",
        "financiera" : "VISA"
    }, {
        "id" : 5,
        "tipo_medio_pago_id" : 4,
        "banco" : "BIND",
        "financiera" : "Mercado Pago"
    }
]

export const monedas = [
    {
        "id" : 1,
        "nombre" : "Pesos"
    }, {
        "id" : 2,
        "nombre" : "Dólares"
    }
]

export const gastos = [
    {
        "id" : 1,
        "producto" : "Entrada AC/DC River",
        "precio" : 1357000.20,
        "es_gasto_fijo": false,
        "medio_pago_id": 2,
        "cuotas_totales": 6,
        "cuotas_pagadas": 1
    },{
        "id" : 2,
        "nombre" : "Luz",
        "precio" : 144000.00,
        "es_gasto_fijo": true,
        "medio_pago_id": 4
    }, {
        "id" : 3,
        "nombre" : "Tuenti",
        "precio" : 11500.00,
        "es_gasto_fijo": true,
        "medio_pago_id": 4
    }, {
        "id" : 4,
        "producto" : "Guitarra Eléctrica Squier",
        "precio" : 576000.00,
        "es_gasto_fijo": false,
        "medio_pago_id": 1,
        "cuotas_totales": 18,
        "cuotas_pagadas": 13
    }, {
        "id" : 5,
        "producto" : "Auriculares HyperX Cloud Stinger Core 2",
        "precio" : 89699.00,
        "es_gasto_fijo": false,
        "medio_pago_id": 3,
        "cuotas_totales": 18,
        "cuotas_pagadas": 1
    }, {
        "id" : 6,
        "producto" : "Kohinoor A655/2 5.5Kg",
        "precio" : 269087.04,
        "es_gasto_fijo": false,
        "medio_pago_id": 3,
        "cuotas_totales": 3,
        "cuotas_pagadas": 2
    }
]