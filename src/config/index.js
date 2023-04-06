import { defaults } from 'lodash-es'
import Browser from 'webextension-polyfill'

export const Theme = {
  Auto: 'auto',
  Light: 'light',
  Dark: 'dark',
}

export const Language = {
  Auto: 'auto',
  English: 'en-US',
  ChineseSimplified: 'zh-Hans',
  ChineseTraditional: 'zh-Hant',
  Spanish: 'es-ES',
  French: 'fr-FR',
  Korean: 'ko-KR',
  Japanese: 'ja-JP',
  German: 'de-DE',
  Portuguese: 'pt-PT',
  Russian: 'ru-RU',
}

export const ProviderType = {
  ChatGPT: 'chatgpt',
  GPT3: 'gpt3',
}

const userConfigWithDefaultValue = {
  theme: Theme.Auto,
  language: Language.Auto,
  prompt: '',
  promptSearch: '',
  promptPage: '',
  promptComment: '',
  enableSites: null,
  pageSummaryEnable: true,
  pageSummaryWhitelist: '',
  pageSummaryBlacklist: '',
}

export async function getUserConfig() {
  const result = await Browser.storage.local.get(Object.keys(userConfigWithDefaultValue))
  return defaults(result, userConfigWithDefaultValue)
}

export async function updateUserConfig(updates) {
  console.debug('update configs', updates)
  return Browser.storage.local.set(updates)
}

export async function getProviderConfigs() {
  const { provider = ProviderType.ChatGPT } = await Browser.storage.local.get('provider')
  const configKey = `provider:${ProviderType.GPT3}`
  const result = await Browser.storage.local.get(configKey)
  return {
    provider,
    configs: {
      [ProviderType.GPT3]: result[configKey],
    },
  }
}

export async function saveProviderConfigs(provider, configs) {
  return Browser.storage.local.set({
    provider,
    [`provider:${ProviderType.GPT3}`]: configs[ProviderType.GPT3],
  })
}

export const BASE_URL = 'https://chat.openai.com'

export const DEFAULT_PAGE_SUMMARY_BLACKLIST = `https://translate.google.com
https://www.deepl.com
https://www.youtube.com
https://youku.com
https://v.qq.com
https://www.iqiyi.com
https://www.bilibili.com
https://www.tudou.com
https://www.tiktok.com
https://vimeo.com
https://www.dailymotion.com
https://www.twitch.tv
https://www.hulu.com
https://www.netflix.com
https://www.hbomax.com
https://www.disneyplus.com
https://www.peacocktv.com
https://www.crunchyroll.com
https://www.funimation.com
https://www.viki.com
`
export const APP_TITLE = `Glarity`
export const DEFAULT_MODEL = 'gpt-3.5-turbo'
export const DEFAULT_API_HOST = 'api.openai.com'
