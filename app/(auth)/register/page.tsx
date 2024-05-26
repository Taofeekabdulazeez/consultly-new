export const metadata = {
  title: "Register",
};

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="pt-24">
        <div className="bg-gray-50 p-6 shadow-sm w-[450px] mx-auto">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Login to your account
          </h3>
          <div className="grid grid-cols-2 p-2 bg-gray-100 rounded-3xl">
            <span className="py-2 rounded-2xl text-center cursor-pointer bg-gray-50">
              Login
            </span>
            <span className="py-2 rounded-2xl text-center cursor-pointer bg-gray-100">
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
