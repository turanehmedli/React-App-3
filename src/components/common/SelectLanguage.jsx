import { language } from "../../locales/i18"
import { useTranslation } from "react-i18next"
import { useLang } from "../../stores/langStore"

const SelectLanguage = () => {
    const {selectLanguage, langua} = useLang()
    const {i18n} = useTranslation()

    function handleLanguageC(e) {
        selectLanguage(e.target.value)
        i18n.changeLanguage(e.target.value)
    }

  return (
    <select value={langua} onChange={handleLanguageC} className="border  rounded-2xl py-2 px-2 text-md font-bold ease-in-out duration-300 border-zinc-400 hover:bg-zinc-400">
        {
            language.map((lang, index )=> <option key={index} value={lang.value}>{lang.title}</option>)
        }
    </select>
  )
}

export default SelectLanguage