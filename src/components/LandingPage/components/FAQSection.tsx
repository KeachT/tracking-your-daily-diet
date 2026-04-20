import { Accordion, Stack, Title } from '@mantine/core'

const faqItems = [
  {
    question: '無料で使えますか？',
    answer:
      'はい、基本機能は無料でご利用いただけます。有料版機能については後日追加予定です。',
  },
  {
    question: 'アカウント登録は必要ですか？',
    answer: 'ゲストモードがあり登録不要でお試しいただけます。',
  },
  {
    question: 'どんな栄養素を記録できますか？',
    answer: 'カロリー、タンパク質、炭水化物、脂質を記録することができます。',
  },
  {
    question: 'スマートフォンで使えますか？',
    answer:
      '使用できます。ブラウザから利用でき、スマートフォン・タブレット・PC に対応しています。',
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
