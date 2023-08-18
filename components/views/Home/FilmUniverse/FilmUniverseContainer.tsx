import { ArrowRight } from '@svgs/common'
import {
  Button,
  Loading,
  ResetErrorBoundary,
  Section,
} from '@/components/common'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import FilmUniverseList from './FilmUniverseList'
import FallbackLoading from '@/components/common/Loading/FallbackLoading'

const FilmUniverseContainer = () => {
  const { push } = useRouter()

  return (
    <Section style={{ marginTop: '100px' }}>
      <Section.Header
        title="Film Universe"
        right={
          <Button
            rightIcon={<ArrowRight />}
            onClick={() => push('/article/filmUniverse')}
          >
            More
          </Button>
        }
      />
      <Section.Body css={SectionBody}>
        <ResetErrorBoundary fallback={<div>에러...</div>}>
          <Suspense fallback={<FallbackLoading />}>
            <FilmUniverseList />
          </Suspense>
        </ResetErrorBoundary>
      </Section.Body>
    </Section>
  )
}

export default FilmUniverseContainer

const SectionBody = css`
  display: flex;
  justify-content: center;
  margin: 44px 0 36px 0;
`
