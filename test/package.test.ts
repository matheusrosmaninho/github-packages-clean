import { Package } from "../src/entities/package";

test('Deve retornar erro ao criar um pacote vazio', () => {
    const namePackagesEmpty = '';
    expect(() => new Package(namePackagesEmpty)).toThrow(new Error('Package name is required'));
});

test('Deve retornar erro ao criar vários pacotes vazios', () => {
    const namePackagesEmpty = ' , , , ';
    expect(() => new Package(namePackagesEmpty)).toThrow(new Error('Package name is required'));
});

test('Deve retornar sucesso ao criar um pacote', () => {
    const namePackages = 'package1, package2, , package3';
    const obj = new Package(namePackages);
    expect(obj.names).toEqual(['package1', 'package2', 'package3']);
});