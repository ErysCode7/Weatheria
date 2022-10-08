import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getQueryData } from "../../redux/slices/locationSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("Taguig");

  useEffect(() => {
    dispatch(getQueryData(search));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getQueryData(search));
    setSearch("");
  };

  return (
    <header className="w-4/5 m-auto pt-[50px] md:pt-20 lg:pt-24text-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#f1f1f1] text-6xl font-bold">Weatheria</h1>
        <h3 className="text-[#e7e7e7] text-2xl font-bold">
          Find out the current weather in each city in the world!
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-none outline-none px-2 py-1 rounded"
            placeholder="Search a City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
