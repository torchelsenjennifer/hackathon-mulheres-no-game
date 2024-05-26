import React from "react";
import Navbar from "../Navbar";

const Menu = () => {

  return (
    <header className="bg-black text-white flex flex-row justify-between items-center gap-5 p-4">
		<div class="flex items-center">
   			 <Navbar url="/">
				<img
					class="w-24 h-auto"
					src="/logoGuriasTech.png"
					alt="logo"
				/>
   			 </Navbar>
    		<h1 class="ml-4">Gurias Tech</h1>
		</div>

        <div className=" flex flex-row justify-center items-center lg:items-start">
          <ul className=" flex flex-row justify-center items-center">
            <li className="mx-4 my-6 md:my-0">
              <Navbar url="/">Home</Navbar>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Navbar url="/artist">Sobre nos</Navbar>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Navbar url="/care">Mentoras</Navbar>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Navbar url="/Produtos">Comunidade</Navbar>
            </li>
			<li className="mx-4 my-6 md:my-0">
              <Navbar url="/Produtos">Cadastre-se</Navbar>
            </li>
          </ul>
        </div>

		<div className=" flex flex-row justify-center items-center lg:items-start">
			<h1>Login</h1>
		</div>
      <div>
      </div>
    </header>
  );
};

export default Menu;