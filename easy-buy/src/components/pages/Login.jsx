import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section>
      <div className="w-1/2 max-w-2xs mt-32 m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Senha
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto"
              type={onsubmit}
            >
              LogIn
            </button>
          </div>
        <p className="text-sm font-light text-gray-500 ">
          Não tem conta?{" "}
          <Link
            to="/register"
            className="font-medium text-primary-600 hover:underline "
          >
            Registre aqui
          </Link>
        </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
