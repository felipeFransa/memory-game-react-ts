import { GridItemType } from '../../types/GridItemType';
import * as G from './style';
import b7svg from '../../svgs/b7.svg';

type Props = {
  item: GridItemType,
  onClick: () => void
}
export const GridItem = ({ item, onClick }: Props) => {
  return (
    <G.Container onClick={onClick}>
      {item.permanentShown === false && item.shown === false && 
      <G.Icon src={b7svg} alt=""/>
      }
    </G.Container>
  )
}