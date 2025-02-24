import { json } from "stream/consumers";

async function get() {
    try {
        const response = await fetch(`https://apigenerator.dronahq.com/api/RJd-Vfps/gerenciadorcarros`);
        if (!response.ok) {
            throw new Error('Erro de conexão / was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Erro de fetching data:', error);
    }
}

async function GetById(id: number) {
    try {
        const response = await fetch(`https://apigenerator.dronahq.com/api/RJd-Vfps/gerenciadorcarros/${id}`);
        if (!response.ok) {
            throw new Error('Erro de conexão / was not ok');
        }
        const data = await response.json();
        console.log(data)
        return data;
    }   catch (error) {
        console.error('Erro de fetching data:', error)
    }
}

async function postData(url: string, data: any) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Erro de conexão / was not ok')
        }
        const result = await response.json();
        console.log(result);
        return result;
    }   catch (error) {
        console.error('Erro de posting data:', error);
    }
}

async function updateRecord(id: number, updatedData: any) {
    try {
        const response = await fetch(`https://apigenerator.dronahq.com/api/RJd-Vfps/gerenciadorcarros/${id}`,{

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error('Erro de conexão / was not ok')
        }
        const result = await response.json();
        console.log(result);
    }   catch (error) {
        console.error('Erro de updating data:', error);
    }
}

async function deleteRecord(id: number) {
    try {
        const response = await fetch(`https://apigenerator.dronahq.com/api/RJd-Vfps/gerenciadorcarros/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro de conexão / was not ok');
        }
        console.log('Registro/record deleted');
    }   catch (error) {
        console.error('Erro de deleting data:', error);
    }
}

//métodos de teste

async function testAPI() {

    //testar get

    await get();

    //testar getbyid

    await GetById(1);

    // testar post

    await postData('https://apigenerator.dronahq.com/api/RJd-Vfps/gerenciadorcarros', {
        "Marca": "Toyota",
        "Modelo": "Corolla",
        "Categoria": "Sedan",
        "Ano": 2020,
        "Quilometragem": 10000,
        "Valor": 176777
    });

    // Testar PUT

    await updateRecord(0, { // Substitua `` pelo ID que deseja atualizar
    });

    // Testar DELETE

    await deleteRecord(0); // Substitua `` pelo ID que deseja excluir
}

testAPI()