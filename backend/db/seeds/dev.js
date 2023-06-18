/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex){
    await knex.raw('TRUNCATE TABLE "material" CASCADE');

    await knex ('material').insert([
        {nome: 'Prego', quantidade: 150, preco: 1.5},
        {nome: 'Martelo', quantidade: 10, preco: 18.5},
        {nome: 'Luva', quantidade: 75, preco: 9.00},
    ]);
};