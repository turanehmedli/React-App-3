import { ChevronRight, Search } from "lucide-react";
import Products from "./Products";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="xl:w-360 w-full h-full flex flex-col justify-center items-center">
      <div className="xl:w-280.5 w-full h-full p-5">
        <div className="w-full flex flex-col">
  
          <h2 className="text-[36px] font-bold">
            {t("productCollection")}
          </h2>

          <div className="relative w-full h-14 border rounded-full overflow-hidden my-9">
            <input
              type="search"
              className="w-full px-4 h-full outline-none"
              placeholder={t("searchPlaceholder")} // 🔥
              name="search"
            />
            <div className="text-white absolute top-1 rounded-full right-1 size-12 flex justify-center items-center bg-[#a6a6a6] ">
              <Search />
            </div>
          </div>

          {/* 🔥 */}
          <h3 className="font-bold mb-1">
            {t("showingItems")}
          </h3>

          <p className="text-zinc-400 text-sm">
            {/* Lorem'u çevirmiyoruz dedin, o yüzden bıraktım */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <Products />
        </div>

        <div className="w-full flex h-full justify-center items-center flex-col">
          <div className="w-124.5 flex flex-col justify-center mt-16">
            
            {/* 🔥 */}
            <div className="w-full h-full font-semibold text-md flex justify-center items-center my-10">
              <h2>{t("showingItems")}</h2>
            </div>

            <div className="w-full border"></div>

            <div className="w-full h-full flex justify-center items-center my-10">
              <button className="w-45 flex gap-2 bg-black rounded-full text-white py-4 justify-center items-center font-bold text-lg">
                
                {/* 🔥 */}
                {t("loadMore")} <ChevronRight />
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;