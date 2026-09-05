import { Accordion, Stack, Title } from '@mantine/core'

const faqItems = [
  {
    question: '無料で使えますか？',
    answer:
      'はい、無料でご利用いただけます。個人が非商用で運営しているため広告や課金はなく、今後も無料で提供する予定です。',
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
  {
    question: 'データはどこに保存されますか？',
    answer:
      'AWS のクラウド環境に保存されます。ログインしたご本人以外がデータを閲覧・編集することはできません。',
  },
  {
    question: 'どんな体制で運営していますか？',
    answer:
      '個人が趣味で開発・運営している非商用のアプリです。企業による運営ではないため、サポート対応や稼働率の保証はありません。ご要望や不具合の報告は、ページ下部のお問い合わせフォームからお寄せください。',
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
