import React, { useState } from "react";
import headerLogo from "../../assets/DWEL®.svg";
import Button from "../../ui/Button";
import Popup from "../../ui/Popup";

const Header = () => {
  const [Login, setLogin] = useState(false);
  const handleLogin = () => setLogin(true);
  const CloseLogin = () => setLogin(false);

  const [Register, setRegister] = useState(false);
  const handleRegister = () => setRegister(true);
  const CloseRegister = () => setRegister(false);

  return (
    <header className="mt-[40px]">
      <nav className="container flex items-center justify-between">
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <div className="flex gap-5">
          <Button onClick={handleLogin} title={"Sign up"}></Button>
          <Button onClick={handleRegister} title={"Sign in"}></Button>
          <Popup isShow={Login} onClose={CloseLogin}>
            <div className="size-140 rounded-2xl bg-white p-4 flex-col max-[650px]:w-[380px]">
              <h1 className="font-bold text-[25px] text-center mt-3">
                Sign up
              </h1>
              <form
                action=""
                className="flex justify-center flex-col gap-[30px] mt-[30px] px-[40px] max-[650px]:px-[6px]"
              >
                <input
                  className="border rounded-[8px] flex h-12 indent-5 text-[20px] outline-none border-gray-400"
                  placeholder="Enter your username"
                  type="text"
                />
                <input
                  className="border rounded-[8px] flex h-12 indent-5 text-[20px] outline-none border-gray-400"
                  placeholder="Enter your email"
                  type="email"
                />
                <input
                  className="border rounded-[8px] flex h-12 indent-5 text-[20px] outline-none border-gray-400"
                  placeholder="Enter your password"
                  type="password"
                />
                <div className="flex justify-center gap-10">
                  <button
                    className="border-2 px-[40px] py-[6px] rounded-[6px] bg-blue-700 text-white font-bold border-none max-[650px]:px-[25px]"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button className="border-2 px-[40px] py-[6px] rounded-[6px] bg-blue-700 text-white font-bold border-none max-[650px]:px-[25px]">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Popup>
          <Popup isShow={Register} onClose={CloseRegister}>
            <div className="w-[600px] rounded-2xl bg-white p-8 flex-col max-[650px]:w-[380px]">
              <h1 className="font-bold text-[25px] text-center mt-3">
                Sign in
              </h1>
              <form
                action=""
                className="flex justify-center flex-col gap-[30px] mt-[30px] px-[40px]  max-[650px]:px-[6px]"
              >
                <input
                  className="border rounded-[8px] flex h-12 indent-5 text-[20px] outline-none border-gray-400"
                  placeholder="Enter your email"
                  type="email"
                />
                <input
                  className="border rounded-[8px] flex h-12 indent-5 text-[20px] outline-none border-gray-400"
                  placeholder="Enter your password"
                  type="password"
                />
                <div className="flex justify-center gap-10">
                  <button
                    className="border-2 px-[40px] py-[6px] rounded-[6px] bg-blue-700 text-white font-bold border-none  max-[650px]:px-[25px]"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button className="border-2 px-[40px] py-[6px] rounded-[6px] bg-blue-700 text-white font-bold border-none  max-[650px]:px-[25px]">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Popup>
        </div>
      </nav>
    </header>
  );
};

export default Header;
