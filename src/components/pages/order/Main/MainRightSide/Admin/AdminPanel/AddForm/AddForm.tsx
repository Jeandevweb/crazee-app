import { useState } from "react"
import { useOrderContext } from "@/context/OrderContext"
import { EMPTY_PRODUCT } from "@/constants/product"
import { useSuccessMessage } from "@/hooks/useSuccessMessage"
import { replaceFrenchCommaWithDot } from "@/utils/maths"
import Form from "../Form/Form"
import SubmitButton from "./SubmitButton"
import AddFormError from "./AddFormError"
import { validateNewProduct } from "./validation"
import { useParams } from "react-router-dom"

export default function AddForm() {
  // state
  const { handleAdd, newProduct, setNewProduct } = useOrderContext()
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage()
  const [error, setError] = useState<string | null>(null)

  const { username } = useParams()

  // comportements
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!username) return

    const validationError = validateNewProduct(newProduct)
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    }
    handleAdd(newProductToAdd, username)
    setNewProduct(EMPTY_PRODUCT)

    displaySuccessMessage()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
    if (error) setError(null)
  }

  // affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
      {error && <AddFormError message={error} />}
    </Form>
  )
}
