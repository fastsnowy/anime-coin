import Link from 'next/link'
import { ReactElement } from 'react'

import { Container, SimpleGrid, Group, Button, Title } from '@mantine/core'

import { Layout } from '@/layouts'
import { getSeasons } from '@/utils/getseason'

export default function AllSeasons() {
  return (
    <>
      <Container p='md' size='md'>
        <Title
          order={2}
          className='p-3 px-2 text-center'
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.gray[7],
          })}
        >
          各クール一覧
        </Title>
        <SimpleGrid
          cols={4}
          spacing='xs'
          breakpoints={[
            { maxWidth: 'md', cols: 3 },
            { maxWidth: 'xs', cols: 1 },
          ]}
        >
          {
            // getSeasonsの配列を逆順で取得
            getSeasons()
              .reverse()
              .map((season) => (
                <Group position='center' p='md' key={`${season.seasons}`}>
                  <Link href={`/seasons/${season.seasons}`}>
                    <Button variant='subtle' color='cyan' size='xl'>
                      {season.seasons
                        .replace('winter', '冬')
                        .replace('spring', '春')
                        .replace('summer', '夏')
                        .replace('autumn', '秋')}
                    </Button>
                  </Link>
                </Group>
              ))
          }
        </SimpleGrid>
      </Container>
    </>
  )
}

AllSeasons.getLayout = function getLayout(pages: ReactElement) {
  return <Layout>{pages}</Layout>
}