import '@/assets/styles/base.scss'
import {
  DEFAULT_PAGE_SUMMARY_BLACKLIST,
  getUserConfig,
  Language,
  Theme,
  updateUserConfig,
} from '@/config'
import { detectSystemColorScheme } from '@/utils/utils'
import { CssBaseline, GeistProvider, Radio, Select, Text, useToasts } from '@geist-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'
import Header from './Header'
import ProviderSelect from './ProviderSelect'
import './styles.scss'

interface PageSummaryProps {
  pageSummaryEnable: boolean
  setPageSummaryEnable: (state: boolean) => void
  pageSummaryWhitelist: string
  setPageSummaryWhitelist: (whitelist: string) => void
  pageSummaryBlacklist: string
  setPageSummaryBlacklist: (blacklist: string) => void
}

function OptionsPage(
  props: {
    theme: Theme
    onThemeChange: (theme: Theme) => void
  } & PageSummaryProps,
) {
  const [language, setLanguage] = useState<Language>(Language.Auto)
  const { setToast } = useToasts()

  const onThemeChange = useCallback(
    (theme: Theme) => {
      updateUserConfig({ theme })
      props.onThemeChange(theme)
      setToast({ text: 'Changes saved', type: 'success' })
    },
    [props, setToast],
  )

  const onLanguageChange = useCallback(
    (language: Language) => {
      updateUserConfig({ language })
      setToast({ text: 'Changes saved', type: 'success' })
    },
    [setToast],
  )

  const getSplitString = (str: string) => {
    if (str && str.includes('Chinese')) {
      return `Chinese (${str.split('Chinese')[1] || ''})`
    }
    return str ?? ''
  }

  useEffect(() => {
    getUserConfig().then((config) => {
      setLanguage(config.language)
    })
  }, [])

  return (
    <div className="glarity--container glarity--mx-auto">
      <Header />

      <main className="glarity--w-[900px] glarity--mx-auto glarity--mt-14 glarity--options">
        <Text h2>Options</Text>

        {/* Theme */}
        <Text h3 className="glarity--mt-5">
          Theme
        </Text>
        <Radio.Group value={props.theme} onChange={(val) => onThemeChange(val as Theme)} useRow>
          {Object.entries(Theme).map(([k, v]) => {
            return (
              <Radio key={v} value={v}>
                {k}
              </Radio>
            )
          })}
        </Radio.Group>

        {/* Language */}
        <Text h3 className="glarity--mt-5 glarity--mb-0">
          Language
        </Text>
        <Text className="glarity--my-1">
          The language used in ChatGPT response. <span className="glarity--italic">Auto</span> is
          recommended.
        </Text>
        <Select
          value={language}
          placeholder="Choose one"
          onChange={(val) => onLanguageChange(val as Language)}
        >
          {Object.entries(Language).map(([k, v]) => (
            <Select.Option key={k} value={v}>
              {getSplitString(String(k))}
            </Select.Option>
          ))}
        </Select>

        {/* AI Provider */}
        <Text h3 className="glarity--mt-5 glarity--mb-0">
          AI Provider
        </Text>
        <ProviderSelect />
      </main>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState(Theme.Auto)
  const [pageSummaryEnable, setPageSummaryEnable] = useState(true)
  const [pageSummaryWhitelist, setPageSummaryWhitelist] = useState<string>('')
  const [pageSummaryBlacklist, setPageSummaryBlacklist] = useState<string>('')

  const themeType = useMemo(() => {
    if (theme === Theme.Auto) {
      return detectSystemColorScheme()
    }
    return theme
  }, [theme])

  useEffect(() => {
    getUserConfig().then((config) => {
      setTheme(config.theme)
      setPageSummaryEnable(config.pageSummaryEnable)
      setPageSummaryWhitelist(config.pageSummaryWhitelist)
      setPageSummaryBlacklist(
        config.pageSummaryBlacklist ? config.pageSummaryBlacklist : DEFAULT_PAGE_SUMMARY_BLACKLIST,
      )
    })
  }, [])

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <OptionsPage
        theme={theme}
        onThemeChange={setTheme}
        setPageSummaryEnable={setPageSummaryEnable}
        pageSummaryEnable={pageSummaryEnable}
        pageSummaryWhitelist={pageSummaryWhitelist}
        pageSummaryBlacklist={pageSummaryBlacklist}
        setPageSummaryWhitelist={setPageSummaryWhitelist}
        setPageSummaryBlacklist={setPageSummaryBlacklist}
      />
    </GeistProvider>
  )
}
