import styled, { css } from "styled-components"
import { MdDeleteForever } from "react-icons/md"
import { FiMinus, FiPlus } from "react-icons/fi"
import { theme } from "@/theme/theme"
import CasinoEffect from "@/components/reusable-ui/CasinoEffect"
import Sticker from "@/components/reusable-ui/Sticker"

type BasketCardProps = {
  title: string,
  price: string,
  quantity: number,
  imageSource: string,
  className?: string,
  isClickable?: boolean,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  onDelete?: React.MouseEventHandler<HTMLDivElement>,
  onIncrement?: React.MouseEventHandler<HTMLButtonElement>,
  onDecrement?: React.MouseEventHandler<HTMLButtonElement>,
  isSelected?: boolean,
  isPublicised?: boolean,
}

export default function BasketCard({
  title,
  price,
  quantity,
  imageSource,
  className,
  isClickable,
  onClick,
  onDelete,
  onIncrement,
  onDecrement,
  isSelected,
  isPublicised,
}: BasketCardProps) {
  return (
    <BasketCardStyled className={className} $isClickable={isClickable} onClick={onClick} $isSelected={isSelected}>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={title} />
        {isPublicised && <Sticker className="badge-new" />}
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{price}</span>
          <div className="quantity">
            <button
              type="button"
              className="stepper-button"
              aria-label={`Retirer un ${title}`}
              onClick={onDecrement}
            >
              <FiMinus />
            </button>
            <CasinoEffect count={`x ${quantity}`} />
            <button
              type="button"
              className="stepper-button"
              aria-label={`Ajouter un ${title}`}
              onClick={onIncrement}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </BasketCardStyled>
  )
}

type BasketCardStyledProps = {
  $isClickable?: boolean,
  $isSelected?: boolean
}

const BasketCardStyled = styled.div<BasketCardStyledProps>`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  box-sizing: border-box;
  height: 100px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.surface};
  box-shadow: ${theme.shadows.cardBasket};

  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;
    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
      margin-left: 21px;
      min-width: 0;
      .title {
        display: flex;
        align-items: center;
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        line-height: 28px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        /* sans cette div avec "min-width: 0", l'ellipsis ne fonctionne pas dans un span : https://semicolon.dev/tutorial/css/text-overflow-ellipsis-doesnt-work#:~:text=If%20your%20text%2Doverflow%20is,Grid%20or%20on%20a%20Table. */
        min-width: 0;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.medium};
        font-family: ${theme.fonts.family.openSans};
      }

      /* Steppers placés sous le prix, alignés à gauche pour ne pas passer sous
         l'overlay rouge de suppression qui recouvre la droite de la carte au survol. */
      .quantity {
        box-sizing: border-box;
        font-weight: ${theme.fonts.weights.medium};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        margin-top: 2px;
        font-size: ${theme.fonts.size.SM};

        .stepper-button {
          /* z-index > celui de l'overlay de suppression (1) : les steppers
             restent cliquables même si l'overlay venait à les chevaucher. */
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          padding: 0;
          border: 1px solid ${theme.colors.primary};
          border-radius: ${theme.borderRadius.circle};
          background: transparent;
          color: ${theme.colors.primary};
          cursor: pointer;
          transition: all 200ms ease;

          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        }
      }
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  /* hover de la card */
  :hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      /* behaviour on delete-button hover */
      :hover {
        .icon {
          color: ${theme.colors.dark};
        }
        :active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }

  ${({ $isClickable, $isSelected }) => $isClickable && $isSelected && selectedStyled}
`

const selectedStyled = css`
  background: ${theme.colors.primary};
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`
