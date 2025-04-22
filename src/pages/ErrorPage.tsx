import { Link } from "react-router-dom"


const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
                    <h1 className="text-6xl font-bold text-red-500">404</h1>
                    <p className="mt-4 text-xl font-semibold text-gray-800">
                        Sayfa Bulunamadı
                    </p>
                    <p className="mt-2 text-gray-600">
                        Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
                    </p>
                    <Link
                        to="/"
                        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                    >
                        Anasayfaya Dön
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
