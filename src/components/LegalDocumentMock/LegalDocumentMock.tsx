import { Card, List, Stack, Text, Title } from '@mantine/core'

type LegalSection = {
  heading: string
  contents: string[]
}

type LegalDocumentMockProps = {
  title: string
  effectiveDate: string
  sections: LegalSection[]
}

export function LegalDocumentMock({
  title,
  effectiveDate,
  sections,
}: LegalDocumentMockProps) {
  return (
    <Stack gap="lg" w="100%" maw={900} mx="auto" py="xl">
      <Stack gap={4}>
        <Title order={1}>{title}</Title>
        <Text size="sm" c="dimmed">
          制定日: {effectiveDate}（モック）
        </Text>
      </Stack>

      {sections.map((section) => (
        <Card key={section.heading} withBorder radius="md" padding="lg">
          <Stack gap="sm">
            <Title order={3}>{section.heading}</Title>
            <List spacing="xs">
              {section.contents.map((content) => (
                <List.Item key={content}>{content}</List.Item>
              ))}
            </List>
          </Stack>
        </Card>
      ))}
    </Stack>
  )
}
