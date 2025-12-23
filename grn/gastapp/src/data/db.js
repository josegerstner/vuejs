export const categorias = [
    {
        "id" : 1,
        "nombre" : "Tarjeta Crédito"
    },{
        "id" : 2,
        "nombre" : "Préstamo"
    }, {
        "id" : 3,
        "nombre" : "Servicio"
    }, {
        "id" : 4,
        "nombre" : "Tarjeta Débito"
    }, {
        "id" : 5,
        "nombre" : "Efectivo"
    }, {
        "id" : 6,
        "nombre" : "Cuenta Remunerada"
    }
]

export const medios_pagos = [
    {
        "id" : 1,
        "nombre" : "Tarjeta Crédito",
        "banco" : "Santander",
        "financiera" : "VISA"
    }, {
        "id" : 2,
        "nombre" : "Tarjeta Crédito",
        "banco" : "Santander",
        "financiera" : "AMEX"
    }, {
        "id" : 3,
        "nombre" : "Tarjeta Crédito",
        "banco" : "Mercado Pago",
        "financiera" : "MasterCard"
    }, {
        "id" : 4,
        "nombre" : "Tarjeta Débito",
        "banco" : "Santander",
        "financiera" : "Personal"
    }
]

export const gastos = [
    {
        "id" : 1,
        "producto" : "Entrada AC/DC River",
        "precio" : 360000.00,
        "es_gasto_fijo": false,
        "medio_pago_id": 1,
        "cuotas_totales": 6
    },{
        "id" : 2,
        "nombre" : "Luz",
        "precio" : 144000.00,
        "es_gasto_fijo": true,
        "medio_pago_id": 6
    },{
        "id" : 3,
        "nombre" : "Teléfono",
        "precio" : 144000.00,
        "es_gasto_fijo": true,
        "medio_pago_id": 6
    }
]