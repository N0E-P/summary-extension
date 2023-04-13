import '@/assets/styles/base.scss'
import { getUserConfig, Language, Theme, updateUserConfig } from '@/config'
import { detectSystemColorScheme } from '@/utils/utils'
import { GeistProvider, Radio, Select, Text } from '@geist-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'

export default function App() {
  const [theme, setTheme] = useState(Theme.Auto)
  const [language, setLanguage] = useState(Language.Auto)

  const themeType = useMemo(() => {
    if (theme === Theme.Auto) {
      return detectSystemColorScheme()
    }
    return theme
  }, [theme])

  const onThemeChange = useCallback(
    (theme) => {
      updateUserConfig({ theme })
      setTheme(theme)
    },
    [theme],
  )

  const onLanguageChange = useCallback(
    (language) => {
      updateUserConfig({ language })
    },
    [language],
  )

  const getSplitString = (str) => {
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

  useEffect(() => {
    getUserConfig().then((config) => {
      setTheme(config.theme)
    })
  }, [])

  return (
    <GeistProvider themeType={themeType}>
      <div className="glarity--container glarity--mx-auto">
        <main className="glarity--mx-auto glarity--mt-14 glarity--options">
          <Text h2>Options</Text>

          {/* Theme */}
          <Text h3 className="glarity--mt-5">
            Theme
          </Text>
          <Radio.Group value={theme} onChange={(val) => onThemeChange(val)} useRow>
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
          <Text className="glarity--my-1">The language used in ChatGPT response.</Text>
          <Select
            value={language}
            placeholder="Choose one"
            onChange={(val) => onLanguageChange(val)}
          >
            {Object.entries(Language).map(([k, v]) => (
              <Select.Option key={k} value={v}>
                {getSplitString(String(k))}
              </Select.Option>
            ))}
          </Select>
        </main>
      </div>
    </GeistProvider>
  )
}
