const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <div className="flex items-center">
        <div className="mr-4">Home</div>
        <div className="mr-4">About</div>
        <div className="mr-4">Contact</div>
        <div className="mr-4">Login</div>
        <div className="mr-4">Register</div>
      </div>
    </div>
  );
};

export default Navbar;
