import { ChevronRight, Search } from "lucide-react";
import Products from "./Products";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const ProductPage = () => {
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

          
          <h3 className="font-bold mb-1">
            {t("showingItems")}
          </h3>

          <p className="text-zinc-400 text-sm">
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>
        </div>

        <div className="w-full">
          <Products />
        </div>

        
      </div>
    </div>
  );
};

export default ProductPage;