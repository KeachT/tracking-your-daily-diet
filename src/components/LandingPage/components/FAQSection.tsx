import { Accordion, Stack, Title } from '@mantine/core'

const faqItems = [
  {
    question: '無料で使えますか？',
    answer: 'はい、基本機能は無料でご利用いただけます。',
  },
  {
    question: 'アカウント登録は必要ですか？',
    answer:
      'ゲストモードで登録不要でお試しいただけます。アカウント作成でデータを保存できます。',
  },
  {
    question: 'どんな栄養素を記録できますか？',
    answer: 'カロリー、タンパク質、炭水化物、脂質を記録・管理できます。',
  },
  {
    question: 'スマートフォンで使えますか？',
    answer:
      'ブラウザから利用できます。レスポンシブデザインでスマートフォン・タブレット・PC に対応しています。',
  },
]

export function FAQSection() {
  return (
    <Stack gap="xl" id="faq">
      <Title order={2} ta="center">
        よくある質問
      </Title>

      <Accordion variant="separated">
        {faqItems.map((item) => (
          <Accordion.Item key={item.question} value={item.question}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Stack>
  )
}
