const listarTarefa = require('../src/listarTarefa');

describe('Função listarTarefa', () => {
    test('Deve retornar a lista de tarefas vazia da agenda', () => {
        const agenda = {
            listarTarefas: () => []
        };
        const lista = listarTarefa(agenda);

        expect(lista).toEqual([]);
    });

    test('Deve retornar a lista de tarefas da agenda', () => {
        const agenda = {
            listarTarefas: () => ['Tarefa 1', 'Tarefa 2']
        };
        const lista = listarTarefa(agenda);

        expect(lista).toEqual(['Tarefa 1', 'Tarefa 2']);
    });
});