import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import AllList from "~/components/AllList/AllList";
import Loading from "~/components/Loading/Loading";
import {
  getAllTeams,
  filterTeams,
  getFilteredTeams,
} from "~/redux/slices/teamsSlice";

const Lists = () => {
  const dispatch = useDispatch();

  const { filteredTeams, status } = useSelector((store) => store.teams);

  const [filters, setFilters] = useState({ position: "", city: "" });

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(getFilteredTeams(filters));
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-mainBg bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-start items-start relative overflow-hidden"
    >
      <h1 className="container  mx-auto text-3xl font-semibold text-zinc-800 mb-5 mt-12 border-b pb-5 flex gap-x-2 items-center">
        <TbListDetails />
        Takım İlanları
      </h1>
      <div className="container mx-auto rounded-xl flex  gap-4">
        <div className="w-full grid grid-cols-1 gap-5 ">
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
              <AllList key={team.teamID} team={team} />
            ))
          ) : (
            <div className=" bg-red-50 px-4 py-2 rounded-md border border-red-600 text-red-600">
              Henüz herhangi bir ilan oluşturulmamış.
            </div>
          )}
        </div>
        <div className="col-span-1 bg-white max-h-[250px] rounded-xl border  p-5 shadow">
          <h1 className="text-xl font-semibold pb-4 border-b w-full">
            Filtrele
          </h1>
          <form
            className="w-full flex flex-col  mt-3 gap-5 "
            onSubmit={handleFilterSubmit}
          >
            <select
              name="position"
              value={filters.position}
              onChange={handleFilterChange}
              className="text-sm py-2 rounded-md border outline-none"
            >
              <option value="">Pozisyon seçiniz..</option>
              <option value="defans">Defans</option>
              <option value="kaleci">Kaleci</option>
              <option value="forvet">Forvet</option>
            </select>
            <select
              name="city"
              value={filters.city}
              onChange={handleFilterChange}
              className="text-sm py-2 rounded-md border outline-none"
            >
              <option value="">Şehir seçiniz..</option>
              <option value="İstanbul">İstanbul</option>
              <option value="İzmir">İzmir</option>
              <option value="Ankara">Ankara</option>
              <option value="Bursa">Bursa</option>
              <option value="Antalya">Antalya</option>
              <option value="Tekirdağ">Tekirdağ</option>
            </select>
            <button className="col-span-2 bg-primary text-white px-4 py-2 rounded-md ">
              Filtrele
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Lists;
