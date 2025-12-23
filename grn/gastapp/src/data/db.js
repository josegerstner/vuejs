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
        "categoria" : "Tarjeta Crédito",
        "banco" : "Santander",
        "empresa" : "VISA"
    }, {
        "id" : 2,
        "categoria" : "Tarjeta Crédito",
        "banco" : "Santander",
        "empresa" : "AMEX"
    }, {
        "id" : 3,
        "categoria" : "Tarjeta Crédito",
        "banco" : "Mercado Pago",
        "empresa" : "MasterCard"
    }, {
        "id" : 4,
        "categoria" : "Tarjeta Débito",
        "banco" : "Santander",
        "empresa" : "Personal"
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