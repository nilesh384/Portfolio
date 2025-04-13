// const Navbar = () => {
//     return (
//         <>
//             {/* Navbar */}
//       <header>
//         <nav className="flex justify-around items-center h-14 bg-gradient-to-r from-nav-gradient-start to-nav-gradient-end">
//           <div className="text-3xl ml-[-3rem] hover:cursor-pointer">Portfolio</div>
//           <div className="flex justify-center items-center space-x-8 mr-[-5em]">
//             <a href="/" className="hover:text-indigo-400 hover:scale-110 duration-100">Home</a>
//             <a href="/about" className="hover:text-indigo-400 hover:scale-110 duration-100">About</a>
//             <a href="/projects" className="hover:text-indigo-400 hover:scale-110 duration-100">Projects</a>
//             <a href="/contact" className="hover:text-indigo-400 hover:scale-110 duration-100">Contact Me</a>
//             <a href="/login" className="hover:text-indigo-400 hover:scale-110 duration-100">Login</a>
//           </div>
//         </nav>
//       </header>
//         </>
//     )
// }

// export default Navbar



const Navbar = () => {
  return (
    <header>
      <nav className="w-full mb-0.5 sticky top-0 z-50 flex justify-between items-center h-16 px-10 bg-gradient-to-r from-[#080716] via-[#120f37] to-[#11111d] text-white shadow-md">
        <div className="text-3xl font-bold hover:cursor-pointer">Portfolio</div>
        <div className="flex space-x-8 text-lg font-medium">
          <a href="/" className="hover:text-purple-400 hover:scale-110 transition duration-200">Home</a>
          <a href="/about" className="hover:text-purple-400 hover:scale-110 transition duration-200">About</a>
          <a href="/projects" className="hover:text-purple-400 hover:scale-110 transition duration-200">Projects</a>
          <a href="/contact" className="hover:text-purple-400 hover:scale-110 transition duration-200">Contact Me</a>
          <a href="/login" className="hover:text-purple-400 hover:scale-110 transition duration-200">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
