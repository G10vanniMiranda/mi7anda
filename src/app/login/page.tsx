import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';


export default function Login() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
            <div className="w-full text-center pb-3">
                <h1 className="text-3xl font-bold">Seja Bem Vindo</h1>
                <p className="text-gray-800 font-sans">Efetue seu login</p>
            </div>

            <div className="w-full flex justify-center gap-28 pb-3">
                <h1 className="bg-black border-none shadow-md text-blue-600 p-3 rounded-3xl cursor-pointer hover:scale-110 duration-300">
                    <FaFacebook size={30} />
                </h1>
                <h1 className="bg-black border-none shadow-md p-3 rounded-3xl cursor-pointer hover:scale-110 duration-300">
                    <FcGoogle size={30} />
                </h1>
            </div>

            <form className="w-72 flex flex-col gap-3">
                <div className="flex flex-col">
                    <TextField id="outlined-basic" label="E-mail ou usuário" variant="outlined" type="text" />
                </div>

                <div className="flex flex-col pb-2">
                    <TextField id="outlined-basic" label="Senha" variant="outlined" type="text" className='w-full' />
                </div>

                <button className="bg-black text-white py-2 rounded-full" type="submit">Acessar</button>
            </form>

            <div className="w-full text-center pt-3">
                <p className="text-gray-800 font-sans">Esqueceu sua senha?</p>
                <Link className="text-blue-700 cursor-pointer" href="#">Clique aqui</Link>
            </div>
        </div>
    );
}
