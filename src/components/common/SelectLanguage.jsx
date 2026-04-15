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
    <select value={langua} onChange={handleLanguageC} className="border p-3 rounded-2xl py-4 text-lg font-bold ease-in-out duration-300 border-zinc-400 hover:bg-zinc-400">
        {
            language.map(lang => <option value={lang.value}>{lang.title}</option>)
        }
    </select>
  )
}

export default SelectLanguage