import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col w-full flex-1 px-20 text-center items-center justify-center min-h-screen bg-gray-200">
        <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>

          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Welcome to the ProfileSphere</p>
          <Link
            href="/login"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500 m-3"
          >
            SignUp
          </Link>
        </div>
      </div>
    </main>
  );
}
