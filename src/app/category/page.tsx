"use client"

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Gategory() {
    const router = useRouter()

    const [name, setName] = useState('');

    const url = "http://localhost:8080/category"

    const handlesubmit = async (event: any) => {
        event.preventDefault();

        // validação
        if (!name) {
            alert("Preencha o campo")
            return
        }

        // POST, GET, DELETE, PUT, PATCH
        const data = { name }

        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            alert("Cadastrado com sucesso")
            router.push('')

        } catch (error) {
            alert("Erro não consegui gravar")
            console.log(error)
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-3 bg-white">
            <div className="w-full text-center pb-3 flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-blue-500">Seja Bem Vindo</h1>
                <p className="text-gray-800 font-sans">Cadastro de categoria</p>
            </div>

            <form className="w-72 flex flex-col gap-3" onSubmit={handlesubmit}>
                <div className="flex flex-col">
                    <TextField id="outlined-basic" label="Nome da categoria" variant="outlined" type="text"
                        value={name} onChange={e => setName(e.target.value)}
                    />
                </div>

                <button className="bg-blue-500 text-white py-2 rounded-full" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
