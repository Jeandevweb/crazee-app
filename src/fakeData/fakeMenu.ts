import { MenuProduct } from "@/types/Product"

const EMPTY: MenuProduct[] = []

// Menu par défaut proposé à chaque nouvel utilisateur (et au reset admin).
// Volontairement varié (burgers / boissons / accompagnements / dessert) pour
// donner une bonne première impression et montrer les états "nouveau" (ruban)
// et "en rupture" (overlay).
const DEFAULT: MenuProduct[] = [
  {
    id: "1",
    imageSource: "/images/burger-bacon-egg.png",
    title: "Le Smoky BBQ",
    price: 11.9,
    isAvailable: true,
    isPublicised: true,
  },
  {
    id: "2",
    imageSource: "/images/burger5.png",
    title: "Le Double Bacon",
    price: 12.9,
    isAvailable: true,
    isPublicised: true,
  },
  {
    id: "3",
    imageSource: "/images/burger-vegan.png",
    title: "Le Veggie Deluxe",
    price: 10.5,
    isAvailable: true,
    isPublicised: false,
  },
  {
    id: "4",
    imageSource: "/images/burger3.png",
    title: "Le Crispy Chicken",
    price: 10.9,
    isAvailable: true,
    isPublicised: false,
  },
  {
    id: "5",
    imageSource: "/images/burger4.png",
    title: "Le Classic Cheese",
    price: 9.5,
    isAvailable: true,
    isPublicised: false,
  },
  {
    id: "6",
    imageSource: "/images/burger6.png",
    title: "Le Montagnard",
    price: 12.5,
    isAvailable: false,
    isPublicised: false,
  },
  {
    id: "7",
    imageSource: "/images/frites1.png",
    title: "Frites Maison",
    price: 3.5,
    isAvailable: true,
    isPublicised: false,
  },
  {
    id: "8",
    imageSource: "/images/wedges1.png",
    title: "Potatoes Épicées",
    price: 3.9,
    isAvailable: true,
    isPublicised: false,
  },
  {
    id: "9",
    imageSource: "/images/drink1.png",
    title: "Coca-Cola 33cl",
    price: 2.5,
    isAvailable: true,
    isPublicised: false,
  },
  {
    id: "10",
    imageSource: "/images/drink3.png",
    title: "Ice Tea Pêche",
    price: 2.9,
    isAvailable: true,
    isPublicised: false,
  },
  {
    id: "11",
    imageSource: "/images/ice-cream.png",
    title: "Glace Vanille-Caramel",
    price: 4.5,
    isAvailable: true,
    isPublicised: false,
  },
]

export const fakeMenu = {
  EMPTY,
  DEFAULT,
}
