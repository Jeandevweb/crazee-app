import { useState } from "react"
import styled from "styled-components"
import { TbArrowsSort } from "react-icons/tb"
import { useOrderContext } from "@/context/OrderContext"
import { theme } from "@/theme/theme"
import { formatPrice } from "@/utils/maths"
import Card from "@/components/reusable-ui/Card"
import SelectInput from "@/components/reusable-ui/SelectInput"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"
import { checkIfProductIsClicked, sortMenu, SORT_OPTIONS, SortOption } from "./helper"
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "@/constants/product"
import { isEmpty } from "@/utils/array"
import Loader from "./Loader"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { menuAnimation, ribbonAnimation } from "@/theme/animations"
import { convertStringToBoolean } from "@/utils/string"
import RibbonAnimated from "./RibbonAnimated"
import { useParams } from "react-router-dom"

export default function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useOrderContext()

  const [sortOption, setSortOption] = useState<SortOption>("default")

  const { username } = useParams()

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleCardDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, idProductToDelete: string) => {
    event.stopPropagation()
    if (!username) return
    handleDelete(idProductToDelete, username)
    handleDeleteBasketProduct(idProductToDelete, username)
    if (idProductToDelete === productSelected.id) setProductSelected(EMPTY_PRODUCT)
  }

  const handleAddButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, idProductToAdd: string) => {
    event.stopPropagation()
    if (username) handleAddToBasket(idProductToAdd, username)
  }

  const cardContainerClassName = isModeAdmin ? "card-container is-hoverable" : "card-container"

  // affichage
  if (menu === undefined) return <Loader />

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />
    if (username) return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
  }

  const sortedMenu = sortMenu(menu, sortOption)

  return (
    <MenuLayoutStyled>
      <MenuToolbarStyled>
        <SelectInput
          name="sort"
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value as SortOption)}
          options={SORT_OPTIONS}
          Icon={<TbArrowsSort />}
          className="sort-select"
        />
      </MenuToolbarStyled>
      <TransitionGroup component={MenuStyled} className="menu">
        {sortedMenu.map(({ id, title, imageSource, price, isAvailable, isPublicised }) => {
        return (
          <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
            <div className={cardContainerClassName}>
              {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
              <Card
                title={title}
                imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                leftDescription={formatPrice(price)}
                hasDeleteButton={isModeAdmin}
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={() => handleProductSelected(id)}
                isHoverable={isModeAdmin}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
                onAdd={(event) => handleAddButton(event, id)}
                overlapImageSource={IMAGE_NO_STOCK}
                isOverlapImageVisible={convertStringToBoolean(isAvailable) === false}
              />
            </div>
          </CSSTransition>
          )
        })}
      </TransitionGroup>
    </MenuLayoutStyled>
  )
}

const MenuLayoutStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const MenuToolbarStyled = styled.div`
  background: ${theme.colors.background_white};
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  padding: 16px 50px 0;

  .sort-select {
    min-width: 220px;
    border: 1px solid ${theme.colors.greyLight};
  }
`

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 30px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px; // pour éviter une zone de click verticale bizarre qu'on voit qu'au pointeur de l'outil inspect du navigateur
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      :hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`
