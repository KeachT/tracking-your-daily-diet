import { Card, List, Stack, Text, Title } from '@mantine/core'

type LegalSection = {
  heading: string
  contents: string[]
}

type LegalDocumentProps = {
  title: string
  effectiveDate: string
  /** Omitted until the document is first revised, so a new page shows only 制定日. */
  revisedDate?: string
  sections: LegalSection[]
}

export function LegalDocument({
  title,
  effectiveDate,
  revisedDate,
  sections,
}: LegalDocumentProps) {
  return (
    <Stack gap="lg" w="100%" maw={900} mx="auto" py="xl">
      <Stack gap={4}>
        <Title order={1}>{title}</Title>
        <Text size="sm" c="dimmed">
          制定日: {effectiveDate}
        </Text>
        {revisedDate && (
          <Text size="sm" c="dimmed">
            最終改定日: {revisedDate}
          </Text>
        )}
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
