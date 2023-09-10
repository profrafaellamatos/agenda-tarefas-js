const adicionarTarefa = require('../src/adicionarTarefa');

describe('Função adicionarTarefa', () => {
    test('Deve adicionar uma tarefa à agenda', () => {
        const agenda = {
            tarefas: []
        };
        const tarefa = 'Comprar leite';
        adicionarTarefa(agenda, tarefa);

        expect(agenda.tarefas).toContain(tarefa);
    });

    test('Deve adicionar várias tarefas à agenda', () => {
        const agenda = {
            tarefas: []
        };
        const tarefa1 = 'Comprar leite';
        const tarefa2 = 'Fazer compras';
        adicionarTarefa(agenda, tarefa1);
        adicionarTarefa(agenda, tarefa2);

        expect(agenda.tarefas).toContain(tarefa1);
        expect(agenda.tarefas).toContain(tarefa2);
    });

    test('A lista de tarefas deve ter o tamanho correto', () => {
        const agenda = {
            tarefas: []
        };
        const tarefa1 = 'Comprar leite';
        const tarefa2 = 'Fazer compras';
        adicionarTarefa(agenda, tarefa1);
        adicionarTarefa(agenda, tarefa2);

        expect(agenda.tarefas.length).toBe(2);
    })
});