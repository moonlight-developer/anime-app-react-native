import { FlatList, Pressable, View } from 'react-native'
import styled from 'styled-components/native'
import Spacer from '../../components/shared/spacer'
import { ColorScheme, AppColors } from '../../theme/theme'
import DescriptionContainer from './DescriptionContainer'

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 100px;
  flex-direciton: column;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${ColorScheme.onBackground}
`

const ReleaseDate = styled.Text`
  font-size: 18px;
  color: ${AppColors.myLightGray};
  font-weight: bold;
`

type InfoContainerProps = {
  data: Anime
}

export default function InfoContainer({ data }: InfoContainerProps) {
  const {
    title: { english: title },
    startDate: { day, month, year },
    description,
    genres
  } = data
  const releaseDate = `${(month < 10) ? '0' + month : month}/${(day < 10) ? '0' + day : day}/${year}`

  return (
    <Container>
      <Title>{title}</Title>
      <ReleaseDate>{releaseDate}</ReleaseDate>
      <Spacer h='20px' />
      <GenresList genres={genres} />
      <Spacer h='20px' />
      <DescriptionContainer text={description} />
    </Container>
  )
}

const GenreButton = styled(Pressable).attrs({
  backgroundColor: AppColors.myDarkGrey
})`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px 10px 15px;
`

const GenreButtonText = styled.Text`
  color: #ffffff;
`

type GenresListProps = {
  genres: string[]
}

function GenresList({ genres }: GenresListProps) {
  return (
    <View>
      <FlatList
        data={genres}
        horizontal
        renderItem={({ item }) =>
          <GenreButton>
            <GenreButtonText>{item}</GenreButtonText>
          </GenreButton>
        }
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
