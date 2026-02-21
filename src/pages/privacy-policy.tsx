import { Layout } from '../components/Layout'
import { LegalDocumentMock } from '../components/LegalDocumentMock'

const sections = [
  {
    heading: '1. 取得する情報',
    contents: [
      'メールアドレスやプロフィール情報など、登録時に入力された情報を取得します。',
      '食事記録や目標設定など、サービス利用時に入力された情報を取得します。',
    ],
  },
  {
    heading: '2. 利用目的',
    contents: [
      'サービス提供、ユーザーサポート、お知らせ配信のために利用します。',
      '品質向上や機能改善のため、統計的な分析に利用します。',
    ],
  },
  {
    heading: '3. 第三者提供',
    contents: [
      '法令に基づく場合を除き、本人の同意なく第三者へ提供しません。',
      '業務委託先へ提供する場合は、適切な監督を行います。',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <Layout title="プライバシーポリシー">
      <LegalDocumentMock
        title="プライバシーポリシー"
        effectiveDate="2026年1月1日"
        sections={sections}
      />
    </Layout>
  )
}
