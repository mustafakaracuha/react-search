import { useState } from "react";
import { motion } from "framer-motion";

import { AiOutlineSearch } from "react-icons/ai";
import { LuArmchair } from "react-icons/lu";
import { RiHome8Line, RiMotorbikeLine } from "react-icons/ri";
import { TbBuilding, TbPlane, TbSpeedboat } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiMap } from "react-icons/fi";

import { data } from "./data";

function App() {
  const [allItem, setAllItem] = useState(data);

  const handleSearch = (e) => {
    let searchVal = e.target.value.toLowerCase();
    var filterData = data.filter((item) =>
      item.head.toLowerCase().includes(searchVal)
    );
    setAllItem(filterData);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F3F3FA]">
      <div className="w-[421px] h-[613px] bg-[#EEEBFD] rounded-[31px] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0, 1], transition: { duration: 0.6 } }}
          className="w-[640px] h-[464px] bg-white absolute rounded-[24px] shadow-2xl shadow-[#8675b49e] flex flex-col items-center justify-center p-16"
        >
          <div className="flex items-center justify-center relative">
            <AiOutlineSearch
              size={21}
              className="absolute left-4 text-[#A0A0A0]"
            />
            <motion.input
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              onChange={handleSearch}
              className="w-[348px] h-[56px] border border-[#DBD5EC] focus-visible: outline-none rounded-[4px] placeholder-[#A0A0A0] pl-11"
              placeholder="Search for a part-time job"
            />
            <motion.button
              whileTap={{ scale: 1.07, transition: { duration: 0.1 } }}
              animate={{ opacity: [0, 1] }}
              className="w-[136px] h-[56px] bg-[#281A51] text-white ml-5 rounded-[4px] text-[16px] flex items-center justify-center"
            >
              {" "}
              <FiMap size={19} className=" text-white mr-3" />
              Use Map
            </motion.button>
          </div>
          <div className="w-full h-full grid grid-cols-4 gap-3 mt-8 ml-2">
            {allItem.map((item, index) => (
              <motion.div
                animate={{
                  opacity: [0, 1],
                  scale: [1.1,1],
                  transition: { duration: 0.2,  stiffness: 260,
                    damping: 20 },
                }}
                whileHover={{
                  scale: 1.1,
                  cursor: "pointer",
                }}
                key={index}
                style={{ background: item.background }}
                className="w-[112px] h-[108px] rounded-[8px] flex flex-col items-center justify-center"
              >
                {item.icon === "armchair" ? (
                   <motion.span
                   animate={{
                    rotate: [-20, 20,0],
                    transition: { delay: 0.5 },
                  }}
                   >
                  <LuArmchair size={25} className="mb-1" />
                   </motion.span>
                ) : item.icon === "home" ? (
                  <motion.span
                   animate={{
                    y: [-10, 10,0],
                    transition: { delay: 0.5 },
                  }}
                   >
                  <RiHome8Line size={25} className="mb-1" />
                  </motion.span>
                ) : item.icon === "job" ? (
                  <motion.span
                   animate={{
                    x: [-10, 10,0],
                    transition: { delay: 0.5 },
                  }}
                   >
                  <TbBuilding size={25} className="mb-" />
                  </motion.span>
                ) : item.icon === "plane" ? (
                  <motion.span
                  animate={{
                    opacity:[0,1],
                    x: [-100, 20,0],
                    rotate:[-10,0],
                   transition: { delay: 0.5 },
                 }}
                  >
                  <TbPlane size={25} className="mb-" />
                  </motion.span>
                ) : item.icon === "boat" ? (
                  <motion.span
                  animate={{
                  opacity:[0,1],
                   x: [-100,0],
                   rotate:[-20,-20,0],
                   transition: { delay: 0.5 },
                 }}
                  >
                  <TbSpeedboat size={25} className="mb-" />
                  </motion.span>
                ) : item.icon === "mc" ? (
                  <motion.span
                  animate={{
                    opacity:[0,1],
                    x: [-100,0],
                    rotate:[40,30,0],
                   transition: { delay: 0.5 },
                 }}
                  >
                  <RiMotorbikeLine size={25} className="mb-" />
                  </motion.span>
                ) : (
                  item.icon === "money" && (
                    <motion.span
                    animate={{
                     opacity: [0, 1],
                     scale: [1.3, 1],
                     transition: { delay: 0.5 },
                   }}
                    >
                    <FaRegMoneyBillAlt size={25} className="mb-" />
                     </motion.span>
                  )
                )}
                <motion.p
                  animate={{
                    opacity: [0, 1],
                    transition: { delay: 0.5 },
                  }}
                  className="text-md"
                >
                  {item.head}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
