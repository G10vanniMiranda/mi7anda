
export default function Login() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-3 bg-white">
            <div className="w-full text-center">
                <h1 className="text-3xl font-bold text-blue-700">Seja Bem Vindo</h1>
                <p className="text-gray-800 font-sans">Efetue seu login</p>
            </div>

            <div className="w-full flex justify-center gap-32">
                <h1 className="bg-gray-800 text-white p-1 rounded-full">#</h1>
                <h1 className="bg-gray-800 text-white p-1 rounded-full">#</h1>
            </div>

            <form className="w-72 flex flex-col gap-3">
                <div className="flex flex-col">
                    <label htmlFor="email">Email ou usuário</label>
                    <input className="border border-gray-500 rounded-md p-1" type="text" name="email" id="email" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Senha</label>
                    <input className="border border-gray-500 rounded-md p-1" type="password" name="password" id="password" />
                </div>

                <button className="bg-blue-700 text-white py-1 rounded-full" type="submit">Acessar</button>
            </form>

            <div className="w-full text-center pt-3">
                <p className="text-gray-800 font-sans">Esqueceu sua senha?</p>
                <a className="text-blue-700" href="#">Clique aqui</a>
            </div>
        </div>
    );
}