import * as yup from "yup"

export const validation = yup.object().shape({
    email: yup.string().email("Email formatı doğru deyil")
})