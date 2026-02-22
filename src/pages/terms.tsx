import { Layout } from '../components/Layout'
import { LegalDocumentMock } from '../components/LegalDocumentMock'

const sections = [
  {
    heading: '第1条（適用）',
    contents: [
      '本規約は、本サービスの利用条件を定めるものです。',
      'ユーザーは、本規約に同意の上で本サービスを利用するものとします。',
    ],
  },
  {
    heading: '第2条（アカウント）',
    contents: [
      '登録情報は正確かつ最新の情報を提供してください。',
      'アカウント管理はユーザー自身の責任で行うものとします。',
    ],
  },
  {
    heading: '第3条（禁止事項）',
    contents: [
      '法令または公序良俗に違反する行為を禁止します。',
      '本サービスの運営を妨害する行為を禁止します。',
    ],
  },
]

export default function TermsPage() {
  return (
    <Layout title="利用規約">
      <LegalDocumentMock
        title="利用規約"
        effectiveDate="2026年1月1日"
        sections={sections}
      />
    </Layout>
  )
}
